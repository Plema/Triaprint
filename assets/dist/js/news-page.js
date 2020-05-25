$(document).ready(function () {
    $('.list-news').slick({
        slidesToShow: 3,
        variableWidth: false,
        infinite: true,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.section-news .prev'),
        nextArrow: $('.section-news .next'),
        responsive: [{
                breakpoint: 1920,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 2,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 1280,
                settings: {
                    variableWidth: true,
                    infinite: true,
                    slidesToShow: 2,
                },

            }
        ]
    })
})