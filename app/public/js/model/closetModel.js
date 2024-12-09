export class ClosetModel{
    
    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch(`/closet/add`, {
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
        var result = await fetch(`/closet/${id}`, {
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
        var result = await fetch(`/closet/${id}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
        return result
    }

    async delete(id){
        // Send the data to the API using fetch()
        var result = await fetch(`/closet/${id}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
        return result
    }

    // GETTERS

    async getByStyle(iduser, idstyle){
        var data = await fetch(`/closet/user/${iduser}/${idstyle}`, {method: 'GET'})
        data = await data.json()
        return data
    }
}