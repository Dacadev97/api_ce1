const Genero = require('../models/genero');

const crearGenero = async (req, res) => {
    try {
        console.log('Datos recibidos:', req.body); 
        const genero = await Genero.create(req.body);
        res.status(201).json(genero);
    } catch (error) {
        console.error('Error al crear género:', error); 
        res.status(400).json({ error: error.message });
    }
};

const editarGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const genero = await Genero.findByPk(id);

        if (!genero) {
            return res.status(404).json({ error: 'Género no encontrado' });
        }
        await genero.update(req.body);
        res.json(genero);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const eliminarGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const genero = await Genero.findByPk(id);

        if (!genero) {
            return res.status(404).json({ error: 'Género no encontrado' });
        }
        await genero.destroy();
        res.json({ message: 'Género eliminado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const obtenerGeneros = async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.json(generos);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    crearGenero,
    editarGenero,
    eliminarGenero,
    obtenerGeneros
};