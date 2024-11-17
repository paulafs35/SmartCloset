import { configMenu } from "../styles/menu.js";

export class adminTableView{
    setMenuItems(items, routes, disabled){
        var nav = document.querySelector('nav');

        for (const index in items) {
            var menuItem = document.createElement('a');
            
            menuItem.classList.add('menu-item');
            menuItem.textContent = items[index];

            if (index != disabled){
                menuItem.href = `/admin/${routes[index]}`;
            }

            nav.appendChild(menuItem);
        }

        configMenu()
    }

    showTableData(rows, isCourses){
        var table = document.querySelector('table');

        for (const row of rows) {
            var tr = document.createElement('tr');

            for (const element of row['data']) {
                var td = document.createElement('td')
                td.textContent = element
                tr.appendChild(td)
            }

            if (!isCourses){
                var edit = document.createElement('td')
                edit.setAttribute('data-id', row['id'])
                edit.classList.add('end-columns')

                var editContent = document.createElement('i')
                editContent.classList.add('bi')
                editContent.classList.add('bi-pencil')

                edit.appendChild(editContent)
                tr.appendChild(edit)
            }
            var remove = document.createElement('td')
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