$(document).ready(function () {

    //var city = ? ;

    $('#submit-btn').click(function () {
        $('#city-type').val();
        if (city == "New York" || city == "New York City" || city == "NY");
        $('body').addClass('nyc');
    });
    $('#submit-btn').click(function () {
        $('#city-type').val();
        if (city == "San Francisco" || city == "SF" || city == "Bay Area");
        $('body').addClass('sf');
    });

});
