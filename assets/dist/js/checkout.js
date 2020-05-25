$(document).ready(function () {

    jcf.replaceAll();
    $("#file-doc").fileinput({
        uploadUrl: "/ file-upload-batch / 1",
    });

    $('.hidden-xs').html('Выбрать файл')

    $(' input#file-doc').on('click', function () {
        $('.file-drop-zone, button.close.fileinput-remove, .input-group-btn.input-group-append, .description, .file-preview').addClass('active')
    })

    $('button.close.fileinput-remove').on('click', function () {
        $('.file-drop-zone, button.close.fileinput-remove, .input-group-btn.input-group-append, .description, .file-preview').removeClass('active')
    })

    $('.show-reference').hover(
        function () {
            $(this).parent().addClass('show');
        },
        function () {
            $(this).parent().removeClass('show');
        }
    );
})