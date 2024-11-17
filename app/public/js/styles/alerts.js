export function createAlert(message){
    var container = document.createElement('div')
    container.classList.add('alert')
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