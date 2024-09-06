'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tipo.init({
    nombre: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    fecha_actualizacion: DataTypes.DATE,
    descripcion: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Tipo',
  });
  return Tipo;
};