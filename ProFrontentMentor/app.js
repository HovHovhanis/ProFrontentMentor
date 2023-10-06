const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');
const clous = document.querySelector('.btn-clous')
const menuList = document.querySelector('.menu-list');

menu.addEventListener('click', () => {
    clous.style.display = 'block'
    menuList.style.display = 'block'
})

clous.addEventListener('click', () => {

    menuList.style.display = 'none'
    clous.style.display = 'none'
})