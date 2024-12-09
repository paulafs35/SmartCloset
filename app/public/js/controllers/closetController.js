import { createDeleteAlert, createErrorAlert, createInfoAlert } from '../utils/alertManager.js'

export class ClosetController{
    constructor (view, userModel, roleModel, styleModel, colorModel, clothesModel, closetModel){

        this.view = view;

        this.userModel = userModel;
        this.roleModel = roleModel;
        this.styleModel = styleModel;
        this.colorModel = colorModel;
        this.clothesModel = clothesModel;
        this.closetModel = closetModel;
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

    addEventListeners(){
        var that = this

        document.querySelector('.btn').addEventListener('click', async (e) =>{
            e.preventDefault()

            var data = that.view.extractData()
            data['iduser'] = that.id

            try{
                var closet = await that.closetModel.add(data)
                createInfoAlert('Se ha añadido la prenda correctamente.')
            }
            catch(error){
                createErrorAlert(error || error.message)
            }
        })

        document.querySelector('#tbxAesthetic').addEventListener('change', async (e) => {
            var closet = await that.closetModel.getByStyle(this.id, e.target.value)
            that.view.showTableData(closet)

            for (const deleteBtn of document.querySelectorAll('.bi-trash')) {
                deleteBtn.addEventListener('click', (e) => {
                    var id = e.target.parentNode.getAttribute('data-id')
                    var name = e.target.parentNode.parentNode.querySelector('td').textContent;
                    createDeleteAlert(id, 4, name, that.closetModel)
                })
            }
        })
    }

    async loadData(){
        var that = this;

        var styles = await this.styleModel.getAll();
        this.view.loadStyles(styles);

        var clothes = await this.clothesModel.getAll();
        this.view.loadClothes(clothes);

        var color = await this.colorModel.getAll();
        this.view.loadColors(color);

        var closet = await this.closetModel.getByStyle(this.id, styles[0]['idstyle'])
        this.view.showTableData(closet)

        for (const deleteBtn of document.querySelectorAll('.bi-trash')) {
            deleteBtn.addEventListener('click', (e) => {
                var id = e.target.parentNode.getAttribute('data-id')
                var name = e.target.parentNode.parentNode.querySelector('td').textContent;
                createDeleteAlert(id, 4, name, that.closetModel)
            })
        }
    }
}