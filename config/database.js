const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('peliculas_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres', // o 'postgres', 'sqlite', 'mariadb', 'mssql'
});

module.exports = sequelize;