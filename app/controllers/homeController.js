const path = require('path');
const UsersModel = require('../models/userModel');
const RoleModel = require('../models/roleModel');
const { send } = require('process');



// Controlador para manejar la ruta '/' y mostrar la página de inicio
function homeController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'index.html'));
}

// Controlador para manejar la ruta '/login' y mostrar la página de inicio de sesión
function signUpController(req, res) {
    res.sendFile(path.join(__dirname, "..", 'views', 'userForm.html'));
}

async function login(req, res){
    try {
        var rows = await UsersModel.authUserModel(
            req.body.username, 
            req.body.password);
        
        if (rows.length == 0){
            res.send('Usuario y/o contraseña incorrectos')
        }
        else{
            req.session.user = rows[0].username;
            req.session.iduser = rows[0].iduser
            
            var role = await RoleModel.getRoleByIdModel(rows[0].idrole)
            req.session.role = role[0].description;

            if (req.session.role == 'Administrador'){
                res.redirect('/admin');
            }
            else {
                res.redirect(`/client/courses/${rows[0]['iduser']}`);
            }
        }
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
    
}

module.exports = {
    homeController,
    signUpController,
    login
}