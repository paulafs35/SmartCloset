const getConnection = require(`../config/db`);
let connection;
const fs = require("fs");

(async function miConexion() {
    connection = await getConnection();
})()

function saveImage(base64Image, path){
    path = `./public/${path}`

    // Write the file using fs.writeFile
    fs.writeFile(path, base64Image, { encoding: 'base64' }, (err) => {
        if (err) {
            console.error('Error saving the image:', err);
        } else {
            console.log('Image saved successfully at', path);
        }
    });

}

// Función para obtener todas las provincias
async function getAllUsersModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM users`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener usuarios de la base de datos: ` + error.message);
    }
}

async function getUserByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM users 
            WHERE iduser = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener usuarios de la base de datos: ` + error.message);
    }
}

async function getUserByUsername(username) {
    try {
        const [rows] = await connection.query(
            `SELECT name, surname, username, profilepicture, idrole  FROM users 
            WHERE username = ?`, 
            [username]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener usuarios de la base de datos: ` + error.message);
    }
}

async function getUserByEmail(email) {
    try {
        const [rows] = await connection.query(
            `SELECT name, surname, username, profilepicture, idrole  FROM users 
            WHERE email = ?`, 
            [email]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener usuarios de la base de datos: ` + error.message);
    }
}

async function addUserModel(userData) {
    const {name, surname, birthDate, username, email, password, profilePicture, rolId} = userData;
    try {
        imgPath = `./resources/images/profilePictures/${username}.jpg`

        saveImage(profilePicture, imgPath)
        await connection.query(
            `INSERT INTO users 
            (name, surname, birthdate, username, email, password, profilepicture, idrole) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
            [name, surname, birthDate, username, email, password, imgPath, rolId]);
    } catch (error) {
        throw new Error(`Error al insertar usuarios en la base de datos: ` + error.message);
    }
}

async function editUserModel(userData, id) {
    const {name, surname, birthDate, username, email, password, imgPath, rolId} = userData;
    try {
        imgPath = `./resources/images/profilePictures/${username}.jpg`

        saveImage(profilePicture, imgPath)

        await connection.query(
            `UPDATE users 
            SET name = ?, 
            surname = ?, 
            birthdate = ?, 
            username = ?, 
            email = ?, 
            password = ?, 
            profilepicture = ?, 
            idrole = ? 
            WHERE iduser = ?`, 
            [dni, name, surname, birthDate, username, email, password, imgPath, rolId, id]);
    } catch (error) {
        throw new Error(`Error al editar usuarios de la base de datos: ` + error.message);
    }
}

async function removeUserModel(id) {
    try {
        await connection.query(`DELETE FROM users WHERE iduser = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar usuarios de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllUsersModel,
    getUserByUsername,
    getUserByEmail,
    getUserByIdModel,
    addUserModel,
    editUserModel,
    removeUserModel
}
