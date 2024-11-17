export class InterestModel{
    
    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        result = await fetch('./interest/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })
    
        return await result.json()
    }

    async update(jsonData, id){
        // Send the data to the API using fetch()
        result = await fetch(`./user/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })
    
        return await result.json()
    }

    async delete(id){
        // Send the data to the API using fetch()
        result = await fetch(`./user/${id}`, {
            method: 'DELETE'
        })
    
        return await result.json()
    }

    // GETTERS
    async getByUser(user){
        users = await fetch(`/interest/user/${username}`, {method: 'GET'})
        users = await users.json()
    
        return await result.json()
    }

    async getById(id){
        users = await fetch(`/interest/${id}`, {method: 'GET'})
        users = await users.json()
    
        return await result.json()
    }

    // CHECKS
    async interestChange(user, style){
        users =  await getByUser(user)
    
        if (users.lenght == 0)
            return false
        else
            return true
    }
}