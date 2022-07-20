const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const menu = document.querySelector("#menu");
const menuBackground = document.querySelector('.menu__background');
const body = document.querySelector('body');
const h2 = document.querySelector('#h2');
openMenu.addEventListener("click" , (event) => {
    event.stopPropagation();
    menu.classList.toggle('show');
    menuBackground.style.display = 'block';
})
closeMenu.addEventListener("click" , () => {
    menu.classList.toggle('show');
    menuBackground.style.display = 'none';
})
menu.addEventListener('click', (event) => {
    event.stopPropagation();
})
if (window.innerWidth < 768){
    h2.innerHTML = "Our work process make your dream true";
}
body.addEventListener('click' , () => {
    if (menu.classList.contains('show')){
        menu.classList.remove('show');
        menuBackground.style.display = 'none';
    }
})
//Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },navigation: {
        nextEl: '.btnComments__next',
        prevEl: '.btnComments__prev',
    }
});
