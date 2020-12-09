$(document).ready(function () {
    $(".content").load("fooldal.html");
    $.each($(".menuspan"), function (msIndex, msValue) {
        $(msValue).click(function (event) {
            event.preventDefault();
            if ($(this).find('a').attr("href") == "index.html") {
                open("index.html", "_self");
            } else {
                $(".content").load($(this).find('a').attr("href"));
            }
        });
    })
});