function initSwipers() {

    new Swiper(".rating-slider", {
        loop: true,
        slidesPerGroup: 1,
        slidesPerView: 1.3,
        // centeredSlides: true,
        spaceBetween: 50,
        navigation: {
            nextEl: ".rating-button-next",
            prevEl: ".rating-button-prev",
        },
        brakepoint: {
            1280: {
                spaceBetween: 20,
                centeredSlides: true,
            },
        }
    });
    new Swiper(".patients-slider", {
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        slidesPerView: 2,
        loop: true,

        spaceBetween: 14,
        slidesPerGroup: 1,
        centeredSlides: true,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {


            480: {
                slidesPerView: 1.5,
            },
        }
    });

}
document.addEventListener("DOMContentLoaded", function() {
    initSwipers();
});

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        680: {
            slidesPerView: 2,
        },
        960: {
            slidesPerView: 3,
        },


    }
});