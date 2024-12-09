import { configMenu } from "../styles/menu.js";

export class suggestionsView{
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

    showStyles(styles){
        var select = document.querySelector('#tbxStyle')

        for (const style of styles) {
            var option = document.createElement('option')
            option.value = style.idstyle
            option.textContent = `${style.name}`

            select.append(option)
        }
    }

    showColors(colors){
        var container = document.querySelector('.palettesContainer');
        container.innerHTML = ''

        for(var i = 0; (i < 4) && (colors.length > 1); i++){
            var palette = document.createElement('div');
            palette.classList.add('palette')

            for(var n = 0; (n < 5) && (colors.length > 1); n++){
                var index = Number.parseInt(Math.random() * colors.length)
                var color = colors[index]
                colors.splice(index, 1)

                var paletteItem = document.createElement('div')
                paletteItem.classList.add('paletteItem')
                paletteItem.style.backgroundColor = color.hex;

                palette.append(paletteItem);
            }

            container.append(palette);
        }
    }

    showClothes(clothes){
        var table = document.querySelector('table');
        table.innerHTML = ''


        if (clothes.length == 0) {
            var tr = document.createElement('tr');
            var td = document.createElement('td')
            td.textContent = 'Aún no hay datos'
            tr.appendChild(td)
            table.append(tr)
        }
        else{
            for (const row of clothes) {
                var tr = document.createElement('tr');
                tr.id = `row-${row['idgarment']}`

                var tdName = document.createElement('td')
                tdName.textContent = row['name']

                var tdMaterial = document.createElement('td')
                tdMaterial.textContent = row['material']

                tr.append(tdName, tdMaterial)
                table.append(tr)
            }
        }
    }

    loadCourses(courses){
        var article = document.querySelector('.coursesContainer')
        article.innerHTML = ''

        for (var i = 0; ((i < 3) && (courses.length > 0)); i++) {
            var index = Number.parseInt(Math.random() * courses.length)
            var course = courses[index]
            courses.splice(index, 1)

            var videoGroup = document.createElement('div')
            videoGroup.classList.add('videoGroup')
            videoGroup.setAttribute('data-id', course['idcourse'])

            var video = document.createElement('video')
            video.src = course['videocourse']

            var videoTitle = document.createElement('p')
            videoTitle.textContent = course['name']

            videoGroup.append(video, videoTitle)
            article.append(videoGroup)
        }
    }
}
















