const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllRolesModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM roles`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener roles de la base de datos: ` + error.message);
    }
}

async function getRoleByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM roles 
            WHERE idrole = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener roles de la base de datos: ` + error.message);
    }
}

async function addRoleModel(userData) {
    const {description} = userData;
    try {
        await connection.query(
            `INSERT INTO roles 
            (description) 
            VALUES (?)`, 
            [description]);
    } catch (error) {
        throw new Error(`Error al insertar roles en la base de datos: ` + error.message);
    }
}

async function editRoleModel(id, userData) {
    const {description} = userData;
    try {
        await connection.query(
            `UPDATE roles 
            SET description = ?
            WHERE idrole = ?`, 
            [description, id]);
    } catch (error) {
        throw new Error(`Error al editar roles de la base de datos: ` + error.message);
    }
}

async function removeRoleModel(id) {
    try {
        await connection.query(`DELETE FROM roles WHERE idrole = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar roles de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllRolesModel,
    getRoleByIdModel,
    addRoleModel,
    editRoleModel,
    removeRoleModel
}
