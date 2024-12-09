const PalettesModel = require('../models/paletteModel');

// Controlador para obtener todos los paletas
async function getAllPalettesController(req, res) {
    try {
        const palettes = await PalettesModel.getAllPalettesModel();
        res.json(palettes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un paleta por id
async function getPaletteByIdController(req, res) {
    const id = req.params.id;
    try {
        const palettes = await PalettesModel.getPaletteByIdModel(id);
        res.json(palettes[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un paleta por id
async function getPaletteByIdStyleController(req, res) {
    const idstyle = req.params.idstyle;
    try {
        const palettes = await PalettesModel.getPaletteByIdStyleModel(idstyle);
        res.json(palettes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un paleta por id
async function getPaletteByIdColorController(req, res) {
    const idcolor = req.params.idcolor;
    try {
        const palettes = await PalettesModel.getPaletteByIdColorModel(idcolor);
        res.json(palettes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un paleta por id
async function setPaletteController(req, res) {
    const idcolor = req.params.idcolor;
    try {
        var palettes = await PalettesModel.setPaletteModel(idcolor, req.body);
        res.json(palettes)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un paleta por id
async function deletePaletteController(req, res) {
    const id = req.params.id;
    try {
        var rows = await PalettesModel.deletePaletteModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllPalettesController,
    getPaletteByIdController,
    getPaletteByIdStyleController,
    getPaletteByIdColorController,
    setPaletteController,
    deletePaletteController
};

