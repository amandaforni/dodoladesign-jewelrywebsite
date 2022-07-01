/*Global $ */

$('.options-row a').on('click', function() {
    let page = $(this).attr('data-page');
    $('.page').hide();
    $('.' + page).show();
}); 


