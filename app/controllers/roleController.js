const RolesModel = require('../models/roleModel');

// Controlador para obtener todos los roles
async function getAllRolesController(req, res) {
    try {
        const roles = await RolesModel.getAllRolesModel();
        res.json(roles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un rol por id
async function getRoleByIdController(req, res) {
    const id = req.params.id;
    try {
        const roles = await RolesModel.getRoleByIdModel(id);
        res.json(roles[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un rol
async function addRoleController(req, res) {
    try {
        var roles = await RolesModel.addRoleModel(req.body);
        res.json(roles)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un rol por id
async function editRoleController(req, res) {
    const id = req.params.id;
    try {
        var roles = await RolesModel.editRoleModel(id, req.body);
        res.json(roles)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un rol por id
async function deleteRoleController(req, res) {
    const id = req.params.id;
    try {
        var rows = await RolesModel.deleteRoleModel(id);
        res.json(rows.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllRolesController,
    getRoleByIdController,
    addRoleController,
    editRoleController,
    deleteRoleController
};

