'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Media.init({
    serial: DataTypes.STRING,
    titulo: DataTypes.STRING,
    sinopsis: DataTypes.TEXT,
    url_pelicula: DataTypes.STRING,
    imagen_portada: DataTypes.STRING,
    fecha_creacion: DataTypes.DATE,
    fecha_actualizacion: DataTypes.DATE,
    año_estreno: DataTypes.INTEGER,
    genero_id: DataTypes.INTEGER,
    director_id: DataTypes.INTEGER,
    productora_id: DataTypes.INTEGER,
    tipo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Media',
  });
  return Media;
};