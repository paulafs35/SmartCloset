const express = require('express');
const router = express.Router();
const interestController = require('../controllers/interestController');

// Ruta para obtener todos los intereses
router.get('/all', interestController.getAllInterestsController);

// Ruta para obtener los intereses por el ID del usuario
router.get('/:userId', interestController.getInterestByIdUserController);

// Ruta para actualizar un interes
router.post('/:userId', interestController.setInterestController);

// Ruta para eliminar un interes
router.delete('/:id', interestController.deleteInterestController);

module.exports = router;