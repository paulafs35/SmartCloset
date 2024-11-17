const ClosetsModel = require('../models/closetModel');

// Controlador para obtener todos los armarios
async function getAllClosetsController(req, res) {
    try {
        const closets = await ClosetsModel.getAllClosetsModel();
        console.log(closets)
        res.json(closets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un armario por id
async function getClosetByIdController(req, res) {
    const id = req.params.id;
    try {
        const closets = await ClosetsModel.getClosetByIdModel(id);
        console.log(closets)
        res.json(closets[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un armario
async function addClosetController(req, res) {
    try {
        await ClosetsModel.addClosetModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un armario por id
async function editClosetController(req, res) {
    const id = req.params.id;
    try {
        await ClosetsModel.editClosetModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un armario por id
async function deleteClosetController(req, res) {
    const id = req.params.id;
    try {
        await ClosetsModel.deleteClosetModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllClosetsController,
    getClosetByIdController,
    addClosetController,
    editClosetController,
    deleteClosetController
};

