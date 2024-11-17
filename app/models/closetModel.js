const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllClosetsModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM closets`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function getClosetByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM closets 
            WHERE idcloset = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function addClosetModel(userData) {
    const {idGarment, idColor, idUser} = userData;
    try {
        await connection.query(
            `INSERT INTO closets 
            (idgarment, idcolor, iduser) 
            VALUES (?, ?, ?)`, 
            [idGarment, idColor, idUser]);
    } catch (error) {
        throw new Error(`Error al insertar armarios en la base de datos: ` + error.message);
    }
}

async function editClosetModel(id, userData) {
    const {idGarment, idColor, idUser} = userData;
    try {
        await connection.query(
            `UPDATE closets 
            SET idgarment = ?,
            idcolor = ?,
            iduser = ? 
            WHERE idcloset = ?`, 
            [idGarment, idColor, idUser, id]);
    } catch (error) {
        throw new Error(`Error al editar armarios de la base de datos: ` + error.message);
    }
}

async function removeClosetModel(id) {
    try {
        await connection.query(`DELETE FROM closet WHERE idcloset = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar armarios de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllClosetsModel,
    getClosetByIdModel,
    addClosetModel,
    editClosetModel,
    removeClosetModel
}