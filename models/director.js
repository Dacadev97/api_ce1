'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Director.init({
    nombres: DataTypes.STRING,
    estado: DataTypes.BOOLEAN,
    fecha_creacion: DataTypes.DATE,
    fecha_actualizacion: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Director',
  });
  return Director;
};