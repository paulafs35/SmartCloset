const OutfitsModel = require('../models/outfitModel');

// Controlador para obtener todos los conjuntos
async function getAllOutfitsController(req, res) {
    try {
        const outfits = await OutfitsModel.getAllOutfitsModel();
        console.log(outfits)
        res.json(outfits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un conjunto por id
async function getOutfitByIdController(req, res) {
    const id = req.params.id;
    try {
        const outfits = await OutfitsModel.getOutfitModel(id);
        console.log(outfits)
        res.json(outfits[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un conjunto
async function addOutfitController(req, res) {
    try {
        await OutfitsModel.addOutfitModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un conjunto por id
async function editOutfitController(req, res) {
    const id = req.params.id;
    try {
        await OutfitsModel.editOutfitModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un conjunto por id
async function deleteOutfitController(req, res) {
    const id = req.params.id;
    try {
        await OutfitsModel.deleteOutfitModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllOutfitsController,
    getOutfitByIdController,
    addOutfitController,
    editOutfitController,
    deleteOutfitController
};

