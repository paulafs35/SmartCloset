export class IndividualCourseController{
    constructor (view, userModel, roleModel, courseModel, styleModel){

        this.view = view;

        this.userModel = userModel;
        this.roleModel = roleModel;
        this.courseModel = courseModel;
        this.styleModel = styleModel;
    }

    async getPath(){
        var path = window.location.pathname

        this.id = path.split('/')[2]
        this.courseId = path.split('/').pop()

        var user = await this.userModel.getById(this.id)
        var role = await this.roleModel.getById(user['idrole'])
        
        if (role['description'] == 'Profesor'){
            this.routes = ['courses', 'recomendations', 'closet', 'coursesTeacher'];
            this.items = ['Cursos', 'Sugerencias', 'Armario', 'Administrar cursos'];
        }
        else{
            this.routes = ['courses', 'recomendations', 'closet'];
            this.items = ['Cursos', 'Sugerencias', 'Armario'];
        }

        for (const id in this.routes) {
            if (path.split('/').includes(this.routes[id]))
            {
                this.part = id;
                break
            }
        }
    }

    async showMenu(){
        await this.getPath()

        this.view.setMenuItems(this.items, this.routes, this.part, this.id)

        var userData = await this.userModel.getById(this.id)
        this.view.setUserZone(userData)
    }

    async loadData(){
        var course = await this.courseModel.getById(this.courseId)
        this.view.loadCourse(course)
    }
}