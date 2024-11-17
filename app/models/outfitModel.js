const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllOutfitsModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM outfits`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener conjuntos de la base de datos: ` + error.message);
    }
}

async function getOutfitByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM outfits 
            WHERE idoutfit = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener conjuntos de la base de datos: ` + error.message);
    }
}

async function addOutfitModel(userData) {
    const {idGarment, idStyle} = userData;
    try {
        await connection.query(
            `INSERT INTO outfits 
            (idgarment, idstyle) 
            VALUES (?, ?)`, 
            [idGarment, idStyle]);
    } catch (error) {
        throw new Error(`Error al insertar conjuntos en la base de datos: ` + error.message);
    }
}

async function editOutfitModel(id, userData) {
    const {idGarment, idStyle} = userData;
    try {
        await connection.query(
            `UPDATE outfits 
            SET idgarment = ?,
            idstyle = ? 
            WHERE idoutfit = ?`, 
            [idGarment, idStyle, id]);
    } catch (error) {
        throw new Error(`Error al editar conjuntos de la base de datos: ` + error.message);
    }
}

async function removeOutfitModel(id) {
    try {
        await connection.query(`DELETE FROM outfits WHERE idoutfit = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar conjuntos de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllOutfitsModel,
    getOutfitByIdModel,
    addOutfitModel,
    editOutfitModel,
    removeOutfitModel
}