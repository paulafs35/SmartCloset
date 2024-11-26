const express = require('express');
const router = express.Router();
const paletteController = require('../controllers/paletteController');

// Ruta para obtener todos los paletas
router.get('/all', paletteController.getAllPalettesController);

// Ruta para obtener un paleta por su ID
router.get('/:id', paletteController.getPaletteByIdController);
router.get('/color/:idcolor', paletteController.getPaletteByIdColorController);
router.get('/style/:idstyle', paletteController.getPaletteByIdStyleController);

// Ruta para actualizar un paleta
router.post('/:idcolor', paletteController.setPaletteController);

// Ruta para eliminar un paleta
router.delete('/:id', paletteController.deletePaletteController);

module.exports = router;