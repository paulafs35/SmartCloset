const express = require('express');
const router = express.Router();
const clothesController = require('../controllers/clothesController');

// Ruta para obtener todos los prendas
router.get('/all', clothesController.getAllGarmentsController);

// Ruta para obtener un prenda por su ID
router.get('/:id', clothesController.getGarmentByIdController);

// Ruta para crear un nuevo prenda
router.post('/add', clothesController.addGarmentController);

// Ruta para actualizar un prenda
router.put('/:id', clothesController.editGarmentController);

// Ruta para eliminar un prenda
router.delete('/:id', clothesController.deleteGarmentController);

module.exports = router;