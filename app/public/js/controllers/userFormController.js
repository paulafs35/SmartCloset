import { loadFile } from "../utils/imageManagement.js"
import { createAlert } from "../styles/alerts.js"

export class userFormController{
    constructor (view, userModel, styleModel, roleModel){
        this.isAdmin = window.location.pathname.includes('admin')
        this.isNew = !window.location.pathname.includes('update')

        this.view = view;
        this.userModel = userModel
        this.styleModel = styleModel
        this.roleModel = roleModel
    }

    setForNewOrUpdate(){
        if (this.isNew){
            document.querySelector('h1').textContent = 'Nuevo usuario'
            document.querySelector('button').addEventListener('click', this.addUser.bind(this))
        }
        else{
            document.querySelector('h1').textContent = 'Editar usuario'
            document.querySelector('button').addEventListener('click', this.editUser.bind(this))
            this.loadDataToEdit()
        }

        if(this.isAdmin){
            this.loadRoles()
        }
        else{
            this.view.hideRoles();
        }
    }

    addEventListeners(){
        document.querySelector('input[type="file"]').addEventListener('change', loadFile)
    }

    async loadRoles(){
        var roles = await this.roleModel.getAll()
        this.view.showRoles(roles)
    }

    async showStyles(){
        var styles = await this.styleModel.getAll();
        this.view.showStyles(styles)

        for (const label of document.querySelectorAll('.aesthetics label')) {
            label.addEventListener('mouseenter', this.showStyleData.bind(this))
        }
    }

    async showStyleData(e){        
        var data = await this.styleModel.getById(document.querySelector(`#${e.target.getAttribute('for')}`).value)
        this.view.showStyle(data)
    }

    async addUser(e){
        try{
            var form = document.querySelector('form')

            if(this.view.checkInputs())
            {
                if (this.userModel.userExist(form.tbxUser.value)){
                    throw('El usuario ya existe')
                }
                else if (this.userModel.emailExist(form.tbxEmail.value)){
                    throw('El usuario ya existe')
                }

                var userData = await this.view.extractFormData(this.isAdmin)
                await this.userModel.add(userData)
            } 
        }
        catch(error){
            createAlert(error.message || error)
        }
    }

    async editUser(e){
        try{
            if(this.view.checkInputs(true)){
                var userData = await userFormView.extractFormData(this.isAdmin)
                await this.userModel.update(userData, window.location.pathname.split('/').at(-1))
            }

        }
        catch(error){
            createAlert(error)
        }
    }

    async loadDataToEdit(){
        var data = await this.userModel.getById(window.location.pathname.split('/').at(-1))
        this.view.loadDataToEdit(data, this.isAdmin)
    }
}