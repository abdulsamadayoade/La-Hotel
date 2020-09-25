// TESTIMONIAL SLIDER
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
});

// MOBILE NAVIGATION

const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const links = document.querySelectorAll('.nav-list li');

hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
    hamburger.classList.toggle("open");
});