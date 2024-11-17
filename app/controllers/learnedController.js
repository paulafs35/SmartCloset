const LearnedModel = require('../models/learnedModel');

// Controlador para obtener todos los aprendizajes
async function getAllLearnedController(req, res) {
    try {
        const learneds = await LearnedsModel.getAllLearnedModel();
        console.log(learneds)
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
        console.log(learneds)
        res.json(learneds[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un aprendizaje
async function addLearnedController(req, res) {
    try {
        await LearnedModel.addLearnedModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un aprendizaje por id
async function editLearnedController(req, res) {
    const id = req.params.id;
    try {
        await LearnedModel.editLearnedModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un aprendizaje por id
async function deleteLearnedController(req, res) {
    const id = req.params.id;
    try {
        await LearnedModel.deleteLearnedModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllLearnedController,
    getLearnedByIdController,
    addLearnedController,
    editLearnedController,
    deleteLearnedController
};

