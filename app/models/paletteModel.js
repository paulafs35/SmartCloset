const getConnection = require(`../config/db`);
let connection;

(async function miConexion() {
    connection = await getConnection();
})()

// Función para obtener todas las provincias
async function getAllPalettesModel() {
    try {
        const [rows] = await connection.query(`SELECT * FROM palettes`);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener paletas de la base de datos: ` + error.message);
    }
}

async function getPaletteByIdModel(id) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM palettes 
            WHERE idpalette = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener paletas de la base de datos: ` + error.message);
    }
}

async function getPaletteByIdStyleModel(idstyle) {
    try {
        const [rows] = await connection.query(
            `SELECT c.* 
            FROM palettes p INNER JOIN colors c ON c.idcolor = p.idcolor
            WHERE p.idstyle = ?`, 
            [idstyle]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener paletas de la base de datos: ` + error.message);
    }
}

async function getPaletteByIdColorModel(idcolor) {
    try {
        const [rows] = await connection.query(
            `SELECT * FROM palettes 
            WHERE idcolor = ?`, 
            [idcolor]);
        return rows;
    } catch (error) {
        throw new Error(`Error al obtener paletas de la base de datos: ` + error.message);
    }
}

async function addPaletteModel(idcolor, idstyle) {
    try {
        await connection.query(
            `INSERT INTO palettes 
            (idcolor, idstyle) 
            VALUES (?, ?)`, 
            [idcolor, idstyle]);
    } catch (error) {
        throw new Error(`Error al insertar paletas en la base de datos: ` + error.message);
    }
}

async function setPaletteModel(idcolor, userData) {
    const {styles} = userData;
    try {
        await connection.query(`DELETE FROM palettes WHERE idcolor = ?`, [idcolor]);

        for (const idstyle of styles) {
            addPaletteModel(idcolor, idstyle);
        }

        const [rows] = await connection.query(
            `SELECT * FROM palettes 
            WHERE idcolor = ?`, 
            [idcolor]);
        return rows;

    } catch (error) {
        throw new Error(`Error al editar paletas de la base de datos: ` + error.message);
    }
}

async function deletePaletteModel(id) {
    try {
        await connection.query(`DELETE FROM palettes WHERE idpalette = ?`, [id]);
        const [rows] = await connection.query(
            `SELECT * FROM palettes 
            WHERE idpalette = ?`, 
            [id]);
        return rows;
    } catch (error) {
        throw new Error(`Error al eliminar paletas de la base de datos: ` + error.message);
    }
}

module.exports = {
    getAllPalettesModel,
    getPaletteByIdModel,
    getPaletteByIdStyleModel,
    getPaletteByIdColorModel,
    setPaletteModel,
    deletePaletteModel
}