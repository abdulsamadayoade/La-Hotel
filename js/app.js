// CLOSE THE NAV WHEN NAVLNKS ARE CLICKED (MOBILE ONLY)
let navList = document.querySelector('.nav-list');
let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function () {
        navList.style.left = '-100%';
    })
});

// TESTIMONIAL SLIDER
$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: false
});