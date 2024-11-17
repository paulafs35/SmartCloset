const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Ruta para obtener todos los cursos
router.get('/all', courseController.getAllCoursesController);

// Ruta para obtener un curso por su ID
router.get('/:id', courseController.getCourseByIdController);

// Ruta para crear un nuevo curso
router.post('/add', courseController.addCourseController);

// Ruta para actualizar un curso
router.put('/:id', courseController.editCourseController);

// Ruta para eliminar un curso
router.delete('/:id', courseController.deleteCourseController);

module.exports = router;