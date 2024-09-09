const Tipo = require("../models/tipo");

const crearTipo = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);
    const tipo = await Tipo.create(req.body);
    res.status(201).json(tipo);
  } catch (error) {
    console.error("Error al crear tipo:", error);
    res.status(400).json({ error: error.message });
  }
};

const editarTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await Tipo.findByPk(id);

    if (!tipo) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }
    await tipo.update(req.body);
    res.json(tipo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eliminarTipo = async (req, res) => {
  try {
    const { id } = req.params;
    const tipo = await Tipo.findByPk(id);

    if (!tipo) {
      return res.status(404).json({ error: "Tipo no encontrado" });
    }
    await tipo.destroy();
    res.json({ message: "Tipo eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obtenerTipo = async (req, res) => {
  try {
    const tipo = await Tipo.findAll();
    res.json(tipo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearTipo,
  editarTipo,
  eliminarTipo,
  obtenerTipo,
};
