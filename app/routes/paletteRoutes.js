const express = require('express');
const router = express.Router();
const paletteController = require('../controllers/paletaController');

// Ruta par mostrar la página de usuario

// Ruta para obtener todos los paletas
router.get('/all', paletteController.getAllPalettesController);

// Ruta para obtener un paleta por su ID
router.get('/:id', paletteController.getPaletteByIdController);

// Ruta para crear un nuevo paleta
router.post('/add', paletteController.addPaletteController);

// Ruta para actualizar un paleta
router.put('/:id', paletteController.editPaletteController);

// Ruta para eliminar un paleta
router.delete('/:id', paletteController.deletePaletteController);

module.exports = router;