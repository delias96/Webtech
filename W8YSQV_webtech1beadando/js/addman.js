$(document).ready(function () {
    $('#form').submit(function (event) {
        event.preventDefault();

        var data = $(this).serializeArray().reduce(function (acc, val) {
            acc[val.name] = val.value;
            return acc;
        }, {});

        $.ajax({
            type: "POST",
            url: 'https://webtechcars.herokuapp.com/api/manufacturers',
            data: JSON.stringify(data),
            dataType: 'json',
            contentType: "application/json"
        });

        return false;
    });
});