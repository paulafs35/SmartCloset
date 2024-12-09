import { configMenu } from "../styles/menu.js";

export class IndividualCourseView{
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

    loadCourse(course){
        document.querySelector('h3').textContent = course['name'];
        document.querySelector('video').src = course['videocourse'];

        document.querySelector('.videoData p').textContent = course['description']
    }

    setToggleButton(isLearned){
        var btn = document.querySelector('.btn')
        
        if (isLearned){
            btn.textContent = 'Desmarcar como visto'
            if (btn.classList.contains('dark')){
                btn.classList.remove('dark');
                btn.classList.add('light')
            }
        }
        else{
            btn.textContent = 'Marcar como visto'
            if (btn.classList.contains('light')){
                btn.classList.remove('light');
                btn.classList.add('dark')
            }
        }
    }
}

















