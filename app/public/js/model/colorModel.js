export class ColorModel{

    // CRUD METHODS
    async add(jsonData){
        var colors = await fetch('/color/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        colors = await colors.json()
    
        return colors
    }

    async update(jsonData, id){
        var colors = await fetch(`/color/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        colors = await colors.json()
    
        return colors
    }

    async delete(id){
        var colors = await fetch(`/color/${id}`, {
            method: 'DELETE'
        })

        colors = await colors.json()
    
        return colors
    }

    // GETTERS
    async getByHex(color){
        var colors = await fetch(`/color/name/${color}`, {method: 'GET'})
        colors = await colors.json()
    
        return colors
    }

    async getById(id){
        var colors = await fetch(`/color/${id}`, {method: 'GET'})
        colors = await colors.json()
    
        return colors
    }

    async getAll(){
        var colors = await fetch(`/color/all`, {method: 'GET'})
        colors = await colors.json()
    
        return colors
    }

    // CHECKS
    async colorExists(color){
        var colors = await this.getByName(color)
    
        if (colors.lenght == 0)
            return false
        else
            return true
    }
}
    