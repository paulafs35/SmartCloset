const StylesModel = require('../models/styleModel');

// Controlador para obtener todos los estilos
async function getAllStylesController(req, res) {
    try {
        const styles = await StylesModel.getAllStylesModel();
        res.json(styles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


// Controlador para obtener un estilo por id
async function getStyleByIdController(req, res) {
    const id = req.params.id;
    try {
        const styles = await StylesModel.getStyleByIdModel(id);
        res.json(styles[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para obtener un estilo por id
async function getStyleByNameController(req, res) {
    const name = req.params.name;
    try {
        const styles = await StylesModel.getStyleByNameModel(name);
        res.json(styles[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un estilo
async function addStyleController(req, res) {
    try {
        var style = await StylesModel.addStyleModel(req.body);
        res.json(style)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un estilo por id
async function editStyleController(req, res) {
    const id = req.params.id;
    try {
        var style = await StylesModel.editStyleModel(id, req.body);
        res.json(style)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un estilo por id
async function deleteStyleController(req, res) {
    const id = req.params.id;
    try {
        var results = await StylesModel.deleteStyleModel(id);
        res.json(results.length)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


module.exports = {
    getAllStylesController,
    getStyleByIdController,
    getStyleByNameController,
    addStyleController,
    editStyleController,
    deleteStyleController
};

