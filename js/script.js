$('.testimonials-inner__slider').slick({
    infinite: false,
    slidesToShow: 2,
    appendArrows: $('.slider-btn'),
    prevArrow: "<button type='button' class='slick-prev'></button>",
    nextArrow: "<button type='button' class='slick-next'></button>",
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                infinite: true,
                arrows: false
            }
        }
    ]
});

document.querySelector('.header-inner__btn').addEventListener('click', function() {
    this.classList.toggle('active')
});