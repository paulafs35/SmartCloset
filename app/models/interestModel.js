const db = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await db.getConnection();
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

async function getInterestByIdUserModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM interests 
            WHERE iduser = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener intereses de la base de datos: ` + error.message);
    }
}

async function setInterestModel(idUser, userData) {
    const {styles} = userData;
    try {
        await connection.query(`DELETE FROM interests WHERE iduser = ?`,[idUser]);
        for (const idStyle of styles) {
            await connection.query(
                `INSERT INTO interests 
                (idstyle, iduser) 
                VALUES (?, ?)`, 
                [idStyle, idUser]);
        } 

        const [rows] = await connection.query(
            `SELECT * FROM interests 
            WHERE iduser = ?`, 
            [idUser]);
        return rows;
    } catch (error) {
        throw new Error(`Error al editar intereses de la base de datos: ` + error.message);
    }
}

async function deleteInterestModel(id) {
    try {
        await connection.query(`DELETE FROM interests WHERE idinterest = ?`, [id]);

        const [rows] = await connection.query(
            `SELECT * FROM interests 
            WHERE idinterest = ?`, 
            [idinterest]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar intereses de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllInterestsModel,
    getInterestByIdUserModel,
    setInterestModel,
    deleteInterestModel
}