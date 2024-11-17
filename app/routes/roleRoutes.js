const express = require('express');
const router = express.Router();
const roleController = require('../controllers/roleController');

// Ruta para obtener todos los roles
router.get('/all', roleController.getAllRolesController);

// Ruta para obtener un rol por su ID
router.get('/:id', roleController.getRoleByIdController);

// Ruta para crear un nuevo rol
router.post('/add', roleController.addRoleController);

// Ruta para actualizar un rol
router.put('/:id', roleController.editRoleController);

// Ruta para eliminar un rol
router.delete('/:id', roleController.deleteRoleController);

module.exports = router;