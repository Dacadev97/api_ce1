const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("peliculas_db", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
