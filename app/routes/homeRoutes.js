const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Ruta para renderizar la página de inicio
router.get('/', homeController.homeController);


// Ruta para renderizar la página de inicio
router.get('/signUp', homeController.signUpController);

module.exports = router;
