export class ClothesModel{

    //  CRUD METHODS
    async add(jsonData){
        // Send the data to the API using fetch()
        var result = await fetch('./clothes/add', {
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
        var result = await fetch(`./clothes/${id}`, {
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
        var result = await fetch(`./clothes/${id}`, {
            method: 'DELETE'
        })
    
        result = await result.json()
    
        return result
    }

    // GETTERS
    async getByName(clothesname){
        var clothes = await fetch(`/clothes/name/${clothesname}`, {method: 'GET'})
        clothes = await clothes.json()
    
        return await clothes
    }

    async getById(id){
        var clothes = await fetch(`/clothes/${id}`, {method: 'GET'})
        clothes = await clothes.json()
    
        return await clothes
    }

    async getAll(){
        var clothes = await fetch(`/clothes/all`, {method: 'GET'})
        clothes = await clothes.json()
    
        return await clothes
    }

    // CHECKS
    async clothesExist(name){
        var clothes = await this.getByName(name)
    
        if (clothes.lenght == 0)
            return false
        else
            return true
    }
}

    