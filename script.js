let searchbtn = document.querySelector('#search-btn'); 
let searchbar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});


searchbtn.addEventListener('click', () =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

formbtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formclose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});

