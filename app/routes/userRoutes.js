const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Ruta par mostrar la página de usuario

// Ruta para obtener todos los usuarios
router.get('/all', userController.getAllUsersController);

// Ruta para obtener un usuario por su ID
router.get('/:id', userController.getUserByIdController);

//Ruta para obtener un usuario por su username
router.get('/username/:username', userController.getUserByUsernameController);

//Ruta para obtener un usuario por su email
router.get('/email/:email', userController.getUserByEmailController);

// Ruta para crear un nuevo usuario
router.post('/add', userController.addUserController);

// Ruta para actualizar un usuario
router.put('/:id', userController.editUserController);

// Ruta para eliminar un usuario
router.delete('/:id', userController.deleteUserController);

module.exports = router;