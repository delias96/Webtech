$(document).ready(function () {
    $.getJSON("https://webtechcars.herokuapp.com/api/cars", function (data) {
        var cartable = $("#auto");
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nev = $('<td>' + value.name + '</td>');
            var fogyasztas = $('<td>' + value.consumption + '</td>');
            var szin = $('<td>' + value.color + '</td>');
            var gyarto = $('<td>' + value.manufacturer + '</td>');
            var elerheto = $('<td>' + value.avaiable + '</td>');
            var ev = $('<td>' + value.year + '</td>');
            var loero = $('<td>' + value.horsepower + '</td>');
            $(row).append(nev);
            $(row).append(fogyasztas);
            $(row).append(szin);
            $(row).append(gyarto);
            $(row).append(elerheto);
            $(row).append(ev);
            $(row).append(loero);
            $(cartable).append(row);
        })
    })
    $.getJSON("https://webtechcars.herokuapp.com/api/manufacturers", function (data) {
        var manufacttable = $("#gyarto");
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            var nev = $('<td>' + value.name + '</td>');
            var orszag = $('<td>' + value.country + '</td>');
            var alapit = $('<td>' + value.founded + '</td>');
            $(row).append(nev);
            $(row).append(orszag);
            $(row).append(alapit);
            $(manufacttable).append(row);
        })
    })
})