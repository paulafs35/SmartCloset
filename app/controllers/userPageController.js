const path = require('path');

// Controlador para manejar la ruta '/' y mostrar la página usuarios.html
function mostrarUsuariosController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'usuarios.html'));
}