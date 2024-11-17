const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Ruta para renderizar la página de inicio
router.get('/', (req, res) => {res.redirect('/admin/users');});

router.get('/users', adminController.showTablesController);
router.get('/users/new', adminController.showUserFormController);
router.get('/users/update/:id', adminController.showUserFormController);


// Ruta para renderizar la página de inicio
router.get('/styles', adminController.showTablesController);

// Ruta para renderizar la página de inicio
router.get('/courses', adminController.showTablesController);

// Ruta para renderizar la página de inicio
router.get('/colors', adminController.showTablesController);

// Ruta para renderizar la página de inicio
router.get('/clothes', adminController.showTablesController);

module.exports = router;