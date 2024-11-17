const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllCoursesModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM courses`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener cursos de la base de datos: ` + error.message);
    }
}

async function getCourseByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE idcourse = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener cursos de la base de datos: ` + error.message);
    }
}

async function addCourseModel(userData) {
    const {idStyle, idTeacher, description, title, video} = userData;
    try {
        await connection.query(
            `INSERT INTO courses 
            (idstyle, idteacher, description, title, video) 
            VALUES (?, ?, ?, ?, ?)`, 
            [idStyle, idTeacher, description, title, video]);
    } catch (error) {
        throw new Error(`Error al insertar cursos en la base de datos: ` + error.message);
    }
}

async function editCourseModel(id, userData) {
    const {idStyle, idTeacher, description, title, video} = userData;
    try {
        await connection.query(
            `UPDATE courses 
            SET idstyle = ?, 
            idteacher = ?,
            description = ?, 
            title = ?, 
            video = ?
            WHERE idcourse = ?`, 
            [idStyle, idTeacher, description, title, video, id]);
    } catch (error) {
        throw new Error(`Error al editar cursos de la base de datos: ` + error.message);
    }
}

async function removeCourseModel(id) {
    try {
        await connection.query(`DELETE FROM courses WHERE idcourse = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar cursos de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllCoursesModel,
    getCourseByIdModel,
    addCourseModel,
    editCourseModel,
    removeCourseModel
}