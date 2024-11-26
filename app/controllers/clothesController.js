const ClothesModel = require('../models/clothesModel');

// Controlador para obtener todas las prendas
async function getAllGarmentsController(req, res) {
    try {
        const clothes = await ClothesModel.getAllGarmentsModel();
        res.json(clothes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener una prenda por id
async function getGarmentByIdController(req, res) {
    const id = req.params.id;
    try {
        const clothes = await ClothesModel.getGarmentByIdModel(id);
        res.json(clothes[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar una prenda
async function addGarmentController(req, res) {
    try {
        var garment = await ClothesModel.addGarmentModel(req.body);
        res.json(garment)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar una prenda por id
async function editGarmentController(req, res) {
    const id = req.params.id;
    try {
        var garment = await ClothesModel.editGarmentModel(id, req.body);
        res.json(garment)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar una prenda por id
async function deleteGarmentController(req, res) {
    const id = req.params.id;
    try {
        var rows = await ClothesModel.deleteGarmentModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllGarmentsController,
    getGarmentByIdController,
    addGarmentController,
    editGarmentController,
    deleteGarmentController
};

