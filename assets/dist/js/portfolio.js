$(document).ready(function () {

    $(".icon-filter").on('click', function () {
        $('.tabs-link').toggleClass('active');
    });

    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".tabs-link");
            if (!div.is(e.target) &&
                div.has(e.target).length === 0) {
                div.removeClass('active');
            }
        });
    });

    $('.tabs li').on('click', function () {
        var id = $(this).attr('id');
        $('li').removeClass('active')
        $(this).addClass('active');
        $(".section-categories .list[data-id='" + id + "']").addClass('active').siblings().removeClass('active');
    });

})