const CoursesModel = require('../models/courseModel');

// Controlador para obtener todos los cursos
async function getAllCoursesController(req, res) {
    try {
        const courses = await CoursesModel.getAllCoursesModel();
        console.log(courses)
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un curso por id
async function getCourseByIdController(req, res) {
    const id = req.params.id;
    try {
        const courses = await CoursesModel.getCourseByIdModel(id);
        console.log(courses)
        res.json(courses[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un curso
async function addCourseController(req, res) {
    try {
        await CoursesModel.addCourseModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un curso por id
async function editCourseController(req, res) {
    const id = req.params.id;
    try {
        await CoursesModel.editCourseModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un curso por id
async function deleteCourseController(req, res) {
    const id = req.params.id;
    try {
        await CoursesModel.deleteCourseModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllCoursesController,
    getCourseByIdController,
    addCourseController,
    editCourseController,
    deleteCourseController
};

