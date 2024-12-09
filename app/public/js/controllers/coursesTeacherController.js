import { createDeleteAlert, createErrorAlert, createInfoAlert } from "../utils/alertManager.js";
import { createCoursesForm, extractCourseData, hidePopUp, removePopUp, showPopUp } from "../utils/popupFormManager.js";

export class coursesTeacherController {
    constructor(view, userModel, roleModel, courseModel, styleModel) {
        this.view = view;
        this.userModel = userModel;
        this.roleModel = roleModel;
        this.courseModel = courseModel;
        this.styleModel = styleModel;

        this.isCourse = window.location.pathname.includes('courses')
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

    async showTableData() {
        var allData = await this.courseModel.getByTeacher(this.id)

        var data = []

        for (const row of allData) {
            data.push({
                'id': row['idcourse'],
                'data': [row['name']]
            })
        }


        this.view.showTableData(data, this.isCourse)
    }

    async addEventListeners() {
        var that = this

        document.querySelector('.exit').addEventListener('click', (e) => {
            hidePopUp();
            removePopUp();
        });

        var styles = await that.styleModel.getAll();

        for (const editBtn of document.querySelectorAll('.bi-pencil')) {
            editBtn.addEventListener('click', async (e) => {
                var id = e.target.parentNode.getAttribute('data-id')
                var data = await that.courseModel.getById(id)

                createCoursesForm(styles, data);
                showPopUp();
                document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                    try {
                        var data = await extractCourseData()
                        data['idteacher'] = that.id
                        var course = await that.courseModel.update(data, id)
                        createInfoAlert('El curso se ha actualizado correctamente')
                        hidePopUp()
                        removePopUp()
                    }
                    catch (error) {
                        createErrorAlert(error.message || error)
                    }
                })
            })
        }

        document.querySelector('.add').addEventListener('click', function (e) {
            createCoursesForm(styles, null);
            showPopUp();
            document.querySelector('.popup .btn').addEventListener('click', async (e) => {
                try {
                    var data = await extractCourseData()
                    data['idteacher'] = that.id
                    var course = await that.courseModel.add(data)
                    createInfoAlert('El curso se ha creado correctamente')
                    hidePopUp()
                    removePopUp()
                }
                catch (error) {
                    createErrorAlert(error.message || error)
                }
            })
        })

        for (const deleteBtn of document.querySelectorAll('.bi-trash')) {
            deleteBtn.addEventListener('click', (e) => {
                var id = e.target.parentNode.getAttribute('data-id')
                var name = e.target.parentNode.parentNode.querySelector('td').textContent;
                createDeleteAlert(id, 1, name, that.courseModel)
            })
        }
    }
}

