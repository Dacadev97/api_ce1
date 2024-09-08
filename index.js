const express = require("express");
const app = express();
const port = 3000;
const generoRoutes = require("./routes/generoRoutes");

app.use(express.json());

app.use("/generos", generoRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});




