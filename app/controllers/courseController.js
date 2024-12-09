const CoursesModel = require('../models/courseModel');

// Controlador para obtener todos los cursos
async function getAllCoursesController(req, res) {
    try {
        const courses = await CoursesModel.getAllCoursesModel();
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
        res.json(courses[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un curso por id
async function getCourseByIdTeacherController(req, res) {
    const idteacher = req.params.idteacher;
    try {
        const courses = await CoursesModel.getCourseByIdTeacherModel(idteacher);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un curso por id
async function getCourseByIdStyleController(req, res) {
    const idstyle = req.params.idstyle;
    try {
        const courses = await CoursesModel.getCourseByIdStyleModel(idstyle);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un curso por id
async function getCourseByNameController(req, res) {
    const name = req.params.name;
    try {
        const courses = await CoursesModel.getCourseByNameModel(name);
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un curso
async function addCourseController(req, res) {
    try {
        var courses = await CoursesModel.addCourseModel(req.body);
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un curso por id
async function editCourseController(req, res) {
    const id = req.params.id;
    try {
        var courses = await CoursesModel.editCourseModel(id, req.body);
        res.json(courses)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un curso por id
async function deleteCourseController(req, res) {
    const id = req.params.id;
    try {
        var rows = await CoursesModel.deleteCourseModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllCoursesController,
    getCourseByIdController,
    getCourseByIdTeacherController,
    getCourseByIdStyleController,
    getCourseByNameController,
    addCourseController,
    editCourseController,
    deleteCourseController
};

