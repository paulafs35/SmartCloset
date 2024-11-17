const StylesModel = require('../models/styleModel');

// Controlador para obtener todos los estilos
async function getAllStylesController(req, res) {
    try {
        const styles = await StylesModel.getAllStylesModel();
        console.log(styles)
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
        console.log(styles)
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
        console.log(styles)
        res.json(styles[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para insertar un estilo
async function addStyleController(req, res) {
    try {
        await StylesModel.addStyleModel(req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para editar un estilo por id
async function editStyleController(req, res) {
    const id = req.params.id;
    try {
        await StylesModel.editStyleModel(id, req.body);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controlador para borrar un estilo por id
async function deleteStyleController(req, res) {
    const id = req.params.id;
    try {
        await StylesModel.deleteStyleModel(id);
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

