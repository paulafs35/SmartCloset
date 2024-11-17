export class StyleModel{

    // CRUD METHODS
    async add(jsonData){
        var styles = await fetch('./style/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        styles = await styles.json()
    
        return styles
    }

    async update(jsonData, id){
        var styles = await fetch(`./style/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData), 
        })

        styles = await styles.json()
    
        return styles
    }

    async delete(id){
        var styles = await fetch(`./style/${id}`, {
            method: 'DELETE'
        })

        styles = await styles.json()
    
        return styles
    }

    // GETTERS
    async getByName(style){
        var styles = await fetch(`/style/name/${style}`, {method: 'GET'})
        styles = await styles.json()
    
        return styles
    }

    async getById(id){
        var styles = await fetch(`/style/${id}`, {method: 'GET'})
        styles = await styles.json()
    
        return styles
    }

    async getAll(){
        var styles = await fetch(`/style/all`, {method: 'GET'})
        styles = await styles.json()
    
        return styles
    }

    // CHECKS
    async styleExists(style){
        var styles = await this.getByName(style)
    
        if (styles.lenght == 0)
            return false
        else
            return true
    }
}

    