const express = require("express");
const cors = require("cors");
const { Sequelize } = require("sequelize");
const sequelize = require("./config/database");
const { exec } = require("child_process");
const app = express();
let port = 5000; // Puerto inicial

const generoRoutes = require("./routes/generoRoutes");
const directorRoutes = require("./routes/directorRoutes");
const productoraRoutes = require("./routes/productoraRoutes");
const tipoRoutes = require("./routes/tipoRoutes");
const mediaRoutes = require("./routes/mediaRoutes");

app.use(cors());
app.use(express.json());

app.use("/generos", generoRoutes);
app.use("/directores", directorRoutes);
app.use("/productoras", productoraRoutes);
app.use("/tipos", tipoRoutes);
app.use("/medias", mediaRoutes);

async function checkAndMigrate() {
  try {
    const tables = await sequelize.showAllSchemas();
    if (tables.length === 0) {
      console.log("Database is empty. Running migrations...");
      exec("npx sequelize-cli db:migrate", (error, stdout, stderr) => {
        if (error) {
          console.error(`Migration error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Migration stderr: ${stderr}`);
          return;
        }
        console.log(`Migration stdout: ${stdout}`);
      });
    } else {
      console.log("Database is not empty. Skipping migrations.");
    }
  } catch (error) {
    console.error("Error checking database schemas:", error);
  }
}

sequelize
  .authenticate()
  .then(async () => {
    console.log("Connection has been established successfully.");
    await checkAndMigrate();
    const server = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });

    server.on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.error(`Port ${port} is already in use, trying another port...`);
        port++;
        server.listen(port);
      } else {
        throw err;
      }
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
