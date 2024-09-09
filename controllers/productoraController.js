const Productora = require("../models/productora");

const crearProductora = async (req, res) => {
  try {
    console.log("Datos recibidos:", req.body);
    const productora = await Productora.create(req.body);
    res.status(201).json(productora);
  } catch (error) {
    console.error("Error al crear productora:", error);
    res.status(400).json({ error: error.message });
  }
};

const editarProductora = async (req, res) => {
  try {
    const { id } = req.params;
    const productora = await Productora.findByPk(id);

    if (!productora) {
      return res.status(404).json({ error: "Productora no encontrado" });
    }
    await productora.update(req.body);
    res.json(productora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const eliminarProductora = async (req, res) => {
  try {
    const { id } = req.params;
    const productora = await Productora.findByPk(id);

    if (!productora) {
      return res.status(404).json({ error: "Productora no encontrado" });
    }
    await productora.destroy();
    res.json({ message: "Productora eliminado" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obtenerProductora = async (req, res) => {
  try {
    const productora = await Productora.findAll();
    res.json(productora);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearProductora,
  editarProductora,
  eliminarProductora,
  obtenerProductora,
};
