document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('.header__burger').addEventListener('click', function() {
        this.classList.toggle('active');
        document.querySelector('.header__menu').classList.toggle('active');
        document.querySelector('body').classList.toggle('lock');
    });
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // effect:'cube',
    freeMode:true,
    slidesPerView: 1,
    centeredSlides:true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            centeredSlides:true
        }
    },
});
