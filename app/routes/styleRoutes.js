const express = require('express');
const router = express.Router();
const styleController = require('../controllers/styleController');

// Ruta par mostrar la página de estilos

// Ruta para obtener todos los estilos
router.get('/all', styleController.getAllStylesController);

// Ruta para obtener un estilo por su ID
router.get('/:id', styleController.getStyleByIdController);

// Ruta para obtener un estilo por su nombre
router.get('/name/:name', styleController.getStyleByNameController);

// Ruta para crear un nuevo estilo
router.post('/add', styleController.addStyleController);

// Ruta para actualizar un estilo
router.put('/:id', styleController.editStyleController);

// Ruta para eliminar un estilo
router.delete('/:id', styleController.deleteStyleController);

module.exports = router;