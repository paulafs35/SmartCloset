const express = require('express');
const router = express.Router();
const colorController = require('../controllers/colorController');

// Ruta para obtener todos los colores
router.get('/all', colorController.getAllColorsController);

// Ruta para obtener un color por su ID
router.get('/:id', colorController.getColorByIdController);

// Ruta para crear un nuevo color
router.post('/add', colorController.addColorController);

// Ruta para actualizar un color
router.put('/:id', colorController.editColorController);

// Ruta para eliminar un color
router.delete('/:id', colorController.deleteColorController);

module.exports = router;