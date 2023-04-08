let searchbtn = document.querySelector('#search-btn'); 
let searchbar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let imgBtn = document.querySelectorAll('.img-btn');
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

imgBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('src');  
        document.querySelector('#image-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider",{
    spaceBetween:20,
    loop:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,

    },
   breakpoints: {
        640:{
            slidesPerView:1,

        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },
});

