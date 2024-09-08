const { Genero } = require('../models');

const obtenerGeneros = async (req, res) => {
    try {
        const generos = await Genero.findAll();
        res.json(generos);
    } catch (error) {
        res.status(400).json(error);
    }
};

const crearGenero = async (req, res) => {
    try {
        const genero = await Genero.create(req.body);
        res.status(201).json(genero);
    } catch (error) {
        res.status(400).json(error);
    }
};

const editarGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const genero = await Genero.findByPk(id);

        if (!genero) {
            return res.status(404).json({ message: 'Genero no encontrado' });
        }

        await genero.update(req.body);

        res.json(genero);
    } catch (error) {
        res.status(400).json(error);
    }
};

const eliminarGenero = async (req, res) => {
    try {
        const { id } = req.params;
        const genero = await Genero.findByPk(id);

        if (!genero) {
            return res.status(404).json({ message: 'Genero no encontrado' });
        }

        await genero.destroy();

        res.json({ message: 'Genero eliminado' });
    } catch (error) {
        res.status(400).json(error);
    }
};

module.exports = { obtenerGeneros, crearGenero, editarGenero, eliminarGenero };

