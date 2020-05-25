$(document).ready(function () {

    $('.example').eyMaps({
        zoomAfter: 'click',
        map: {
            center: [48.512391, 34.608414],
            zoom: 15,
            controls: [],
            zoomAfter: 'click',
        },
        
        // Метки
        placemark: [

            // Метка №1
            {
                geometry: [48.512391, 34.608414], // Координаты метки
                options: {
                    // эта опция переопределит аналогичную опцию в параметре placemarkDefaults
                    iconColor: '#ff3333',
                }
            },
        ],

        // Эти стили будут использ. по умолчанию у всех меток
        placemarkDefaults: {
            preset: 'islands#circleDotIcon', // пресет (см. док.)
            iconColor: '#ff3333', // цвет маркера (см. док.)
        },

    });


    var $status = $('.pagingInfo');
    var $slickElement = $('.list-reviews');

    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.text('0' + i);
    });

    $('.list-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '0px',
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: $('.section-reviews .prev'),
        nextArrow: $('.section-reviews .next'),
        centerMode: true,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                },

            }]
    })

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

        }]
    })

    $('.list-work').slick({
        slidesToShow: 4,
        variableWidth: false,
        infinite: true,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.section-works .prev'),
        nextArrow: $('.section-works .next'),
        responsive: [
        {
            breakpoint: 1920,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1280,
            settings: {
                variableWidth: true,
                infinite: true,
                slidesToShow: 2,
            },

        }]
    })

    $('.list-categories').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: false,
        infinite: true,
        prevArrow: $('.section-categories .prev'),
        nextArrow: $('.section-categories .next'),
        responsive: [{
            breakpoint: 1920,
            settings: {
                slidesToShow: 3,
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

        }]
    })

    $('.list-client').slick({
        slidesToShow: 4,
        variableWidth: false,
        infinite: true,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: $('.section-clients .prev'),
        nextArrow: $('.section-clients .next'),
        responsive: [{
            breakpoint: 1920,
            settings: {
                slidesToShow: 3,
                variableWidth: false,
            },
        },
        {
            breakpoint: 1280,
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

        }]
    })
    
})

