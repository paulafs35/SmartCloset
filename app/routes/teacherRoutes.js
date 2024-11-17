const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacherController');

router.get('/new', teacherController.showCourseFormController);
router.get('/update/:id', teacherController.showCourseFormController);

module.exports = router;