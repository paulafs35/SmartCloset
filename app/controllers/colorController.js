const ColorsModel = require('../models/colorModel');

// Controlador para obtener todos los colores
async function getAllColorsController(req, res) {
    try {
        const colors = await ColorsModel.getAllColorsModel();
        console.log(colors)
        res.json(colors);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un color por id
async function getColorByIdController(req, res) {
    const id = req.params.id;
    try {
        const colors = await ColorsModel.getColorByIdModel(id);
        console.log(colors)
        res.json(colors[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un color
async function addColorController(req, res) {
    try {
        await ColorsModel.addColorModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un color por id
async function editColorController(req, res) {
    const id = req.params.id;
    try {
        await ColorsModel.editColorModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un color por id
async function deleteColorController(req, res) {
    const id = req.params.id;
    try {
        await ColorsModel.deleteColorModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllColorsController,
    getColorByIdController,
    addColorController,
    editColorController,
    deleteColorController
};
