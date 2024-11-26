const express = require('express');
const router = express.Router();
const closetController = require('../controllers/closetController');

// Ruta para obtener todos los armarios
router.get('/all', closetController.getAllClosetsController);

// Ruta para obtener un armario por su ID
router.get('/:id', closetController.getClosetByIdController);
router.get('/user/:iduser', closetController.getClosetByIdUserController);
router.get('/user/:iduser/:idstyle', closetController.getClosetByIdStyleController);

// Ruta para actualizar un armario
router.put('/:userid', closetController.setClosetByUserController);

// Ruta para eliminar un armario
router.delete('/:id', closetController.deleteClosetController);

module.exports = router;