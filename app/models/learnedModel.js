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

async function getLearnedByIdUserModel(iduser) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE iduser = ?`, 
            [iduser]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener aprendizajes de la base de datos: ` + error.message);
    }
}

async function getLearnedByIdCourseModel(idcourse) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idcourse = ?`, 
            [idcourse]);
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

        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idcourse = ? AND iduser = ?`, 
            [idCourse, idUser]);
        return rows;
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

        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idlearned = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al editar aprendizajes de la base de datos: ` + error.message);
    }
}

async function deleteLearnedModel(id) {
    try {
        await connection.query(`DELETE FROM learned WHERE idlearned = ?`, [id]);

        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idlearned = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar aprendizajes de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllLearnedModel,
    getLearnedByIdModel,
    getLearnedByIdCourseModel,
    getLearnedByIdUserModel,
    addLearnedModel,
    editLearnedModel,
    deleteLearnedModel
}