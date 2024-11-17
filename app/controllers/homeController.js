const path = require('path');

// Controlador para manejar la ruta '/' y mostrar la página de inicio
function homeController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'index.html'));
}

// Controlador para manejar la ruta '/login' y mostrar la página de inicio de sesión
function signUpController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'userForm.html'));
}

module.exports = {
    homeController,
    signUpController
}