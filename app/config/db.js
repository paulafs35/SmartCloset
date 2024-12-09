const mysql = require('mysql2/promise')

const DB_HOST = process.env.DB_HOST || 'localhost'
const DB_USER = process.env.DB_USER || 'root'
const DB_PASSWORD = process.env.DB_PASSWORD || 'temporal'
const DB_NAME = process.env.DB_NAME || 'smartcloset'
const DB_PORT = process.env.DB_PORT || 'localhost'

async function getConnection() {
    try {
        const connection = await mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME,
            port: DB_PORT
        });

        return connection;
    }
    catch (error) {
        console.error('Error al establecer la conexión a MySQL:', error);
        throw error; 
    }
}

module.exports = getConnection;