const fs = require("fs");
const db = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await db.getConnection();
})()

function saveImage(base64Image, path){
    path = `./public/${path}`
    
    const matches = base64Image.match(/^data:image\/([a-zA-Z]+);base64,(.+)$/);
    if (matches) {
        base64Image = matches[2]; // Extract only the Base64 content
    }

    // Write the file using fs.writeFile
    fs.writeFile(path, base64Image, { encoding: 'base64' }, (err) => {
        if (err) {
            console.log('Error saving the image:', err.message);
        } else {
            console.log('Image saved successfully at', path);
        }
    });

}

// Función para obtener todas las provincias
async function getAllStylesModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM styles`);
        return rows;
    } catch (error) {
        throw new Error(`Error al estéticas usuarios de la base de datos: ` + error.message);
    }
}

async function getStyleByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM styles 
            WHERE idstyle = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener estéticas de la base de datos: ` + error.message);
    }
}

async function getStyleByNameModel(name) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM styles 
            WHERE name = ?`, 
            [name]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener estéticas de la base de datos: ` + error.message);
    }
}

async function addStyleModel(userData) {
    const {description, inspoImg, name} = userData;
    try {
        var fileName = name.toLowerCase().replaceAll(' ', '_')
        var imgPath = `/resources/images/inspo/${fileName}.jpg`

        saveImage(inspoImg, imgPath)

        await connection.query(
            `INSERT INTO styles 
            (description, inspoImg, name) 
            VALUES (?, ?, ?)`, 
            [description, imgPath, name]);       

        const [rows] = await connection.query(
            `SELECT * FROM styles 
            WHERE name = ?`, 
            [name]);
        return rows;
    } catch (error) {
        throw new Error(`Error al insertar estéticas en la base de datos: ` + error.message);
    }
}

async function editStyleModel(userData, id) {
    const {description, inspoImg, name} = userData;
    try {
        var fileName = name.toLowerCase().replaceAll(' ', '_')
        var imgPath = `/resources/images/inspo/${fileName}.jpg`

        saveImage(inspoImg, imgPath)

        await connection.query(
            `UPDATE styles 
            SET description = ?, 
            inspoImg = ?, 
            name = ? 
            WHERE idstyle = ?`, 
            [description, imgPath, name, id]);
            
        const [rows] = await connection.query(
            `SELECT * FROM styles 
            WHERE idstyle = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al insertar estéticas de la base de datos: ` + error.message);
    }
}

async function deleteStyleModel(id) {
    try {
        await connection.query(`DELETE FROM styles WHERE idstyle = ?`, [id]);
        
        const [rows] = await connection.query(
            `SELECT * FROM styles 
            WHERE idstyle = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al estéticas usuarios de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllStylesModel,
    getStyleByIdModel,
    getStyleByNameModel,
    addStyleModel,
    editStyleModel,
    deleteStyleModel
}
