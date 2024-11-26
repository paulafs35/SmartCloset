const LearnedModel = require('../models/learnedModel');

// Controlador para obtener todos los aprendizajes
async function getAllLearnedController(req, res) {
    try {
        const learneds = await LearnedsModel.getAllLearnedModel();
        res.json(learneds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un aprendizaje por id
async function getLearnedByIdController(req, res) {
    const id = req.params.id;
    try {
        const learneds = await LearnedModel.getLearnedByIdModel(id);
        res.json(learneds[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un aprendizaje por id
async function getLearnedByIdUserController(req, res) {
    const iduser = req.params.iduser;
    try {
        const learneds = await LearnedModel.getLearnedByIdUserModel(iduser);
        res.json(learneds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un aprendizaje por id
async function getLearnedByIdCourseController(req, res) {
    const idcourse = req.params.idcourse;
    try {
        const learneds = await LearnedModel.getLearnedByIdCourseModel(idcourse);
        res.json(learneds);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un aprendizaje
async function addLearnedController(req, res) {
    try {
        var learned = await LearnedModel.addLearnedModel(req.body);
        res.json(learned)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un aprendizaje por id
async function editLearnedController(req, res) {
    const id = req.params.id;
    try {
        var learned = await LearnedModel.editLearnedModel(id, req.body);
        res.json(learned)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un aprendizaje por id
async function deleteLearnedController(req, res) {
    const id = req.params.id;
    try {
        var rows = await LearnedModel.deleteLearnedModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllLearnedController,
    getLearnedByIdController,
    getLearnedByIdCourseController,
    getLearnedByIdUserController,
    addLearnedController,
    editLearnedController,
    deleteLearnedController
};

