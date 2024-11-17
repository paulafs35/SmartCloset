window.onload = function(){
    // Link elements
    buttons = document.querySelectorAll('button');

    // Set event listener

    for (const btn of buttons) {
        btn.addEventListener("click", sendToLink);
    }
}



// Function that redirects to other links
function sendToLink(e) {
    login = e.target.value;
    if (login == 'login'){
        showLogin();
    }
    else if(login == 'exit'){
        hideLogin()
    }
    else{
        window.location.href = e.target.value;
    }
}


function showLogin(){
    login_element = document.querySelector('.loginContainer')
    login_element.style.opacity = 1
    login_element.style.zIndex = 1
}


function hideLogin(){
    login_element = document.querySelector('.loginContainer')
    login_element.style.opacity = 0
    login_element.style.zIndex = -1
}
