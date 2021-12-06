/* Initialize Swiper */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides : true,
    initialSlide: 10,
    autoplay: {
        delay: 5000,
    },

    spaceBetween: 5,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,

    breakpoints: {
        416: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    }
});
