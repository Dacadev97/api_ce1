const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Genero = require("./genero");
const Director = require("./director");
const Productora = require("./productora");
const Tipo = require("./tipo");

const Media = sequelize.define("Media", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  serial: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  sinopsis: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url_pelicula: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  imagen_portada: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  fecha_actualizacion: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  año_estreno: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  genero_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Genero,
      key: "id",
    },
    allowNull: false,
  },
  director_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Director,
      key: "id",
    },
    allowNull: false,
  },
  productora_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Productora,
      key: "id",
    },
    allowNull: false,
  },
  tipo_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Tipo,
      key: "id",
    },
    allowNull: false,
  },
});

Media.belongsTo(Genero, { foreignKey: "genero_id" });
Media.belongsTo(Director, { foreignKey: "director_id" });
Media.belongsTo(Productora, { foreignKey: "productora_id" });
Media.belongsTo(Tipo, { foreignKey: "tipo_id" });

module.exports = Media;
