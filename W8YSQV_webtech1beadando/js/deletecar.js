$("#gomb").click(function(e) {
    e.preventDefault();

    var id = document.getElementById("torolid").value;

    var url = "https://webtechcars.herokuapp.com/api/cars" + "/" + id;

    $.ajax({
        type: 'DELETE',
        url: url
    });
});
$("#gomb2").click(function(e) {
    e.preventDefault();

    var id2 = document.getElementById("torolid2").value;

    var url2 = "https://webtechcars.herokuapp.com/api/manufacturers" + "/" + id2;

    $.ajax({
        type: 'DELETE',
        url: url2
    });
});