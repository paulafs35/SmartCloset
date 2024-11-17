const path = require('path');

// Controlador para manejar la ruta '/' y mostrar la página de inicio
function showTablesController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'adminTable.html'));
}

function showUserFormController(req, res){
    res.sendFile(path.join(__dirname, "..", 'views', 'userForm.html'));
}


module.exports = {
    showTablesController,
    showUserFormController
}