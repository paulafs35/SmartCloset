import { hexToRgb } from './colorManager.js'
import { getImg, loadImg, loadVideo } from './imageManagement.js'


export function createCoursesForm(styles, data) {
    var popupContainer = document.querySelector('.popupContainer');
    var popup = document.createElement('div');
    popup.classList.add('popup');
    popup.classList.add('medium');
    popup.classList.add('light');

    var title = document.createElement('legend');

    var form = document.createElement('form');

    var tbxName = document.createElement('input');
    tbxName.type = 'text';
    tbxName.name = 'tbxName';
    tbxName.id = 'tbxName';
    tbxName.required = true;

    var labelName = document.createElement('label');
    labelName.setAttribute('for', 'tbxName');
    labelName.textContent = 'Nombre';

    var tbxDescription = document.createElement('textarea');
    tbxDescription.name = 'tbxDescription';
    tbxDescription.id = 'tbxDescription';
    tbxDescription.required = true;

    var labelDescription = document.createElement('label');
    labelDescription.setAttribute('for', 'tbxDescription');
    labelDescription.textContent = 'Descripción';

    var tbxStyle = document.createElement('select');
    tbxStyle.name = 'tbxStyle';
    tbxStyle.id = 'tbxStyle';

    for (const style of styles) {
        var option = document.createElement('option');
        option.textContent = style.name;
        option.value = style.idstyle;

        tbxStyle.append(option);
    }

    var labelStyle = document.createElement('label');
    labelStyle.setAttribute('for', 'tbxStyle');
    labelStyle.textContent = 'Estilo';

    var videoLabel = document.createElement('label');
    videoLabel.setAttribute('for', 'video');
    videoLabel.textContent = 'Subir vídeo';

    var videoLabelContainer = document.createElement('label');
    videoLabelContainer.setAttribute('for', 'video');
    videoLabelContainer.classList.add('imageContainer');

    var video = document.createElement('video');
    video.setAttribute('alt', 'Vídeo del curso');

    videoLabelContainer.append(video)

    var tbxVideo = document.createElement('input');
    tbxVideo.type = 'file';
    tbxVideo.classList.add('tbx')
    tbxVideo.required = true;
    tbxVideo.id = 'video';
    tbxVideo.name = 'video';

    var btn = document.createElement('button')
    btn.classList.add('btn')
    btn.classList.add('dark')

    if (data == null) {
        title.textContent = 'Crear curso'
        btn.textContent = 'Crear'
    }
    else {
        title.textContent = 'Actualizar curso'
        tbxName.value = data.name
        tbxDescription.value = data.description
        tbxStyle.value = data.idstyle
        video.src = data.videocourse
        btn.textContent = 'Actualizar'
    }

    tbxVideo.addEventListener('change', loadVideo)
    
    form.append(labelName, tbxName, labelDescription, tbxDescription, labelStyle, tbxStyle, videoLabel, videoLabelContainer, tbxVideo)
    popup.append(title, form, btn)
    popupContainer.append(popup)
}


