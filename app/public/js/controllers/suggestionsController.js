export class suggestionsController{
    constructor (view, userModel, roleModel, courseModel, styleModel, colorModel, clothesModel, paletteModel, outfitModel, interestsModel){

        this.view = view;

        this.userModel = userModel;
        this.roleModel = roleModel;
        this.courseModel = courseModel;
        this.styleModel = styleModel;
        this.colorModel = colorModel;
        this.clothesModel = clothesModel;
        this.paletteModel = paletteModel;
        this.outfitModel  = outfitModel ;
        this.interestsModel = interestsModel;
    }

    async getPath(){
        var path = window.location.pathname

        this.id = path.split('/').pop()

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
        var styles = await this.styleModel.getAll()
        this.view.showStyles(styles)

        
        document.querySelector('#tbxStyle').addEventListener('change', (e) => this.showData())
    }

    async showData(){
        var that = this;

        var style = document.querySelector('#tbxStyle').value;
        var colors = await this.paletteModel.getByStyle(style);
        this.view.showColors(colors)

        var clothes = await this.outfitModel.getByStyle(style);
        this.view.showClothes(clothes)

        var courses = await this.courseModel.getByStyle(style)
        this.view.loadCourses(courses)

        for (const videoGroup of document.querySelectorAll('.videoGroup')) {
            videoGroup.addEventListener('click', (e) =>{
                var courseid = e.target.getAttribute('data-id')
                if (courseid == null){
                    courseid = e.target.parentElement.getAttribute('data-id')
                }

                window.location.pathname = `/client/${that.id}/courses/${courseid}`
            })
        }
    }
}