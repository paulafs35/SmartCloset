const mysql = require('mysql2/promise')

async function getConnection() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'temporal',
            database: 'smartcloset',
            port: 3306
        });

        return connection;
    }
    catch (error) {
        console.error('Error al establecer la conexión a MySQL:', error);
        throw error; 
    }
}

module.exports = getConnection;