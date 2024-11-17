export class adminTableController{
    constructor (view, userModel, courseModel, styleModel, colorModel, clothesModel){
        this.view = view;
        this.routes = ['users', 'courses', 'styles', 'colors', 'clothes'];
        this.models = [userModel, courseModel, styleModel, colorModel, clothesModel]
        
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
        }
        else if(this.part == 1){
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
                    'data':[row['name']]
                })
            }
        }

        this.view.showTableData(data, this.isCourse)
    }
}