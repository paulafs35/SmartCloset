const InterestsModel = require('../models/interestModel');

// Controlador para obtener todos los intereses
async function getAllInterestsController(req, res) {
    try {
        const interests = await InterestsModel.getAllInterestsModel();
        console.log(interests)
        res.json(interests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un interés por id
async function getInterestByIdController(req, res) {
    const id = req.params.id;
    try {
        const interests = await InterestsModel.getInterestByIdModel(id);
        console.log(interests)
        res.json(interests[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un interés
async function addInterestController(req, res) {
    try {
        await InterestsModel.addInterestByIdModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un interés por id
async function editInterestController(req, res) {
    const id = req.params.id;
    try {
        await InterestsModel.editInterestModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un interés por id
async function deleteInterestController(req, res) {
    const id = req.params.id;
    try {
        await InterestsModel.deleteInterestModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllInterestsController,
    getInterestByIdController,
    addInterestController,
    editInterestController,
    deleteInterestController
};

