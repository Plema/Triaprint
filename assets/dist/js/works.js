$(document).ready(function () {
    $('[data-fancybox="gallery"]').fancybox({});
    $('#list-1 .slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        touchMove: false,
        swipeToSlide: false,
        swipe: false,
        asNavFor: '#list-1 .slider-navigation',
    });

    $('#list-1 .slider-navigation').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#list-1 .slider-top',
        arrows: true,
        focusOnSelect: true,
        customPaging: '8px',
        prevArrow: $('#list-1 #prev-1'),
        nextArrow: $('#list-1 #next-1'),
        direction: 'vertical',
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    direction: 'vertical',
                }
            },
        ]
    });

    $('#list-2 .slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        touchMove: false,
        swipeToSlide: false,
        swipe: false,
        asNavFor: '#list-2 .slider-navigation',
    });

    $('#list-2 .slider-navigation').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#list-2 .slider-top',
        arrows: true,
        focusOnSelect: true,
        customPaging: '8px',
        prevArrow: $('#list-2 #prev-2'),
        nextArrow: $('#list-2 #next-2'),
        direction: 'vertical',
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    direction: 'vertical',
                }
            },
        ]
    });

    $('#list-3 .slider-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        touchMove: false,
        swipeToSlide: false,
        swipe: false,
        asNavFor: '#list-3 .slider-navigation',
    });

    $('#list-3 .slider-navigation').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#list-3 .slider-top',
        arrows: true,
        focusOnSelect: true,
        customPaging: '8px',
        prevArrow: $('#list-3 #prev-3'),
        nextArrow: $('#list-3 #next-3'),
        direction: 'vertical',
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            },
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    direction: 'vertical',
                }
            },
        ]
    });
})