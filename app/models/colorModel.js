const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
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
    const {blue, green, red, hexadecimal, name} = userData;
    try {
        await connection.query(
            `INSERT INTO colors 
            (blue, green, red, hexadecimal, name) 
            VALUES (?, ?, ?, ?, ?)`, 
            [blue, green, red, hexadecimal, name]);
    } catch (error) {
        throw new Error(`Error al insertar colores en la base de datos: ` + error.message);
    }
}

async function editColorModel(id, userData) {
    const {blue, green, red, hexadecimal, name} = userData;
    try {
        await connection.query(
            `UPDATE colors 
            SET blue = ?, 
            green = ?,
            red = ?, 
            hexadecimal = ?, 
            name = ?
            WHERE idcolor = ?`, 
            [blue, green, red, hexadecimal, name, id]);
    } catch (error) {
        throw new Error(`Error al editar colores de la base de datos: ` + error.message);
    }
}

async function removeColorModel(id) {
    try {
        await connection.query(`DELETE FROM colors WHERE idcolor = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar colores de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllColorsModel,
    getColorByIdModel,
    addColorModel,
    editColorModel,
    removeColorModel
}