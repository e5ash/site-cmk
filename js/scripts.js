// Popup
var Popup = {
    block: $('.popup'),
    window: $('.popup__window'),
    container: $('.popup__container'),
    title: $('.popup__title'),
    close: $('.popup__close'),
    bg: $('.popup__bg'),
    speed: 500,
    funShow: function () {
        var scrollTop = $(window).scrollTop(),
            height = $(window).height();
        this.block.css('padding-top', scrollTop + 20).fadeIn(this.speed).height(height - scrollTop - 20);
    },
    funHide: function () {
        this.block.fadeOut(this.speed);
    }
}

$('.popupShow').click(function() {
    Popup.funShow();
});

Popup.close.click(function() {
    Popup.funHide();
});

Popup.bg.click(function() {
    Popup.funHide();
});

var catalogMenu = {
    block: $('.nav__catalog-hidden'),
    button: $('.nav__catalog-button'),
    icon: $('.nav__catalog-icon'),
};

catalogMenu.button.click(function () {
    catalogMenu.block.toggleClass('nav__catalog-hidden_open');
    catalogMenu.icon.toggleClass('nav__catalog-icon_rotate');
});

$('.input_phone').mask("+7 (999) 999-99-99");

$('.slider__main').slick({
    arrows: false,
    dots: true,
    asNavFor: '.slider__sub'
});
$('.slider__sub').slick({
    vertical: true,
    arrows: false,
    slidesToShow: 4,
    asNavFor: '.slider__main',
    centerMode: true,
    focusOnSelect: true
});
$('.index-goods__slider').slick({
    slidesToShow: 3,
    prevArrow: '<button type="button" class="slick-prev slick-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.8 32.36"><defs><style>.cls-1{fill:#c7eafb;}</style></defs><title>arrow-left</title><g id="Слой_2" data-name="Слой 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M20.42,26.84,9.76,16.18,20.42,5.52a1.26,1.26,0,0,0,0-1.81L17.08.38a1.26,1.26,0,0,0-1.81,0L.38,15.28a1.26,1.26,0,0,0,0,1.81L15.28,32a1.26,1.26,0,0,0,1.81,0l3.33-3.33a1.26,1.26,0,0,0,0-1.81Z"/></g></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next slick-button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20.8 32.36"><defs><style>.cls-1{fill:#c7eafb;}</style></defs><title>arrow-right</title><g id="Слой_2" data-name="Слой 2"><g id="Layer_1" data-name="Layer 1"><path class="cls-1" d="M.38,26.84,11,16.18.38,5.52a1.26,1.26,0,0,1,0-1.81L3.71.38a1.26,1.26,0,0,1,1.81,0l14.9,14.9a1.26,1.26,0,0,1,0,1.81L5.52,32a1.26,1.26,0,0,1-1.81,0L.38,28.65a1.26,1.26,0,0,1,0-1.81Z"/></g></g></svg></button>',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        }

    }]
});