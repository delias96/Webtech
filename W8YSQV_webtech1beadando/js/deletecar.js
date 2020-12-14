$(document).on('click','button[id^="delete-car-"]', function (event) {
    var id = $(this).attr('id').replace('delete-car-', '');
    $(this).prop('disabled', true);

    $.ajax({
        type: 'DELETE',
        url: 'https://webtechcars.herokuapp.com/api/cars/' + id,
        success: function() {
            $(event.target).closest('tr').remove();
        }
    });
});
$(document).on('click','button[id^="delete-man-"]', function (event) {
    var id = $(this).attr('id').replace('delete-man-', '');
    $(this).prop('disabled', true);

    $.ajax({
        type: 'DELETE',
        url: 'https://webtechcars.herokuapp.com/api/manufacturers/' + id,
        success: function() {
            $(event.target).closest('tr').remove();
        }
    });
});