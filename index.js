const express = require("express");
const app = express();
const port = 3000;
const generoRoutes = require("./routes/generoRoutes");
const directorRoutes = require("./routes/directorRoutes");
const productoraRoutes = require("./routes/productoraRoutes");

app.use(express.json());

app.use("/generos", generoRoutes);
app.use("/directores", directorRoutes);
app.use("/productoras", productoraRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
