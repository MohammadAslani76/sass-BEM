const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menu = document.querySelector("#menu");
openMenu.addEventListener("click" , () => {
    menu.style.display= 'block';
    menu.classList.add('show');
    menu.classList.remove('hide');
})
closeMenu.addEventListener("click" , () => {
    menu.classList.add('hide');
    menu.classList.remove('show');
    menu.style.display= "none";
})