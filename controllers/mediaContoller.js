const Media = require("../models/media");

const crearMedia = async (req, res) => {
  try {
    const media = await Media.create(req.body);
    res.status(201).json(media);
  } catch (error) {
    console.error("Error al crear media:", error);
    res.status(400).json({ error: error.message });
  }
};

const obtenerMedias = async (req, res) => {
  try {
    const medias = await Media.findAll();
    res.status(200).json(medias);
  } catch (error) {
    console.error("Error al obtener medias:", error);
    res.status(400).json({ error: error.message });
  }
};

const obtenerMediaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const media = await Media.findByPk(id);

    if (!media) {
      return res.status(404).json({ error: "Media no encontrada" });
    }

    res.status(200).json(media);
  } catch (error) {
    console.error("Error al obtener media:", error);
    res.status(400).json({ error: error.message });
  }
};

const actualizarMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Media.update(req.body, { where: { id } });

    if (!updated) {
      return res.status(404).json({ error: "Media no encontrada" });
    }

    const updatedMedia = await Media.findByPk(id);
    res.status(200).json(updatedMedia);
  } catch (error) {
    console.error("Error al actualizar media:", error);
    res.status(400).json({ error: error.message });
  }
};

const eliminarMedia = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Media.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Media no encontrada" });
    }

    res.status(204).json();
  } catch (error) {
    console.error("Error al eliminar media:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  crearMedia,
  obtenerMedias,
  obtenerMediaPorId,
  actualizarMedia,
  eliminarMedia,
};
