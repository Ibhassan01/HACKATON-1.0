let body = document.body;
let menuIconEl =document.getElementById('menu-icon');
let topMenuEl = document.getElementById('nav')

menuIconEl.addEventListener('click', () => {
    topMenuEl.style.top = '0'
})