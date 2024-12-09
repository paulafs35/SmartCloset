export class InterestModel{
    
    //  CRUD METHODS
    async set(jsonData, id){
        // Send the data to the API using fetch()
        var result = await fetch(`/interest/${id}`, {
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
        var result = await fetch(`/interest/${id}`, {
            method: 'DELETE'
        })
    
        return await result.json()
    }

    // GETTERS
    async getByUser(userId){
        var data = await fetch(`/interest/${userId}`, {method: 'GET'})
    
        return await data.json()
    }
}