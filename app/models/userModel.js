const db = require(`../config/db`);
const fs = require("fs"); 
let connection;

(async function miConexion() {
    connection = await db.getConnection();
})()

function saveImage(base64Image, path){
    var path = `./public/${path}`
    
    const matches = base64Image.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
    if (matches) {
        var base64Image = matches[2]; // Extract only the Base64 content
    }

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

async function getUserByUsernameModel(username) {
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

async function getUserByEmailModel(email) {
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
        var imgPath = `/resources/images/profilePictures/${username.replaceAll(' ', '_')}.jpg`;
        saveImage(profilePicture, imgPath);

        await connection.query(
            `INSERT INTO users 
            (name, surname, birthdate, username, email, password, profilepicture, idrole) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
            [name, surname, birthDate, username, email, password, imgPath, rolId]);

        const [rows] = await connection.query(
            `SELECT iduser FROM users 
            WHERE email = ?`, 
            [email]);
        return rows;
        
    } catch (error) {
        throw new Error(`Error al insertar usuarios en la base de datos: ` + error.message);
    }
}

async function editUserModel(id, userData) {
    const {name, surname, birthDate, username, email, password, profilePicture, rolId} = userData;
    try {
        var imgPath = `/resources/images/profilePictures/${username.replaceAll(' ', '_')}.jpg`;
        saveImage(profilePicture, imgPath);

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
            [name, surname, birthDate, username, email, password, imgPath, rolId, id]);
            
        const [rows] = await connection.query(
            `SELECT * FROM users 
            WHERE iduser = ?`, 
            [id]);
        return rows;
    } catch (error) {
        console.log(error.message)
        throw new Error(`Error al editar usuarios de la base de datos: ` + error.message);
    }
}

async function deleteUserModel(id) {
    try {
        await connection.query(`DELETE FROM users WHERE iduser = ?`, [id]);
        
        const [rows] = await connection.query(
            `SELECT * FROM users 
            WHERE iduser = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar usuarios de la base de datos: ` + error.message);
    }
}

async function authUserModel(username, password){
    try {
        const [rows] = await connection.query(
            `SELECT *  FROM users 
            WHERE username = ? AND password = ?`, 
            [username, password]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener usuarios de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllUsersModel,
    getUserByUsernameModel,
    getUserByEmailModel,
    getUserByIdModel,
    addUserModel,
    editUserModel,
    deleteUserModel,
    authUserModel
}
