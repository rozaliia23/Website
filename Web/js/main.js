$(document).ready(function(){
    $('.filter-item').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.post-box').show('1000');  
        } else {
            $('.post-box').not('.' + value).hide('1000');
            $('.post-box').filter('.' + value).show('1000');
        }
    });
    $('.filter-item').click(function(){
        $(this).addClass('active-filter').siblings().removeClass('active-filter');
    });
});
let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

const showPopupBtn = document.querySelector('.login-btn');
const formPopup = document.querySelector('.form-popup');
const hidePopupBtn = document.querySelector('.form-popup .close-btn');
const loginSignupLink = document.querySelectorAll('.form-box .bottom-link a');


showPopupBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-popup');
});

hidePopupBtn.addEventListener('click', () => showPopupBtn.click());

loginSignupLink.forEach(link => {
    link.addEventListener('click', (e) =>{
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']('show-signup');
    });
});


