'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Media', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      serial: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING
      },
      sinopsis: {
        type: Sequelize.TEXT
      },
      url_pelicula: {
        type: Sequelize.STRING
      },
      imagen_portada: {
        type: Sequelize.STRING
      },
      fecha_creacion: {
        type: Sequelize.DATE
      },
      fecha_actualizacion: {
        type: Sequelize.DATE
      },
      año_estreno: {
        type: Sequelize.INTEGER
      },
      genero_id: {
        type: Sequelize.INTEGER
      },
      director_id: {
        type: Sequelize.INTEGER
      },
      productora_id: {
        type: Sequelize.INTEGER
      },
      tipo_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Media');
  }
};