export class OutfitModel{
    
    //  CRUD METHODS
    async set(jsonData, id){
        // Send the data to the API using fetch()
        var result = await fetch(`/outfit/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })
    
        return await result.json()
    }

    async delete(id){
        // Send the data to the API using fetch()
        var result = await fetch(`/outfit/${id}`, {
            method: 'DELETE'
        })
    
        return await result.json()
    }

    // GETTERS
    async getByGarment(idgartment){
        var data = await fetch(`/outfit/garment/${idgartment}`, {method: 'GET'})
    
        return await data.json()
    }

    
    async getByStyle(idstyle){
        var data = await fetch(`/outfit/style/${idstyle}`, {method: 'GET'})
    
        return await data.json()
    }
}