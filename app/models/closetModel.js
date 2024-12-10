const db = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await db.getConnection();
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
            `SELECT * FROM closet
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
            `SELECT * FROM closet 
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
            `SELECT cl.idcloset, g.name, g.material, co.hex 
            FROM closet AS cl INNER JOIN clothes AS g ON g.idgarment = cl.idgarment
            INNER JOIN colors AS co ON co.idcolor = cl.idcolor
            WHERE cl.iduser = ? AND 
            (cl.idcolor IN (SELECT p.idcolor FROM palettes AS p WHERE p.idstyle = ?) OR 
            cl.idgarment IN (SELECT o.idgarment FROM outfits AS o WHERE o.idstyle = ?))`, 
            [idUser, idStyle, idStyle]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener armarios de la base de datos: ` + error.message);
    }
}

async function addClosetModel(data) {
    const {idgarment, idcolor, iduser} = data;
    try {
        await connection.query(
            `INSERT INTO closet 
            (idgarment, idcolor, iduser) 
            VALUES (?, ?, ?)`, 
            [idgarment, idcolor, iduser]);

        const [rows] = await connection.query(
            `SELECT * FROM closet 
            WHERE idgarment = ? AND idcolor = ? AND iduser = ?`,
            [idgarment, idcolor, iduser]);

        return rows
    } catch (error) {
        throw new Error(`Error al insertar armarios en la base de datos: ` + error.message);
    }
}

async function editClosetByUserModel(data, idcloset) {
    const {idgarment, idcolor, iduser} = data;
    try {

        await connection.query(
            `UPDATE closet 
            SET idgarment = ?, 
            idcolor = ?,
            iduser = ? 
            WHERE idcloset = ?`, 
            [idgarment, idcolor, iduser, idcloset]);

        const [rows] = await connection.query(
            `SELECT * FROM closet 
            WHERE iduser = ?`, 
            [iduser]);
        return rows;
    } catch (error) {
        throw new Error(`Error al actualizar armarios de la base de datos: ` + error.message);
    }
}


async function deleteClosetModel(id) {
    try {
        await connection.query(`DELETE FROM closet WHERE idcloset = ?`, [id]);

        const [rows] = await connection.query(
            `SELECT * FROM closet 
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
    editClosetByUserModel,
    deleteClosetModel
}