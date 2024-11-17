export class UserModel{

    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch('./user/add', {
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
        var result = await fetch(`./user/${id}`, {
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
        var result = await fetch(`./user/${id}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
    
        return result
    }

    // GETTERS
    async getByUsername(username){
        var users = await fetch(`/user/username/${username}`, {method: 'GET'})
        users = await users.json()
    
        return await users
    }

    async getByEmail(email){
        var users = await fetch(`/user/email/${email}`, {method: 'GET'})
        users = await users.json()
    
        return await users
    }

    async getById(id){
        var users = await fetch(`/user/${id}`, {method: 'GET'})
        users = await users.json()
    
        return await users
    }

    async getAll(){
        var users = await fetch(`/user/all`, {method: 'GET'})
        users = await users.json()
    
        return await users
    }

    // CHECKS
    async userExist(username){
        var users = await this.getByUsername(username)
    
        if (users.lenght == 0)
            return false
        else
            return true
    }

    async emailExist(email){
        var users = await this.getByEmail(email)
    
        if (users.lenght == 0)
            return false
        else
            return true
    }
}

    