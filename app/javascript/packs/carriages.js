$(document).on('turbolinks:load', function(){
    $('.places').hide();
    show_fields($('#carriage_type').val());
    $('.field').on('change', (e) => {
        $('.places').hide();
        show_fields(e.target.value);
    });
    function show_fields(type) {
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