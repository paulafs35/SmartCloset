const express = require('express');
const router = express.Router();
const interestController = require('../controllers/interestController');

// Ruta para obtener todos los intereses
router.get('/all', interestController.getAllInterestsController);

// Ruta para obtener un interes por su ID
router.get('/:id', interestController.getInterestByIdController);

// Ruta para crear un nuevo interes
router.post('/add', interestController.addInterestController);

// Ruta para actualizar un interes
router.put('/:id', interestController.editInterestController);

// Ruta para eliminar un interes
router.delete('/:id', interestController.deleteInterestController);

module.exports = router;