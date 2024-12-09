const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Ruta para renderizar la página de inicio
router.get('/courses/:iduser', clientController.showCoursesController);
router.get('/:iduser/courses/:idcourse', clientController.showInvidualCoursesController);

// Ruta para renderizar la página de inicio
router.get('/recomendations/:iduser', clientController.showSuggestionsController);

// Ruta para renderizar la página de inicio
router.get('/closet/:iduser', clientController.showClosetController);

// Ruta para renderizar la página de inicio
router.get('/coursesTeacher/:iduser', clientController.showCoursesTeacherController);

router.get('/update/:iduser', clientController.showUserFormController);

module.exports = router;