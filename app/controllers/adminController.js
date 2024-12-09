const path = require('path');

// Controlador para manejar la ruta '/' y mostrar la página de inicio
function showTablesController(req, res) {
    if (req.session.role == 'Administrador'){
        res.sendFile(path.join(__dirname, "..", 'views', 'adminTable.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showUserFormController(req, res){
    if (req.session.role == 'Administrador'){
        res.sendFile(path.join(__dirname, "..", 'views', 'userForm.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}


module.exports = {
    showTablesController,
    showUserFormController
}