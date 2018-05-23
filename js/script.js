$(document).ready(function () {

    //  calc
    
    $('#calc').on('click', function (event) {
        var depth = +$('#depth').val(),
            width = +$('#width').val(),
            height = +$('#height').val(),
            coef = +$('input[name="type"]:checked').val();
        $('#total').val(function () {
            return depth * width * height * coef;
        });
    });

    //  popup

    $('#call-me').click(function (event) {
        $('#overlay').fadeIn(200,
            function () {
                $('#popup')
                    .css('display', 'flex')
                    .animate({
                        opacity: 1,
                        top: '25%'
                    }, 200);
            });
    });
    $('#popup-close, #overlay', '#popup-send').click(function () {
        $('#popup')
            .animate({
                    opacity: 0,
                    top: '45%'
                }, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(200);
                }
            );
    });
});