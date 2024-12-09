const path = require('path');

// Controlador para manejar la ruta '/' y mostrar la página de inicio
function showCoursesController(req, res) {
    if (req.session.iduser == req.params.iduser){
        res.sendFile(path.join(__dirname, "..", 'views', 'courses.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showInvidualCoursesController(req, res) {
    if (req.session.iduser == req.params.iduser){
        res.sendFile(path.join(__dirname, "..", 'views', 'individualCourse.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showSuggestionsController(req, res) {
    if (req.session.iduser == req.params.iduser){
        res.sendFile(path.join(__dirname, "..", 'views', 'suggestions.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showClosetController(req, res) {
    if (req.session.iduser == req.params.iduser){
        res.sendFile(path.join(__dirname, "..", 'views', 'closet.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showSuggestionsController(req, res) {
    if (req.session.iduser == req.params.iduser){
        res.sendFile(path.join(__dirname, "..", 'views', 'suggestions.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showCoursesTeacherController(req, res) {
    if ((req.session.role == 'Profesor') && (req.session.iduser == req.params.iduser)){
        res.sendFile(path.join(__dirname, "..", 'views', 'coursesTeacher.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}

function showUserFormController(req, res){
    if (req.session.iduser == req.params.iduser){
        res.sendFile(path.join(__dirname, "..", 'views', 'userForm.html'));
    }
    else{
        res.sendFile(path.join(__dirname, "..", 'views', 'permisosDenegados.html'));
    }
}


module.exports = {
    showCoursesController,
    showInvidualCoursesController,
    showSuggestionsController,
    showClosetController,
    showCoursesTeacherController,
    showUserFormController
}