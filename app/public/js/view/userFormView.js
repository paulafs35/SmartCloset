import { getImg } from "../utils/imageManagement.js"

class UserFormView{
    checkInputs(){
        var form = document.querySelector('form')
        var valid = true

        if(!form.checkValidity()){
            valid = false
            throw('Debe rellenar todos los campos correctamente')
        }
        else if(form.tbxPasswordConfirmation.value != form.tbxPassword.value){
            valid = false
            throw('Las contraseñas no coinciden')
        }

        return valid
    }

    async extractFormData(isAdmin){
        // Select the form element
        var form = document.querySelector('form');
    
        var image = await getImg(document.querySelector('.imageContainer img').src)

        // Convert FormData to JSON format
        var jsonData = {
            'name': form.tbxName.value, 
            'surname': form.tbxSurname.value, 
            'birthDate': form.tbxBithDate.value, 
            'username': form.tbxUser.value, 
            'email': form.tbxEmail.value, 
            'password': form.tbxPassword.value, 
            'profilePicture': image,
            'rolId': isAdmin ? form.tbxRole.value : 3
        };

        var styles = {
            'styles':[]
        }

        for (const option of document.querySelectorAll('.stylesContainer .cbx:checked')) {
            styles['styles'].push(option.value);
        }

        return [jsonData, styles]
    }

    showStyle(styleData){
        var styleDataContainer = document.querySelector('.card')

        var titleContainer = styleDataContainer.querySelector('h3')
        titleContainer.textContent = styleData.name

        var textContainer = styleDataContainer.querySelector('p')
        textContainer.textContent = styleData.description
        
        var imgContainer = styleDataContainer.querySelector('img')
        imgContainer.src = styleData.inspoImg
    }

    showStyles(styles){
        var stylesContainer = document.querySelector('.stylesContainer')

        for (const style of styles) {
            var input = document.createElement('input');
            
            input.value = style.idstyle
            input.type = 'checkbox'
            input.classList.add('cbx')
            input.id = `style${style.idstyle}`
            
            var label = document.createElement('label');
            label.textContent = style.name
            label.setAttribute('for', `style${style.idstyle}`)

            stylesContainer.append(input, label)
        }
    }

    showRoles(roles){
        var roleSelection = document.querySelector('#tbxRole')

        for (const role of roles) {
            var option = document.createElement('option')
            option.value = role['idrole']
            option.textContent = role['description']
            
            roleSelection.appendChild(option)
        }
    }

    hideRoles(){
        var roleSelection = document.querySelector('#tbxRole')
        var roleLabel = document.querySelector('label[for="tbxRole"')

        roleSelection.remove()
        roleLabel.remove()
    }

    loadDataToEdit(data, isAdmin){
        var form = document.querySelector('form');
    
        var image = document.querySelector('.imageContainer img')

        form.tbxName.value = data.name;
        form.tbxSurname.value = data.surname;
        form.tbxBithDate.value = new Date(data.birthdate).toISOString().split("T")[0];
        form.tbxUser.value = data.username;
        form.tbxEmail.value = data.email;
        form.tbxPassword.value = data.password;
        form.tbxPasswordConfirmation.value = data.password;
        image.src = data.profilepicture;

        for (const option of document.querySelectorAll('.stylesContainer .cbx')) {
            if(data.styles.includes(Number.parseInt(option.value)))
            {
                option.checked = true;
            }
        }
            
        if (isAdmin){
            form.tbxRole.value = data.idrole;
        }
    }
}

export { UserFormView }