export class RoleModel{

    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch('/role/add', {
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
        var result = await fetch(`/role/${id}`, {
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
        var result = await fetch(`/role/${id}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
    
        return result
    }

    // GETTERS
    async getByName(rolename){
        var role = await fetch(`/role/name/${rolename}`, {method: 'GET'})
        role = await role.json()
    
        return await role
    }

    async getById(id){
        var role = await fetch(`/role/${id}`, {method: 'GET'})
        role = await role.json()
    
        return await role
    }

    async getAll(){
        var role = await fetch(`/role/all`, {method: 'GET'})
        role = await role.json()
    
        return await role
    }

    // CHECKS
    async roleExist(name){
        var role = await this.getByName(name)
    
        if (role.lenght == 0)
            return false
        else
            return true
    }
}

    