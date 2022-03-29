let icon = document.querySelector('.main-menu__burger')
let menu = document.querySelector('.main-menu__burger-open')
function openHideMenu (){
    menu.classList.toggle('closeMenu');
}
icon.addEventListener('click', openHideMenu)