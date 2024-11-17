const UsersModel = require('../models/userModel');

// Controlador para obtener todos los usuarios
async function getAllUsersController(req, res) {
    try {
        const users = await UsersModel.getAllUsersModel();
        console.log(users)
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un usuario por id
async function getUserByIdController(req, res) {
    const id = req.params.id;
    try {
        const users = await UsersModel.getUserByIdModel(id);
        console.log(users)
        res.json(users[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un usuario por username
async function getUserByUsernameController(req, res) {
    const username = req.params.username;
    try {
        const users = await UsersModel.getUserByUsername(username);
        console.log(users)
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un usuario por username
async function getUserByEmailController(req, res) {
    const email = req.params.email;
    try {
        const users = await UsersModel.getUserByEmailModel(email);
        console.log(users)
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un usuario
async function addUserController(req, res) {
    try {
        await UsersModel.addUserModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un usuario por id
async function editUserController(req, res) {
    const id = req.params.id;
    try {
        await UsersModel.editUserModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un usuario por id
async function deleteUserController(req, res) {
    const id = req.params.id;
    try {
        await UsersModel.deleteUserModel(id);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllUsersController,
    getUserByIdController,
    getUserByUsernameController,
    getUserByEmailController,
    addUserController,
    editUserController,
    deleteUserController
};

