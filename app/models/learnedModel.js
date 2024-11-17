const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllLearnedModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM learned`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener aprendizajes de la base de datos: ` + error.message);
    }
}

async function getLearnedByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idlearned = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener aprendizajes de la base de datos: ` + error.message);
    }
}

async function addLearnedModel(userData) {
    const {idCourse, idUser} = userData;
    try {
        await connection.query(
            `INSERT INTO learned 
            (idcourse, iduser) 
            VALUES (?, ?)`, 
            [idCourse, idUser]);
    } catch (error) {
        throw new Error(`Error al insertar aprendizajes en la base de datos: ` + error.message);
    }
}

async function editLearnedModel(id, userData) {
    const {idCourse, idUser} = userData;
    try {
        await connection.query(
            `UPDATE learned 
            SET idcourse = ?,
            iduser = ? 
            WHERE idlearned = ?`, 
            [idCourse, idUser, id]);
    } catch (error) {
        throw new Error(`Error al editar aprendizajes de la base de datos: ` + error.message);
    }
}

async function removeLearnedModel(id) {
    try {
        await connection.query(`DELETE FROM learned WHERE idlearned = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar aprendizajes de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllLearnedModel,
    getLearnedByIdModel,
    addLearnedModel,
    editLearnedModel,
    removeLearnedModel
}