const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Genero = require("./genero");
const Director = require("./director");
const Productora = require("./productora");
const Tipo = require("./tipo");

const Media = sequelize.define("Media", {
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
  url: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  imagen: {
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
  generoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Genero,
      key: "id",
    },
    allowNull: false,
  },
  directorId: {
    type: DataTypes.INTEGER,
    references: {
      model: Director,
      key: "id",
    },
    allowNull: false,
  },
  productoraId: {
    type: DataTypes.INTEGER,
    references: {
      model: Productora,
      key: "id",
    },
    allowNull: false,
  },
  tipoId: {
    type: DataTypes.INTEGER,
    references: {
      model: Tipo,
      key: "id",
    },
    allowNull: false,
  },
});

Media.belongsTo(Genero, { foreignKey: "generoId" });
Media.belongsTo(Director, { foreignKey: "directorId" });
Media.belongsTo(Productora, { foreignKey: "productoraId" });
Media.belongsTo(Tipo, { foreignKey: "tipoId" });

module.exports = Media;
