import { configMenu } from "../styles/menu.js";

export class CoursesView{
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

        var option = document.createElement('option')
        option.value = 0
        option.textContent = `Todos`

        select.append(option)

        for (const style of styles) {
            var option = document.createElement('option')
            option.value = style.idstyle
            option.textContent = `${style.name}`

            select.append(option)
        }
    }

    loadCourses(courses){
        var article = document.querySelector('article')
        article.innerHTML = ''

        for (const course of courses) {
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

















