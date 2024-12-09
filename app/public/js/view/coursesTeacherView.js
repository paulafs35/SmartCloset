import { configMenu } from "../styles/menu.js";

export class coursesTeacherView{
    setMenuItems(items, routes, disabled, id){
        var nav = document.querySelector('nav');

        for (const index in items) {
            var menuItem = document.createElement('a');
            
            menuItem.classList.add('menu-item');
            menuItem.textContent = items[index];

            if (index != disabled){
                menuItem.href = `/client/${routes[index]}/${id}`;
            }

            nav.appendChild(menuItem);
        }

        configMenu()
    }
    
    setUserZone(userData){
        var userLink = document.querySelector('.userZone')
        var userText = userLink.querySelector('p')
        var userImg = userLink.querySelector('img')

        userLink.href = `/client/update/${userData['iduser']}`
        userImg.src = userData['profilepicture']
        userText.textContent = userData['username']
    }

    showTableData(rows){
        var table = document.querySelector('table');

        for (const row of rows) {
            var tr = document.createElement('tr');
            tr.id = `row-${row['id']}`

            for (const element of row['data']) {
                var td = document.createElement('td')
                td.textContent = element
                tr.appendChild(td)
            }

            var edit = document.createElement('td')
            edit.classList.add('icon')
            edit.setAttribute('data-id', row['id'])
            edit.classList.add('end-columns')

            var editContent = document.createElement('i')
            editContent.classList.add('bi')
            editContent.classList.add('bi-pencil')

            edit.appendChild(editContent)
            tr.appendChild(edit)

            var remove = document.createElement('td')
            remove.classList.add('icon')
            remove.setAttribute('data-id', row['id'])
            remove.classList.add('end-columns')

            var removeContent = document.createElement('i')
            removeContent.classList.add('bi')
            removeContent.classList.add('bi-trash')

            remove.appendChild(removeContent)
            tr.appendChild(remove)
            table.appendChild(tr)
        }
    }
}