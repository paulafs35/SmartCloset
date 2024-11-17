const express = require('express');
const router = express.Router();
const closetController = require('../controllers/closetController');

// Ruta para obtener todos los armarios
router.get('/all', closetController.getAllClosetsController);

// Ruta para obtener un armario por su ID
router.get('/:id', closetController.getClosetByIdController);

// Ruta para crear un nuevo armario
router.post('/add', closetController.addClosetController);

// Ruta para actualizar un armario
router.put('/:id', closetController.editClosetController);

// Ruta para eliminar un armario
router.delete('/:id', closetController.deleteClosetController);

module.exports = router;