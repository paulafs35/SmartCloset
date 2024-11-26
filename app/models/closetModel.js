const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllClosetsModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM closets`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function getClosetByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM closets 
            WHERE idcloset = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function getClosetByIdUserModel(idUser) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM closets 
            WHERE iduser = ?`, 
            [idUser]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function getClosetByIdStyleModel(idStyle, idUser) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM closets 
            WHERE iduser = ? AND idstyle = ?`, 
            [idUser, idStyle]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function addClosetModel(idGarment, idColor, idUser) {
    try {
        await connection.query(
            `INSERT INTO closets 
            (idgarment, idcolor, iduser) 
            VALUES (?, ?, ?)`, 
            [idGarment, idColor, idUser]);
    } catch (error) {
        throw new Error(`Error al insertar armarios en la base de datos: ` + error.message);
    }
}

async function setClosetByUserModel(data, iduser) {
    const {garments, colors} = data;
    try {
        await connection.query(`DELETE FROM closet WHERE iduser = ?`, [iduser]);

        for (const index in garments) {
            await addClosetModel(garments[index], colors[index], iduser)
        }

        const [rows] = await connection.query(
            `SELECT * FROM closets 
            WHERE iduser = ?`, 
            [iduser]);
        return rows;
    } catch (error) {
        throw new Error(`Error al establecer armarios de la base de datos: ` + error.message);
    }
}


async function deleteClosetModel(id) {
    try {
        await connection.query(`DELETE FROM closet WHERE idcloset = ?`, [id]);

        const [rows] = await connection.query(
            `SELECT * FROM closets 
            WHERE idcloset = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar armarios de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllClosetsModel,
    getClosetByIdModel,
    getClosetByIdUserModel,
    getClosetByIdStyleModel,
    addClosetModel,
    setClosetByUserModel,
    deleteClosetModel
}