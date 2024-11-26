const express = require('express');
const router = express.Router();
const learnedController = require('../controllers/learnedController');

// Ruta para obtener todos los conjuntos
router.get('/all', learnedController.getAllLearnedController);

// Ruta para obtener un conjunto por su ID
router.get('/:id', learnedController.getLearnedByIdController);
router.get('/user/:iduser', learnedController.getLearnedByIdUserController);
router.get('/course/:idcourse', learnedController.getLearnedByIdCourseController);

// Ruta para crear un nuevo conjunto
router.post('/add', learnedController.addLearnedController);

// Ruta para actualizar un conjunto
router.put('/:id', learnedController.editLearnedController);

// Ruta para eliminar un conjunto
router.delete('/:id', learnedController.deleteLearnedController);

module.exports = router;