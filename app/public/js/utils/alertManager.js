export function createErrorAlert(message){
    var container = document.createElement('div')
    container.classList.add('alert')
    container.classList.add('error')
    container.classList.add('hidden');
    

    var button = document.createElement('span')
    button.textContent = 'x'
    button.classList.add('closebtn')
    button.addEventListener('click', function (e){
        e.target.parentElement.remove()
    })

    var content = document.createElement('p')
    content.textContent = message

    container.append(button, content)

    document.body.append(container)

    setTimeout(() => {
        container.classList.remove('hidden');
    
        setTimeout(() => {
            container.classList.add('hidden');
        
            setTimeout(() => {
                container.remove();
            }, 500); 
        }, 2000);
    }, 5);
}

export function createInfoAlert(message){
    var container = document.createElement('div')
    container.classList.add('alert')
    container.classList.add('info')
    container.classList.add('hidden');
    

    var button = document.createElement('span')
    button.textContent = 'x'
    button.classList.add('closebtn')
    button.addEventListener('click', function (e){
        e.target.parentElement.remove()
    })

    var content = document.createElement('p')
    content.textContent = message

    container.append(button, content)

    document.body.append(container)

    setTimeout(() => {
        container.classList.remove('hidden');
    
        setTimeout(() => {
            container.classList.add('hidden');
        
            setTimeout(() => {
                container.remove();
            }, 500); 
        }, 2000);
    }, 5);
}

export function createDeleteAlert(id, type, name, model){
    var container = document.createElement('div')
    container.classList.add('alert')
    container.classList.add('info')
    container.classList.add('hidden');
    

    var closebtn = document.createElement('span')
    closebtn.textContent = 'x'
    closebtn.classList.add('closebtn')
    closebtn.addEventListener('click', function (e){
        e.target.parentElement.remove()
    })

    var content = document.createElement('p')

    if (type == 0)
    {
        content.textContent = `¿Desea borrar al usuario ${name}?`
    }
    else if (type == 1)
    {
        content.textContent = `¿Desea borrar el curso ${name}?`
    }
    else if (type == 2)
    {
        content.textContent = `¿Desea borrar el estilo ${name}?`
    }
    else if (type == 3)
    {
        content.textContent = `¿Desea borrar el color ${name}?`
    }
    else if (type == 4)
    {
        content.textContent = `¿Desea borrar la prenda ${name}?`
    }

    var btnContainer = document.createElement('div')
    btnContainer.classList.add('btnContainer')

    var btnCancel = document.createElement('button')
    btnCancel.classList.add('btn')
    btnCancel.classList.add('light')
    btnCancel.textContent = 'Cancelar'
    btnCancel.addEventListener('click', function (e){
        e.target.parentElement.parentElement.remove()
    })


    var btnOk = document.createElement('button')
    btnOk.classList.add('btn')
    btnOk.classList.add('dark')
    btnOk.textContent = 'Borrar'
    btnOk.addEventListener('click', async function (e){
        var result = await model.delete(id);
        e.target.parentElement.parentElement.remove();
        
        document.querySelector(`#row-${id}`).remove();
        createInfoAlert('Se ha borrado correctamente');
    })


    btnContainer.append(btnCancel, btnOk)
    container.append(closebtn, content, btnContainer)
    document.body.append(container)

    setTimeout(() => {
        container.classList.remove('hidden');
    }, 5);
}