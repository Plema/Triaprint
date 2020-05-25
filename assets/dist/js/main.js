document.addEventListener("touchstart", function () {}, true);

$(document).ready(function () {
    jcf.replaceAll();

    $('.close').on('click', function () {
        $('.menu-mobile').removeClass('active');
        $(".modall-registration").removeClass('active');
        $(".modall").removeClass('active');
        $(".modall-call").removeClass('active');
        $(".modall-ok").removeClass('active');
        $('.tabs-link').removeClass('active');
        $('.politics-modall').removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $('.open-menu').on('click', function () {
        $('.aside').toggleClass('active');
    });

    $('#check').click(function () {
        if (document.getElementById('check').checked) {
            $('#test-input').get(0).type = 'text';
        } else {
            $('#test-input').get(0).type = 'password';
        }
    });

    $('#check1').click(function () {
        if (document.getElementById('check1').checked) {
            $('#test-input1').get(0).type = 'text';
        } else {
            $('#test-input1').get(0).type = 'password';
        }
    });

    $('#check3').click(function () {
        if (document.getElementById('check3').checked) {
            $('#test-input3').get(0).type = 'text';
        } else {
            $('#test-input3').get(0).type = 'password';
        }
    });

    $('#radio-popup').on('click', function () {
        $('.group-one').addClass('active');
        $('.group-two').removeClass('active');
    })
    $('#radio-popup2').on('click', function () {
        $('.group-two').addClass('active');
        $('.group-one').removeClass('active');
    })

    $('.politic').on('click', function () {
        $(".politics-modall").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $(".politics-modall").find('.politics-body').click(function (event) {
        event.stopPropagation();
    });

    $(".politics-modall").on('click', function () {
        $(".politics-modall").removeClass('active');
        $('.body').removeClass('showing-modal');
    });


    $(".modall-registration .tabs-link a").on('click', function () {
        var id = $(this).attr('id');
        $('.tabs-link a').removeClass('active')
        $(this).addClass('active');
        $("[data-id='" + id + "']").addClass('active').siblings().removeClass('active');
    });

    $('.aside a').on('click', function () {
        $('.aside').removeClass('active');
        $('.dropdown ul').removeClass('active');
    })

    $('.dropdown .active a').on('click', function () {
        $('.aside').removeClass('active');
    })

    $('.dropdown-nav').on('click', function () {
        $('.dropdown ul').toggleClass('active');
    })


    $('.close-menu').on('click', function () {
        $('.menu-mobile').removeClass('active');
    });

    $('.iSearch').on('click', function () {
        $('.search .form').toggleClass('active');
        $('.form-input input').css('color', '#282828')
    });

    $('.registration').on('click', function () {
        $(".modall-registration").addClass('active');
        $('.body').addClass('showing-modal');
    })

    $('.modall-active').on('click', function () {
        $(".modall").addClass('active');
        $(".modall-registration").removeClass('active');
        $('.body').addClass('showing-modal');
    });

    $('.call').on('click', function () {
        $(".modall-call").addClass('active');
        $('.body').addClass('showing-modal');
    });

    $(".modall").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall").on('click', function () {
        $(".modall").find('.modall-body').click(function (event) {
            event.stopPropagation();
        });
        $(".modall").on('click', function () {
            $(".modall").removeClass('active');
            $('.body').removeClass('showing-modal');
        });
    });

    $(".ok").on('click', function () {
        $(".modall-ok").addClass('active');
        $(".modall-call").removeClass('active');
    })

    $("log-in a").on('click', function () {
        $('#link-two').trigger("click");
    })

    $("#link-two description a").on('click', function () {
        $('#link-one').trigger("click");
    })

    $(".modall-ok").on('click', function () {
        $(".modall-ok").find('.modall-body').click(function (event) {
            event.stopPropagation();
        });
        $(".modall-ok").on('click', function () {
            $(".modall-ok").removeClass('active');
            $('.body').removeClass('showing-modal');
        });
    });

    jQuery(".only_number").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && e.which != 46 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });


    $(".modall-registration").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall-registration").on('click', function () {
        $(".modall-registration").removeClass('active');
        $('.body').removeClass('showing-modal');
    });

    $(".modall-call").find('.modall-body').click(function (event) {
        event.stopPropagation();
    });

    $(".modall-call").on('click', function () {
        $(".modall-call").find('.form').click(function (event) {
            event.stopPropagation();
        });

        $(".modall-call").removeClass('active');
        $('.body').removeClass('showing-modal');
    });


});
