const OutfitsModel = require('../models/outfitModel');

// Controlador para obtener todos los conjuntos
async function getAllOutfitsController(req, res) {
    try {
        const outfits = await OutfitsModel.getAllOutfitsModel();
        res.json(outfits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un conjunto por id
async function getOutfitByIdController(req, res) {
    const id = req.params.id;
    try {
        const outfits = await OutfitsModel.getOutfitByIdModel(id);
        res.json(outfits[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un conjunto por id
async function getOutfitByIdStyleController(req, res) {
    const idstyle = req.params.idstyle;
    try {
        const outfits = await OutfitsModel.getOutfitByIdStyleModel(idstyle);
        res.json(outfits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un conjunto por id
async function getOutfitByIdGarmentController(req, res) {
    const idgarment = req.params.idgarment;
    try {
        const outfits = await OutfitsModel.getOutfitByIdGarmentModel(idgarment);
        res.json(outfits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para editar un conjunto por id
async function setOutfitController(req, res) {
    const idgarment = req.params.idgarment;
    try {
        var outfits = await OutfitsModel.editOutfitModel(idgarment, req.body);
        res.json(outfits)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un conjunto por id
async function deleteOutfitController(req, res) {
    const id = req.params.id;
    try {
        var rows = await OutfitsModel.deleteOutfitModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllOutfitsController,
    getOutfitByIdController,
    getOutfitByIdStyleController,
    getOutfitByIdGarmentController,
    setOutfitController,
    deleteOutfitController
};

