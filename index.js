const express = require("express");
const app = express();
const port = 3000;
const generoRoutes = require("./routes/generoRoutes");
const directorRoutes = require("./routes/directorRoutes");

app.use(express.json());

app.use("/generos", generoRoutes);
app.use("/directores", directorRoutes);

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
