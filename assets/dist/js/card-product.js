$(document).ready(function () {

    $(".tabs-link a").on('click', function () {
        var id = $(this).attr('id');
        $('.tabs-link a').removeClass('active')
        $(this).addClass('active');
        $(".form-feedback[data-id='" + id + "']").addClass('active').siblings().removeClass('active');
    });

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

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
        responsive: [{
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                vertical: false,
            }
        }, ]
    });

    $('.show-reference').hover(
        function () {
            $(this).parent().addClass('show');
        },
        function () {
            $(this).parent().removeClass('show');
        }
    );

})