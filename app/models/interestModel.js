const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllInterestsModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM interests`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener intereses de la base de datos: ` + error.message);
    }
}

async function getInterestByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM interests 
            WHERE idinterest = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener intereses de la base de datos: ` + error.message);
    }
}

async function addInterestModel(userData) {
    const {idStyle, idUser} = userData;
    try {
        await connection.query(
            `INSERT INTO interests 
            (idstyle, iduser) 
            VALUES (?, ?)`, 
            [idStyle, idUser]);
    } catch (error) {
        throw new Error(`Error al insertar intereses en la base de datos: ` + error.message);
    }
}

async function editInterestModel(id, userData) {
    const {idStyle, idUser} = userData;
    try {
        await connection.query(
            `UPDATE interests 
            SET idstyle = ?,
            iduser = ? 
            WHERE idinterest = ?`, 
            [idStyle, idUser, id]);
    } catch (error) {
        throw new Error(`Error al editar intereses de la base de datos: ` + error.message);
    }
}

async function removeInterestModel(id) {
    try {
        await connection.query(`DELETE FROM interests WHERE idinterest = ?`, [id]);
    } catch (error) {
        throw new Error(`Error al eliminar intereses de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllInterestsModel,
    getInterestByIdModel,
    addInterestModel,
    editInterestModel,
    removeInterestModel
}