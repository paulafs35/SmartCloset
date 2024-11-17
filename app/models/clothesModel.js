const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllGarmentsModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM clothes`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener prendas de la base de datos: ` + error.message);
    }
}

async function getGarmentByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM clothes 
            WHERE idgarment = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener prendas de la base de datos: ` + error.message);
    }
}

async function addGarmentModel(userData) {
    const {material, name} = userData;
    try {
        await connection.query(
            `INSERT INTO clothes 
            (material, name) 
            VALUES (?, ?)`, 
            [material, name]);
    } catch (error) {
        throw new Error(`Error al insertar prendas en la base de datos: ` + error.message);
    }
}

async function editGarmentModel(id, userData) {
    const {material, name} = userData;
    try {
        await connection.query(
            `UPDATE clothes 
            SET material = ?, 
            name = ?
            WHERE idgarment = ?`, 
            [material, name, id]);
    } catch (error) {
        throw new Error(`Error al editar prendas de la base de datos: ` + error.message);
    }
}

async function removeGarmentModel(id) {
    try {
        await connection.query(`DELETE FROM clothes WHERE idgarment = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar prendas de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllGarmentsModel,
    getGarmentByIdModel,
    addGarmentModel,
    editGarmentModel,
    removeGarmentModel
}