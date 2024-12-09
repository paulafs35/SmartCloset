import { loadImg } from "../utils/imageManagement.js"
import { createErrorAlert, createInfoAlert } from "../utils/alertManager.js"

export class userFormController{
    constructor (view, userModel, styleModel, roleModel, interestModel){
        this.isAdmin = window.location.pathname.includes('admin')
        this.isNew = !window.location.pathname.includes('update')

        this.view = view;
        this.userModel = userModel
        this.styleModel = styleModel
        this.roleModel = roleModel
        this.interestModel = interestModel
    }

    setForNewOrUpdate(){
        if(this.isAdmin){
            this.loadRoles()
        }
        else{
            this.view.hideRoles();
        }

        if (this.isNew){
            document.querySelector('h1').textContent = 'Nuevo usuario'
            document.querySelector('button').textContent = 'Añadir'
            document.querySelector('button').addEventListener('click', this.addUser.bind(this))
        }
        else{
            document.querySelector('h1').textContent = 'Editar usuario'
            document.querySelector('button').textContent = 'Actualizar'
            document.querySelector('button').addEventListener('click', this.editUser.bind(this))
            this.loadDataToEdit()
        }
    }

    addEventListeners(){
        document.querySelector('input[type="file"]').addEventListener('change', loadImg)
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
                if (await this.userModel.userExist(form.tbxUser.value)){
                    throw('El usuario ya existe')
                }
                else if (await this.userModel.emailExist(form.tbxEmail.value)){
                    throw('El email ya está registrado')
                }

                var userData = await this.view.extractFormData(this.isAdmin);
                var user = await this.userModel.add(userData[0]);
                user = user[0]['iduser']

                await this.interestModel.set(userData[1], user)

                createInfoAlert('El usuario se ha creado correctamente')
            } 
        }
        catch(error){
            createErrorAlert(error.message || error)
        }
    }

    async editUser(e){
        try{
            if(this.view.checkInputs(true)){
                var userData = await this.view.extractFormData(this.isAdmin)
                await this.userModel.update(userData[0], window.location.pathname.split('/').at(-1))
                await this.interestModel.set(userData[1], window.location.pathname.split('/').at(-1))

                createInfoAlert('El usuario se ha actualizado correctamente')
            }
        }
        catch(error){
            createErrorAlert(error.message || error)
        }
    }

    async loadDataToEdit(){
        var data = await this.userModel.getById(window.location.pathname.split('/').at(-1));
        var styles = await this.interestModel.getByUser(window.location.pathname.split('/').at(-1));

        data['styles'] = []

        for (const style of styles) {
            data.styles.push(style.idstyle)
        }

        this.view.loadDataToEdit(data, this.isAdmin)
    }
}