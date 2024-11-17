export function configMenu(){
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('nav');

    const menuItems = document.querySelectorAll('.menu-item');
    
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        menu.classList.toggle('active');

        if(menu.classList.contains('active'))
        {
            menu.focus();
        }
    });

}