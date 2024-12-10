const db = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await db.getConnection();
})()

// Función para obtener todas las provincias
async function getAllColorsModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM colors`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener colores de la base de datos: ` + error.message);
    }
}

async function getColorByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM colors 
            WHERE idcolor = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener colores de la base de datos: ` + error.message);
    }
}

async function addColorModel(userData) {
    const {blue, green, red, hex, name} = userData;
    try {
        await connection.query(
            `INSERT INTO colors 
            (blue, green, red, hex, name) 
            VALUES (?, ?, ?, ?, ?)`, 
            [blue, green, red, hex, name]);

        const [rows] = await connection.query(
            `SELECT * FROM colors 
            WHERE hex = ?`, 
            [hex]);
        return rows;
    } catch (error) {
        throw new Error(`Error al insertar colores en la base de datos: ` + error.message);
    }
}

async function editColorModel(id, userData) {
    const {blue, green, red, hex, name} = userData;
    try {
        await connection.query(
            `UPDATE colors 
            SET blue = ?, 
            green = ?,
            red = ?, 
            hex = ?, 
            name = ?
            WHERE idcolor = ?`, 
            [blue, green, red, hex, name, id]);
            
        const [rows] = await connection.query(
            `SELECT * FROM colors 
            WHERE idcolor = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al editar colores de la base de datos: ` + error.message);
    }
}

async function deleteColorModel(id) {
    try {
        await connection.query(`DELETE FROM colors WHERE idcolor = ?`, [id]);
        
        const [rows] = await connection.query(
            `SELECT * FROM colors 
            WHERE idcolor = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar colores de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllColorsModel,
    getColorByIdModel,
    addColorModel,
    editColorModel,
    deleteColorModel
}