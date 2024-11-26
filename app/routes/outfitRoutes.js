const express = require('express');
const router = express.Router();
const outfitController = require('../controllers/outfitController');

// Ruta para obtener todos los conjuntos
router.get('/all', outfitController.getAllOutfitsController);

// Ruta para obtener un conjunto por su ID
router.get('/:id', outfitController.getOutfitByIdController);
router.get('/garment/:idgarment', outfitController.getOutfitByIdGarmentController);
router.get('/style/:idstyle', outfitController.getOutfitByIdStyleController);

// Ruta para crear un nuevo conjunto
router.post('/:idgarment', outfitController.setOutfitController);

// Ruta para eliminar un conjunto
router.delete('/:id', outfitController.deleteOutfitController);

module.exports = router;