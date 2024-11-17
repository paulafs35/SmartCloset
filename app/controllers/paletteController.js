const PalettesModel = require('../models/paletteModel');

// Controlador para obtener todos los paletas
async function getAllPalettesController(req, res) {
    try {
        const palettes = await PalettesModel.getAllPalettesModel();
        console.log(palettes)
        res.json(palettes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un paleta por id
async function getPaletteController(req, res) {
    const id = req.params.id;
    try {
        const palettes = await PalettesModel.getPaletteByIdModel(id);
        console.log(palettes)
        res.json(palettes[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un paleta
async function addPaletteController(req, res) {
    try {
        await PalettesModel.addPaletteModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un paleta por id
async function editPaletteController(req, res) {
    const id = req.params.id;
    try {
        await PalettesModel.editPaletteModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un paleta por id
async function deletePaletteController(req, res) {
    const id = req.params.id;
    try {
        await PalettesModel.deletePaletteModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllPalettesController,
    getPaletteController,
    addPaletteController,
    editPaletteController,
    deletePaletteController
};

