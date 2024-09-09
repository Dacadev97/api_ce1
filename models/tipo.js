const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Tipo = sequelize.define(
  "Tipo",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_actualizacion: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Tipo",
  }
);

module.exports = Tipo;
