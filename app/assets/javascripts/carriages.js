$(document).ready(function(){
    $('.places').hide();
    show_carriage_attr($('#carriage_type').val());

    $('#carriage_type').on('change', function (e) {
        $(".places input").val("");
        $('.places').hide();
        show_carriage_attr(e.target.value);
    });
    function show_carriage(type) {
        if(type === 'CoupeCarriage') {
            $('.upper_pl').show();
            $('.down_pl').show();
        }
        else if(type === 'SleeperCarriage') {
            $('.down_pl').show();
        }
        else if(type === 'EconomyCarriage') {
            $('.upper_pl').show();
            $('.down_pl').show();
            $('.side_d_pl').show();
            $('.side_up_pl').show();
        }
        else if(type === 'SeaterCarriage') {
            $('.seat_pl').show();
        }
    }
});