const path = require('path');

// Controlador para manejar la ruta '/' y mostrar la página de inicio
function showCourseFormController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'courseForm.html'));
}



module.exports = {
    showCourseFormController
}