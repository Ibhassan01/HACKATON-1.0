const fullView = document.querySelector('.container');
const closeButton = document.querySelector('.close')
const modal = document.querySelector('.modal');
const mobileForm = document.getElementById('m-form');
const desktopForm = document.getElementById('d-form');

mobileForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fullView.classList.add('active')
    modal.classList.remove('active');
});
desktopForm.addEventListener('submit', function (event) {
    event.preventDefault();

    fullView.classList.add('active')
    modal.classList.remove('active');
});

closeButton.addEventListener('click', ()=>{
    modal.classList.add('active');
    fullView.classList.remove('active');
})