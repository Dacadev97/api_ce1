const Genero = require("../models/director");

const crearDirector = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);
    const director = await Director.create(req.body);
    res.status(201).json(director);
  } catch (error) {
    console.error("Error al crear director:", error);
    res.status(400).json({ error: error.message });
  }
};

const editarDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(404).json({ error: "Director no encontrado" });
    }
    await director.update(req.body);
    res.json(director);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eliminarDirector = async (req, res) => {
  try {
    const { id } = req.params;
    const director = await Director.findByPk(id);

    if (!director) {
      return res.status(404).json({ error: "Director no encontrado" });
    }
    await director.destroy();
    res.json({ message: "Director eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obtenerDirector = async (req, res) => {
  try {
    const director = await Director.findAll();
    res.json(director);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearDirector,
  editarDirector,
  eliminarDirector,
  obtenerDirector,
};
