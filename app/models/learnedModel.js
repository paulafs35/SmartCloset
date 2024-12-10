const db = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await db.getConnection();
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

async function getLearnedByIdUserIdCourseModel(iduser, idcourse) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE iduser = ? AND idcourse = ?`, 
            [iduser, idcourse]);
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
    const {idcourse, iduser} = userData;
    try {
        await connection.query(
            `INSERT INTO learned 
            (idcourse, iduser) 
            VALUES (?, ?)`, 
            [idcourse, iduser]);

        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idcourse = ? AND iduser = ?`, 
            [idcourse, iduser]);
        return rows;
    } catch (error) {
        throw new Error(`Error al insertar aprendizajes en la base de datos: ` + error.message);
    }
}

async function editLearnedModel(id, userData) {
    const {idcourse, idUser} = userData;
    try {
        await connection.query(
            `UPDATE learned 
            SET idcourse = ?,
            iduser = ? 
            WHERE idlearned = ?`, 
            [idcourse, iduser, id]);

        const [rows] = await connection.query(
            `SELECT * FROM learned 
            WHERE idlearned = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al editar aprendizajes de la base de datos: ` + error.message);
    }
}

async function deleteLearnedModel(iduser, idcourse) {
    try {
        await connection.query(`DELETE FROM learned WHERE iduser = ? AND idcourse = ?`, [iduser, idcourse]);

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
    getLearnedByIdUserIdCourseModel,
    getLearnedByIdUserModel,
    addLearnedModel,
    editLearnedModel,
    deleteLearnedModel
}