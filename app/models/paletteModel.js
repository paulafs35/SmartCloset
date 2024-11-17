const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllPalettesModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM palettes`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener paletas de la base de datos: ` + error.message);
    }
}

async function getPaletteByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM palettes 
            WHERE idpalette = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener paletas de la base de datos: ` + error.message);
    }
}

async function addPaletteModel(userData) {
    const {idColor, idStyle} = userData;
    try {
        await connection.query(
            `INSERT INTO palettes 
            (idcolor, idstyle) 
            VALUES (?, ?)`, 
            [idColor, idStyle]);
    } catch (error) {
        throw new Error(`Error al insertar paletas en la base de datos: ` + error.message);
    }
}

async function editPaletteModel(id, userData) {
    const {idColor, idStyle} = userData;
    try {
        await connection.query(
            `UPDATE palettes 
            SET idcolor = ?,
            idstyle = ? 
            WHERE idpalette = ?`, 
            [idColor, idStyle, id]);
    } catch (error) {
        throw new Error(`Error al editar paletas de la base de datos: ` + error.message);
    }
}

async function removePaletteModel(id) {
    try {
        await connection.query(`DELETE FROM palettes WHERE idpalette = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar paletas de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllPalettesModel,
    getPaletteByIdModel,
    addPaletteModel,
    editPaletteModel,
    removePaletteModel
}