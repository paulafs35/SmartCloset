export class CourseModel{

    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch('/course/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        result = await result.json()
    
        return result
    }

    async update(jsonData, id){
        // Send the data to the API using fetch()
        var result = await fetch(`/course/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        result = await result.json()
    
        return result
    }

    async delete(id){
        // Send the data to the API using fetch()
        var result = await fetch(`/course/${id}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
    
        return result
    }

    // GETTERS
    async getByTeacher(teacherid){
        var courses = await fetch(`/course/teacher/${teacherid}`, {method: 'GET'})
        courses = await courses.json()
    
        return await courses
    }

    async getByStyle(styleid){
        var courses = await fetch(`/course/style/${styleid}`, {method: 'GET'})
        courses = await courses.json()
    
        return await courses
    }

    async getById(id){
        var courses = await fetch(`/course/${id}`, {method: 'GET'})
        courses = await courses.json()
    
        return await courses
    }

    async getAll(){
        var courses = await fetch(`/course/all`, {method: 'GET'})
        courses = await courses.json()
    
        return await courses
    }

    // CHECKS
    async courseExist(name){
        var courses = await this.getByName(name)
    
        if (courses.lenght == 0)
            return false
        else
            return true
    }
}
    