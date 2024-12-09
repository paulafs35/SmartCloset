import { configMenu } from "../styles/menu.js";

export class ClosetView{
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

    loadStyles(styles){
        var select = document.querySelector('#tbxAesthetic')

        for (const style of styles) {
            var option = document.createElement('option')
            option.value = style.idstyle
            option.textContent = `${style.name}`

            select.append(option)
        }
    }
    
    loadClothes(clothes){
        var select = document.querySelector('#tbxClothes')

        for (const garment of clothes) {
            var option = document.createElement('option')
            option.value = garment.idgarment
            option.textContent = `${garment.name} (${garment.material})`

            select.append(option)
        }
    }

    loadColors(colors){
        var select = document.querySelector('#tbxColor')

        for (const color of colors) {
            var option = document.createElement('option')
            option.value = color.idcolor
            option.textContent = `${color.name}`

            const brightness = Math.round(((parseInt(color.red) * 299) +
                      (parseInt(color.green) * 587) +
                      (parseInt(color.blue) * 114)) / 1000);

            option.style.color = (brightness > 125) ? 'black' : 'white';

            option.style.backgroundColor = `${color.hex}`

            select.append(option)
        }
    }

    showTableData(rows){
        var table = document.querySelector('table');
        table.innerHTML = ''


        if (rows.length == 0) {
            var tr = document.createElement('tr');
            var td = document.createElement('td')
            td.textContent = 'Aún no hay datos'
            tr.appendChild(td)
            table.append(tr)
        }
        else{
            for (const row of rows) {
                var tr = document.createElement('tr');
                tr.id = `row-${row['idcloset']}`

                var tdName = document.createElement('td')
                tdName.textContent = row['name']

                var tdMaterial = document.createElement('td')
                tdMaterial.textContent = row['material']

                var tdColor = document.createElement('td')
                var divColor = document.createElement('div')
                divColor.classList.add('color')
                divColor.style.backgroundColor = row['hex']


                var remove = document.createElement('td')
                remove.setAttribute('data-id', row['idcloset'])
                remove.classList.add('end-columns')
                remove.classList.add('icon')
    
                var removeContent = document.createElement('i')
                removeContent.classList.add('bi')
                removeContent.classList.add('bi-trash')
    
                remove.append(removeContent)
                tdColor.append(divColor)
                tr.append(tdName, tdMaterial, tdColor, remove)
                table.append(tr)
            }
        }
    }

    extractData(){
        var form = document.querySelector('form')

        var jsonData = {
            'idcolor': form.tbxColor.value,
            'idgarment': form.tbxClothes.value
        }

        return jsonData;
    }
}