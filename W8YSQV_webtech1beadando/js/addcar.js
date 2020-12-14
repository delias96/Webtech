$(document).ready(function () {
    let dropdown = $('#manufacturer');

    dropdown.empty();

    dropdown.append('<option selected="true" disabled>Válasz gyártót</option>');
    dropdown.prop('selectedIndex', 0);

    $.getJSON('https://webtechcars.herokuapp.com/api/manufacturers', function (data) {
        $.each(data, function (key, entry) {
            dropdown.append($('<option></option>').attr('value', entry.name).text(entry.name));
        })
    });

    $('#addcar').submit(function (event) {
        event.preventDefault();

        var data = $(this).serializeArray().reduce(function (acc, val) {
            acc[val.name] = val.value;
            return acc;
        }, {});

        $.ajax({
            type: "POST",
            url: 'https://webtechcars.herokuapp.com/api/cars',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: "application/json"
        });

        return false;
    });
});
