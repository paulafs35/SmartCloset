import { createDeleteAlert, createErrorAlert, createInfoAlert } from "../utils/alertManager.js";
import { createClothesForm, createColorForm, createStylesForm, extractClothesData, extractColorData, extractStyleData, hidePopUp, removePopUp, showPopUp } from "../utils/popupFormManager.js";

export class adminTableController{
    constructor (view, userModel, courseModel, styleModel, colorModel, clothesModel, paletteModel, outfitModel){
        this.view = view;
        this.routes = ['users', 'courses', 'styles', 'colors', 'clothes'];
        this.models = [userModel, courseModel, styleModel, colorModel, clothesModel, paletteModel, outfitModel]
        
        this.isCourse = window.location.pathname.includes('courses')

        this.getPath()
    }

    getPath(){
        var path = window.location.pathname

        for (const id in this.routes) {
            if (path.includes(this.routes[id]))
            {
                this.part = id;
                break
            }
        }
    }

    showMenu(){
        var items = ['Usuarios', 'Cursos', 'Estéticas', 'Colores', 'Prendas'];

        this.view.setMenuItems(items, this.routes, this.part)
    }

    async showTableData(){
        var allData = await this.models[this.part].getAll()

        var data = []

        if(this.part == 0){
            for (const row of allData) {
                data.push({
                    'id': row['iduser'],
                    'data':[row['name'] + ' ' + row['surname'], row['email']]
                })
            }

            document.querySelector('.add').addEventListener('click', (e) => {window.location.href = '/admin/users/new'})
        }
        else if(this.part == 1){
            this.view.hideAddButton()

            for (const row of allData) {
                data.push({
                    'id': row['idcourse'],
                    'data':[row['name']]
                })
            }
        }
        else if(this.part == 2){
            for (const row of allData) {
                data.push({
                    'id': row['idstyle'],
                    'data':[row['name']]
                })
            }
        }
        else if(this.part == 3){
            for (const row of allData) {
                data.push({
                    'id': row['idcolor'],
                    'data':[row['name']]
                })
            }
        }
        else if(this.part == 4){
            for (const row of allData) {
                data.push({
                    'id': row['idgarment'],
                    'data':[row['name'], row['material']]
                })
            }
        }

        this.view.showTableData(data, this.isCourse)
    }

    async addEventListeners(){
        var that = this

        document.querySelector('.exit').addEventListener('click', (e) => {
            hidePopUp();
            removePopUp();
        });

        if(this.part == 0){
            for (const editBtn of document.querySelectorAll('.bi-pencil')) {
                editBtn.addEventListener('click', (e) => {window.location.href = `/admin/users/update/${e.target.parentNode.getAttribute('data-id')}`})
            }
        }
        else if(this.part == 2){
            for (const editBtn of document.querySelectorAll('.bi-pencil')) {
                editBtn.addEventListener('click', async (e) =>  {  
                    var id = e.target.parentNode.getAttribute('data-id')
                    var data = await that.models[that.part].getById(id)

                    createStylesForm(data);
                    showPopUp();
                    document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                        try{
                            var data = await extractStyleData()
                            var style = await that.models[that.part].update(data, id)
                            createInfoAlert('La estética se ha actualizado correctamente')
                            hidePopUp()
                            removePopUp()
                        }
                        catch(error){
                            createErrorAlert(error.message || error)
                        }
                    })
                })
            }

            document.querySelector('.add').addEventListener('click', function (e){
                createStylesForm(null);
                showPopUp();
                document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                    try{
                        var data = await extractStyleData()
                        var style = await that.models[that.part].add(data)
                        createInfoAlert('La estética se ha creado correctamente')
                        hidePopUp()
                        removePopUp()
                    }
                    catch(error){
                        createErrorAlert(error.message || error)
                    }
                })
            })
        }
        else if(this.part == 3){
            var styles = await that.models[2].getAll();
            for (const editBtn of document.querySelectorAll('.bi-pencil')) {
                editBtn.addEventListener('click', async (e) =>  {  
                    var id = e.target.parentNode.getAttribute('data-id')
                    var data = await that.models[that.part].getById(id)
                    var outfits = await that.models[5].getByColor(id)

                    data['styles'] =  []
                    for (const outfit of outfits) {
                        data['styles'].push(outfit.idstyle)
                    }

                    createColorForm(styles, data)
                    showPopUp()
                    document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                        try{
                            var data = extractColorData()
                            var color = await that.models[that.part].update(data[0], id)
                            var palettes = await that.models[5].set(data[1], id)
                            createInfoAlert('El color se ha actualizado correctamente')
                            hidePopUp()
                            removePopUp()
                        }
                        catch(error){
                            createErrorAlert(error.message || error)
                        }
                    })
                })
            }

            document.querySelector('.add').addEventListener('click', function (e){
                createColorForm(styles, null);
                showPopUp();
                document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                    try{
                        var data = extractColorData()
                        var color = await that.models[that.part].add(data[0])
                        var palettes = await that.models[5].set(data[1], color[0][0]['idcolor'])
                        createInfoAlert('El color se ha creado correctamente')
                        hidePopUp()
                        removePopUp()
                    }
                    catch(error){
                        createErrorAlert(error.message || error)
                    }
                })
            })
        }
        else if(this.part == 4){
            var styles = await that.models[2].getAll();
            for (const editBtn of document.querySelectorAll('.bi-pencil')) {
                editBtn.addEventListener('click', async (e) =>  {  
                    var id = e.target.parentNode.getAttribute('data-id')
                    var data = await that.models[that.part].getById(id)
                    var outfits = await that.models[6].getByGarment(id)

                    data['styles'] =  []
                    for (const outfit of outfits) {
                        data['styles'].push(outfit.idstyle)
                    }

                    createClothesForm(styles, data)
                    showPopUp()
                    document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                        try{
                            var data = extractClothesData()
                            var garment = await that.models[that.part].update(data[0], id)
                            var outfits = await that.models[6].set(data[1], id)
                            createInfoAlert('La prenda se ha actualizado correctamente')
                            hidePopUp()
                            removePopUp()
                        }
                        catch(error){
                            createErrorAlert(error.message || error)
                        }
                    })
                })
            }

            document.querySelector('.add').addEventListener('click', function (e){
                createClothesForm(styles, null);
                showPopUp();
                document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                    try{
                        var data = extractClothesData()
                        var garment = await that.models[that.part].add(data[0])
                        var outfits = await that.models[6].set(data[1], garment[0][0]['idgarment'])
                        createInfoAlert('La prenda se ha creado correctamente')
                        hidePopUp()
                        removePopUp()
                    }
                    catch(error){
                        createErrorAlert(error.message || error)
                    }
                })
            })
        }

        for (const deleteBtn of document.querySelectorAll('.bi-trash')) {
            deleteBtn.addEventListener('click', (e) => {
                var id = e.target.parentNode.getAttribute('data-id')
                var name = e.target.parentNode.parentNode.querySelector('td').textContent;
                createDeleteAlert(id, that.part, name, that.models[that.part])
            })
        }
    }
}