let body = document.body;
let menuIconEl =document.getElementById('menu-icon');
let topMenuEl = document.getElementById('nav')
let closeMenuEl = document.getElementById('close')

menuIconEl.addEventListener('click', () => {
    topMenuEl.style.top = '0'
})
closeMenuEl.addEventListener('click', () => {
    topMenuEl.style.top = '-100%'
});