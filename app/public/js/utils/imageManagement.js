export async function getImg(file){
    const response = await fetch(file);
    const blob = await response.blob();

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result; // Base64 without metadata
            resolve(base64String);
        };

        reader.onerror = (error) => {
            reject(error);
        };

        reader.readAsDataURL(blob); // Convert blob to base64
    });
}

export function loadImg (e) {
    var profileImg = document.querySelector('.imageContainer img')
    profileImg.src = URL.createObjectURL(e.target.files[0]);
};

export function loadVideo (e) {
    var profileImg = document.querySelector('video')
    profileImg.src = URL.createObjectURL(e.target.files[0]);
};