export class PaletteModel{
    
    //  CRUD METHODS
    async set(jsonData, id){
        // Send the data to the API using fetch()
        var result = await fetch(`/palette/${id}`, {
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
        var result = await fetch(`/palette/${id}`, {
            method: 'DELETE'
        })
    
        return await result.json()
    }

    // GETTERS
    async getByColor(idcolor){
        var data = await fetch(`/palette/color/${idcolor}`, {method: 'GET'})
    
        return await data.json()
    }

    
    async getByStyle(idstyle){
        var data = await fetch(`/palette/style/${idstyle}`, {method: 'GET'})
    
        return await data.json()
    }
}