export function createStylesForm(data) {
    var popupContainer = document.querySelector('.popupContainer');
    var popup = document.createElement('div');
    popup.classList.add('popup')
    popup.classList.add('medium')
    popup.classList.add('light')

    var title = document.createElement('legend');

    var form = document.createElement('form')

    var labelName = document.createElement('label')
    labelName.setAttribute('for', 'tbxName')
    labelName.textContent = 'Nombre'

    var tbxName = document.createElement('input')
    tbxName.type = 'text';
    tbxName.name = 'tbxName'
    tbxName.id = 'tbxName'
    tbxName.required = true

    var labelDescripcion = document.createElement('label')
    labelDescripcion.setAttribute('for', 'tbxDescripcion')
    labelDescripcion.textContent = 'Description'

    var tbxDescripcion = document.createElement('textarea')
    tbxDescripcion.name = 'tbxDescripcion'
    tbxDescripcion.id = 'tbxDescripcion'
    tbxDescripcion.required = true

    var labelImage = document.createElement('label')
    labelImage.setAttribute('for', 'tbxImage')
    labelImage.textContent = 'Imagen de referencia'

    var imageContainer = document.createElement('label')
    imageContainer.setAttribute('for', 'tbxImage')
    imageContainer.classList.add('imageContainer')

    var image = document.createElement('img')
    image.classList.add('not-rounded')
    image.alt = 'Imagen de referencia de la estética'

    var tbxImage = document.createElement('input')
    tbxImage.classList.add('tbx')
    tbxImage.type = 'file';
    tbxImage.id = 'tbxImage'
    tbxImage.name = 'tbxImage'

    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('dark');

    if (data == null) {
        title.textContent = 'Nueva estética';
        btn.textContent = 'Crear';
        image.src = '/resources/images/inspo/default.jpg';
    }
    else {
        title.textContent = 'Actualizar estética';
        tbxName.value = data.name;
        tbxDescripcion.value = data.description;
        btn.textContent = 'Actualizar';
        image.src = data.inspoImg;
    }

    tbxImage.addEventListener('change', loadImg)

    imageContainer.append(image)
    form.append(labelName, tbxName, labelDescripcion, tbxDescripcion, labelImage, imageContainer, tbxImage)
    popup.append(title, form, btn)
    popupContainer.append(popup)
}


