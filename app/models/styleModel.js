const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

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
        await connection.query(
            `INSERT INTO styles 
            (description, inspoimg, name) 
            VALUES (?, ?, ?)`, 
            [description, inspoImg, name]);       

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
        await connection.query(
            `UPDATE styles 
            SET description = ?, 
            inspoImg = ?, 
            name = ? 
            WHERE idstyle = ?`, 
            [description, inspoImg, name, id]);
            
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
