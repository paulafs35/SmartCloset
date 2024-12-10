const db = require(`../config/db`);
const fs = require("fs"); 
let connection;

(async function miConexion() {
    connection = await db.getConnection();
})()

function saveVideo(base64Video, path){
    path = `./public/${path}`
    
    const matches = base64Video.match(/^data:video\/([a-zA-Z]+);base64,(.+)$/);
    if (matches) {
        base64Video = matches[2]; // Extract only the Base64 content
    }
    // base64Video = base64Video.replace("data:video/mp4;base64,","");
    // Write the file using fs.writeFile

    fs.writeFile(path, base64Video, { encoding: 'base64' }, (err) => {
        if (err) {
            console.log('Error saving the video:', err.message);
        } else {
            console.log('Video saved successfully at', path);
        }
    });

}

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

async function getCourseByIdStyleModel(idstyle) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE idstyle = ?`, 
            [idstyle]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener cursos de la base de datos: ` + error.message);
    }
}

async function getCourseByIdTeacherModel(idteacher) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE idteacher = ?`, 
            [idteacher]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener cursos de la base de datos: ` + error.message);
    }
}

async function getCourseByNameModel(name) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE name = ?`, 
            [name]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener cursos de la base de datos: ` + error.message);
    }
}

async function addCourseModel(userData) {
    const {idstyle, idteacher, description, name, video} = userData;
    try {
        var fileName = name.toLowerCase().replaceAll(' ', '_').replaceAll(':', '_')
        var videoPath = `/resources/courses/${fileName}.mp4`
        saveVideo(video, videoPath)

        await connection.query(
            `INSERT INTO courses 
            (idstyle, idteacher, description, name, videocourse) 
            VALUES (?, ?, ?, ?, ?)`, 
            [idstyle, idteacher, description, name, videoPath]);

        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE name = ?`, 
            [name]);
        
        return rows
    } catch (error) {
        throw new Error(`Error al insertar cursos en la base de datos: ` + error.message);
    }
}

async function editCourseModel(id, userData) {
    const {idstyle, idteacher, description, name, video} = userData;
    try {
        var fileName = name.toLowerCase().replaceAll(' ', '_').replaceAll(':', '_')
        var videoPath = `/resources/courses/${fileName}.mp4`
        saveVideo(video, videoPath)

        await connection.query(
            `UPDATE courses 
            SET idstyle = ?, 
            idteacher = ?,
            description = ?, 
            name = ?, 
            videocourse = ?
            WHERE idcourse = ?`, 
            [idstyle, idteacher, description, name, videoPath, id]);

        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE idcourse = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al editar cursos de la base de datos: ` + error.message);
    }
}

async function deleteCourseModel(id) {
    try {
        await connection.query(`DELETE FROM courses WHERE idcourse = ?`, [id]);

        const [rows] = await connection.query(
            `SELECT * FROM courses 
            WHERE idcourse = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar cursos de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllCoursesModel,
    getCourseByIdModel,
    getCourseByIdTeacherModel,
    getCourseByIdStyleModel,
    getCourseByNameModel,
    addCourseModel,
    editCourseModel,
    deleteCourseModel
}