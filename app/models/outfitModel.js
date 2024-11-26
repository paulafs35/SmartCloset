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

async function getOutfitByIdGarmentModel(idgarment) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM outfits 
            WHERE idgarment = ?`, 
            [idgarment]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener conjuntos de la base de datos: ` + error.message);
    }
}

async function getOutfitByIdStyleModel(idstyle) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM outfits 
            WHERE idstyle = ?`, 
            [idstyle]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener conjuntos de la base de datos: ` + error.message);
    }
}

async function addOutfitModel(idgarment, idstyle) {
    try {
        await connection.query(
            `INSERT INTO outfits 
            (idgarment, idstyle) 
            VALUES (?, ?)`, 
            [idgarment, idstyle]);
    } catch (error) {
        throw new Error(`Error al insertar conjuntos en la base de datos: ` + error.message);
    }
}

async function setOutfitModel(idgarment, userData) {
    const {styles} = userData;
    try {
        await connection.query(`DELETE FROM outfits WHERE idgarment = ?`, [idgarment]);

        for (const idstyle of styles) {
            await addOutfitModel(idgarment, idstyle);
        }

        const [rows] = await connection.query(
            `SELECT * FROM outfits 
            WHERE idgarment = ?`, 
            [idgarment]);
        return rows;
    } catch (error) {
        throw new Error(`Error al editar conjuntos de la base de datos: ` + error.message);
    }
}

async function deleteOutfitModel(id) {
    try {
        await connection.query(`DELETE FROM outfits WHERE idoutfit = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar conjuntos de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllOutfitsModel,
    getOutfitByIdModel,
    getOutfitByIdGarmentModel,
    getOutfitByIdStyleModel,
    setOutfitModel,
    deleteOutfitModel
}