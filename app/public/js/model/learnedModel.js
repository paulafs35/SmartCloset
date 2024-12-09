export class LearnedModel{
    
    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch(`/learned/add`, {
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
        var result = await fetch(`/learned/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })
    
        result = await result.json()
        return result
    }

    async delete(iduser, idcourse){
        // Send the data to the API using fetch()
        var result = await fetch(`/learned/${iduser}/${idcourse}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
        return result
    }

    // GETTERS

    async getByUser(iduser){
        var data = await fetch(`/learned/user/${iduser}`, {method: 'GET'})
        data = await data.json()
        return data
    }

    async getByCourse(idcourse){
        var data = await fetch(`/learned/course/${idcourse}`, {method: 'GET'})
        data = await data.json()
        return data
    }

    async getByUserCourse(iduser, idcourse){
        var data = await fetch(`/learned/${iduser}/${idcourse}`, {method: 'GET'})
        data = await data.json()
        return data
    }

    // CHECKS

    async isLearned(iduser, idcourse)
    {
        var learned = await this.getByUserCourse(iduser, idcourse)

        return (learned.length > 0)
    }
}