export class UserModel{

    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch('/user/add', {
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
        var result = await fetch(`/user/${id}`, {
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
        var result = await fetch(`/user/${id}`, {
            method: 'DELETE'
        })
    
    
        return await result.json()
    }

    // GETTERS
    async getByUsername(username){
        var users = await fetch(`/user/username/${username}`, {method: 'GET'})
        users = await users.json()
    
        return users
    }

    async getByEmail(email){
        var users = await fetch(`/user/email/${email}`, {method: 'GET'})
        users = await users.json()
    
        return users
    }

    async getById(id){
        var users = await fetch(`/user/${id}`, {method: 'GET'})
        users = await users.json()
    
        return users
    }

    async getAll(){
        var users = await fetch(`/user/all`, {method: 'GET'})
        users = await users.json()
    
        return users
    }

    // CHECKS
    async userExist(username){
        var users = await this.getByUsername(username);
        
        return (users.length > 0);
    }

    async emailExist(email){
        var users = await this.getByEmail(email)
    
        return (users.length > 0);
    }

    async login(jsonData){
        var api = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        if (api.redirected) {
            window.location.href = api.url;
        }
    }
}

    