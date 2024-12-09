const ClosetsModel = require('../models/closetModel');

// Controlador para obtener todos los armarios
async function getAllClosetsController(req, res) {
    try {
        const closets = await ClosetsModel.getAllClosetsModel();
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
        res.json(closets[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un armario por id
async function getClosetByIdUserController(req, res) {
    const iduser = req.params.iduser;
    try {
        const closets = await ClosetsModel.getClosetByIdUserModel(iduser);
        res.json(closets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un armario por id
async function getClosetByIdStyleController(req, res) {
    const iduser = req.params.iduser;
    const idstyle = req.params.idstyle;
    try {
        const closets = await ClosetsModel.getClosetByIdStyleModel(idstyle, iduser);
        res.json(closets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un armario por id
async function addClosetController(req, res) {
    try {
        var closet = await ClosetsModel.addClosetModel(req.body);
        res.json(closet)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un armario por id
async function editClosetController(req, res) {
    const id = req.params.id;
    try {
        var closet = await ClosetsModel.editClosetModel(req.body, id);
        res.json(closet)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un armario por id
async function deleteClosetController(req, res) {
    const id = req.params.id;
    try {
        var rows = await ClosetsModel.deleteClosetModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllClosetsController,
    getClosetByIdController,
    getClosetByIdUserController,
    getClosetByIdStyleController,
    addClosetController,
    editClosetController,
    deleteClosetController
};

