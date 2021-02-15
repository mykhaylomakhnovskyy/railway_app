$(document).on('turbolinks:load', function(){
    $('a.edit_train').click( function(e){
        e.preventDefault();
        let train_id;
        let form;
        train_id = $(this).data('trainId');
        form = $('#edit_train_' + train_id);
        if(!$(this).hasClass('cancel')){
            form.show();

            $(this).html('Cancel');
            $(this).addClass('cancel');
        } else{
            form.hide();

            $(this).html('Edit');
            $(this).removeClass('cancel');
        }
    });
});