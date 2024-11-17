const express = require('express');
const router = express.Router();
const outfitController = require('../controllers/outfitController');

// Ruta para obtener todos los conjuntos
router.get('/all', outfitController.getAllOutfitsController);

// Ruta para obtener un conjunto por su ID
router.get('/:id', outfitController.getOutfitByIdController);

// Ruta para crear un nuevo conjunto
router.post('/add', outfitController.addOutfitController);

// Ruta para actualizar un conjunto
router.put('/:id', outfitController.editOutfitController);

// Ruta para eliminar un conjunto
router.delete('/:id', outfitController.deleteOutfitController);

module.exports = router;