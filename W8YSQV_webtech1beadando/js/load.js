$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {
        var cartable = $("#car");
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var name = $('<td>' + value.name + '</td>');
            var consumption = $('<td>' + value.consumption + '</td>');
            var color = $('<td>' + value.color + '</td>');
            var manufacturer = $('<td>' + value.manufacturer + '</td>');
            var avaiable = $('<td>' + value.avaiable + '</td>');
            var year = $('<td>' + value.year + '</td>');
            var horsepower = $('<td>' + value.horsepower + '</td>');
            var deleteButtonCell = $('<td>').append($('<button>', {text: 'Törlés', id: 'delete-car-' + value._id }));
            $(row).append(name);
            $(row).append(consumption);
            $(row).append(color);
            $(row).append(manufacturer);
            $(row).append(avaiable);
            $(row).append(year);
            $(row).append(horsepower);
            $(row).append(deleteButtonCell);
            $(cartable).append(row);
        })
    })
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
        var manufacttable = $("#manu");
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var name = $('<td>' + value.name + '</td>');
            var country = $('<td>' + value.country + '</td>');
            var founded = $('<td>' + value.founded + '</td>');
            var deleteButtonCell = $('<td>').append($('<button>', {text: 'Törlés', id: 'delete-man-' + value._id }));
            $(row).append(name);
            $(row).append(country);
            $(row).append(founded);
            $(row).append(deleteButtonCell);
            $(manufacttable).append(row);
        })
    })
})