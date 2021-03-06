$(document).ready(function () {

    jcf.replaceAll();

    $(".tabs-link a").on('click', function () {
        var id = $(this).attr('id');
        $('.tabs-link a').removeClass('active')
        $(this).addClass('active');
        $("[data-id='" + id + "']").addClass('active').siblings().removeClass('active');
    });

    if ($(window).width() < 480) {
        $(".tabs-nav").mCustomScrollbar({
            axis: "x"
        });
    }

    $('.order-information a').on('click', function () {
        $(this).toggleClass('active')
        $('.order-information ul').toggleClass('active')
    })

    $('.additional-information a').on('click', function () {
        $(this).toggleClass('active')
        $('.additional-information ul').toggleClass('active')
    })

    $('.column-data').on('click', function () {
        $(this).addClass('active')
        $('.row-data').removeClass('active')
        $('.list-row').addClass('active')
        $('.list-column').removeClass('active')
    })

    $('.row-data').on('click', function () {
        $(this).addClass('active')
        $('.column-data').removeClass('active')
        $('.list-row').removeClass('active')
        $('.list-column').addClass('active')
    })
})