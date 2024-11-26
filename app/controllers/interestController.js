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


// Controlador para obtener los intereses de un usuario por id
async function getInterestByIdUserController(req, res) {
    const id = req.params.userId;
    try {
        const interests = await InterestsModel.getInterestByIdUserModel(id);
        res.json(interests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para establecer intereses por id
async function setInterestController(req, res) {
    const id = req.params.userId;
    try {
        const interests = await InterestsModel.setInterestModel(id, req.body);
        res.json(interests);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un interés por id
async function deleteInterestController(req, res) {
    const id = req.params.id;
    try {
        const rows = await InterestsModel.deleteInterestModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllInterestsController,
    getInterestByIdUserController,
    setInterestController,
    deleteInterestController
};

