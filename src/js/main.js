

let headerBtn = $('.header__button');
let overlay = $('.overlay');
let popupClose = $ ('.popup__close');
let popupFormBtn = $('.popup__form-btn');


headerBtn.on('click', function () {
overlay.fadeIn(1000)
});


popupClose.on('click', function () {
overlay.fadeOut('slow')
});


popupFormBtn.on('click', function (e) {
    e.preventDefault();
overlay.fadeOut('slow')
});


overlay.on('click', function (e) {
    if (e.targe.cacheName === overlay) {
        overlay.fadeOut('slow')
    }
});







let owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    margin:30,
    dotsContainer: '#dots'
});

$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});

$('.owl-prev').click(function() {

    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);

});

let burger = $('.burger');
let navigation = $ ('.header__bottom');

burger.on('click', function () {
burger.toggleClass('burger_active');
navigation.toggleClass('header__bottom_active');
});


let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});




let map;


DG.then(function () {
    map = DG.map('map', {
        center: [42.848698, 74.631846],
        zoom: 18

    });
    let myIcon = DG.icon({
        iconUrl: 'https://avatars.mds.yandex.net/get-altay/2816622/2a000001753187b24ef61c494d24670ba21c/XXL',
        iconSize: [40, 25],

    });
    DG.marker([42.848698, 74.631846],{icon: myIcon}).addTo(map).bindPopup('Вы кликнули по мне!').bindLabel('million_melochi_bishkek', { static: false });

});