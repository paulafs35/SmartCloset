import { UserModel } from "./model/userModel.js";
import { showPopUp, hidePopUp } from "./utils/popupFormManager.js";

var userModel = new UserModel()

window.onload = function(){
    // Link elements
    var buttons = document.querySelectorAll('button');

    // Set event listener
    for (const btn of buttons) {
        btn.addEventListener("click", sendToLink);
    }
}



// Function that redirects to other links
async function sendToLink(e) {
    e.preventDefault()

    var value = e.target.value;
    if (value == 'login'){
        showPopUp();
    }
    else if(value == 'exit'){
        hidePopUp()
    }
    else if(value == '/login'){
        var form = document.querySelector('form')
        var data = {
            'username': form.tbxUsername.value,
            'password': form.tbxPassword.value,
        }

        await userModel.login(data);
    }
    else{
        window.location.href = value;
    }
}
