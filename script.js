$(function() {
    $('.content' ).on( 'click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('input#term_input').trigger("focus");
    });
    $( ".window" ).resizable({
        minHeight: 250,
        minWidth: 500,
        disable: true
    }).draggable();
});