export function createColorForm(styles, data) {
    var popupContainer = document.querySelector('.popupContainer');
    var popup = document.createElement('div');
    popup.classList.add('popup')
    popup.classList.add('medium')
    popup.classList.add('light')

    var title = document.createElement('legend');

    var form = document.createElement('form')

    var labelName = document.createElement('label')
    labelName.setAttribute('for', 'tbxName')
    labelName.textContent = 'Nombre'

    var tbxName = document.createElement('input')
    tbxName.type = 'text'
    tbxName.name = 'tbxName'
    tbxName.id = 'tbxName'
    tbxName.required = true

    var labelColor = document.createElement('label')
    labelColor.setAttribute('for', 'tbxColor')
    labelColor.textContent = 'Tono'

    var tbxColor = document.createElement('input')
    tbxColor.type = 'color'
    tbxColor.name = 'tbxColor'
    tbxColor.id = 'tbxColor'
    tbxColor.required = true

    var labelStyles = document.createElement('label')
    labelStyles.setAttribute('for', 'tbxStyles')
    labelStyles.textContent = 'Estilos'

    var stylesContainer = document.createElement('div')
    stylesContainer.classList.add('stylesContainer')



    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('dark');

    if (data == null) {
        title.textContent = 'Nuevo color'
        btn.textContent = 'Crear'

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
    else {
        title.textContent = 'Actualizar color'
        tbxName.value = data.name
        tbxColor.value = data.hex
        btn.textContent = 'Actualizar'

        for (const style of styles) {
            var input = document.createElement('input');
            input.value = style.idstyle
            input.type = 'checkbox'
            input.classList.add('cbx')
            input.id = `style${style.idstyle}`

            if (data.styles.includes(Number.parseInt(input.value))) {
                input.checked = true;
            }

            var label = document.createElement('label');
            label.textContent = style.name
            label.setAttribute('for', `style${style.idstyle}`)

            stylesContainer.append(input, label)
        }
    }

    form.append(labelName, tbxName, labelColor, tbxColor, labelStyles, stylesContainer)
    popup.append(title, form, btn)
    popupContainer.append(popup)
}


export function createClothesForm(styles, data) {
    var popupContainer = document.querySelector('.popupContainer');
    var popup = document.createElement('div');
    popup.classList.add('popup')
    popup.classList.add('medium')
    popup.classList.add('light')

    var title = document.createElement('legend');

    var form = document.createElement('form')

    var labelName = document.createElement('label')
    labelName.setAttribute('for', 'tbxName')
    labelName.textContent = 'Nombre'

    var tbxName = document.createElement('input')
    tbxName.type = 'text'
    tbxName.name = 'tbxName'
    tbxName.id = 'tbxName'
    tbxName.required = true

    var labelMaterial = document.createElement('label')
    labelMaterial.setAttribute('for', 'tbxMaterial')
    labelMaterial.textContent = 'Material'

    var tbxMaterial = document.createElement('input')
    tbxMaterial.type = 'text'
    tbxMaterial.name = 'tbxMaterial'
    tbxMaterial.id = 'tbxMaterial'
    tbxMaterial.required = true

    var labelStyles = document.createElement('label')
    labelStyles.setAttribute('for', 'tbxStyles')
    labelStyles.textContent = 'Estilos'

    var stylesContainer = document.createElement('div')
    stylesContainer.classList.add('stylesContainer')



    var btn = document.createElement('button');
    btn.classList.add('btn');
    btn.classList.add('dark');

    if (data == null) {
        title.textContent = 'Nueva prenda'
        btn.textContent = 'Crear'

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
    else {
        title.textContent = 'Actualizar prenda'
        tbxName.value = data.name
        tbxMaterial.value = data.material
        btn.textContent = 'Actualizar'

        for (const style of styles) {
            var input = document.createElement('input');
            input.value = style.idstyle
            input.type = 'checkbox'
            input.classList.add('cbx')
            input.id = `style${style.idstyle}`

            if (data.styles.includes(Number.parseInt(input.value))) {
                input.checked = true;
            }

            var label = document.createElement('label');
            label.textContent = style.name
            label.setAttribute('for', `style${style.idstyle}`)

            stylesContainer.append(input, label)
        }
    }

    form.append(labelName, tbxName, labelMaterial, tbxMaterial, labelStyles, stylesContainer)
    popup.append(title, form, btn)
    popupContainer.append(popup)
}


export async function extractCourseData(){
    // Select the form element
    var form = document.querySelector('form');
        
    var video = await getImg(document.querySelector('.imageContainer video').src)

    // Convert FormData to JSON format
    var jsonData = {
        'name': form.tbxName.value, 
        'description': form.tbxDescription.value, 
        'video': video,
        'idstyle': form.tbxStyle.value
    };

    return jsonData
}


export async function extractStyleData(){
    // Select the form element
    var form = document.querySelector('form');
    
    var image = await getImg(document.querySelector('.imageContainer img').src)

    // Convert FormData to JSON format
    var jsonData = {
        'name': form.tbxName.value, 
        'description': form.tbxDescripcion.value, 
        'inspoImg': image
    };

    return jsonData
}


export function extractColorData(){
    // Select the form element
    var form = document.querySelector('form');
    var rgb = hexToRgb(form.tbxColor.value)

    // Convert FormData to JSON format
    var jsonData = {
        'name': form.tbxName.value, 
        'hex': form.tbxColor.value, 
        'red': rgb[0], 
        'green': rgb[1], 
        'blue': rgb[2]
    };

    var styles = {
        'styles':[]
    }

    for (const option of document.querySelectorAll('.stylesContainer .cbx:checked')) {
        styles['styles'].push(option.value);
    }

    return [jsonData, styles]
}


export function extractClothesData(){
    // Select the form element
    var form = document.querySelector('form');

    // Convert FormData to JSON format
    var jsonData = {
        'name': form.tbxName.value, 
        'material': form.tbxMaterial.value
    };

    var styles = {
        'styles':[]
    }

    for (const option of document.querySelectorAll('.stylesContainer .cbx:checked')) {
        styles['styles'].push(option.value);
    }

    return [jsonData, styles]
}


export function showPopUp() {
    var popupContainer = document.querySelector('.popupContainer')
    popupContainer.style.opacity = 1
    popupContainer.style.zIndex = 1
}


export function hidePopUp() {
    var popupContainer = document.querySelector('.popupContainer')
    popupContainer.style.opacity = 0
    popupContainer.style.zIndex = -1
}


export function removePopUp() {
    document.querySelector('.popup').remove();
}