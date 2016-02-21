//DELAYING THE CODE FROM EXECUTING UNTIL ALL DOM ASSETS HAVE BEEN LOADED
$(document).ready(function () {
    $('#submit-btn').click(function (event) {
        //PREVENTING THE SUBMIT BUTTON FROM REFRESHING THE PAGE
        event.preventDefault();

        //SETTING A VARIABLE TO GET THE VALUE OF THE #CITY-TYPE INPUT
        var city = $('#city-type').val();
        //CORRECTING CASE TYPE
        var city = city.toLowerCase();
        // REMOVING EXTRA SPACES THAT USERS MIGHT ADD BEFORE OR AFTER THEIR IMPUT
        var city = city.trim();

        //SETTING IF / IF ELSE CONDITIONALS  
        
        //CHANGING THE BODY CLASS TO 'NYC' IF THE USER INPUTS NEW YORK / NEW YORK CITY / NYC
        if (city == "new york" || city == "new york city" || city == "nyc") {
            $('body').removeClass();
            $('body').addClass('nyc');
        //CHANGING THE BODY CLASS TO 'SF' IF THE USER INPUTS SAN FRANCISCO / SF / BAY AREA
        } else if (city == "san francisco" || city == "sf" || city == "bay area") {
            $('body').removeClass();
            $('body').addClass('sf');
        //CHANGING THE BODY CLASS TO 'LA' IF THE USER INPUTS LOS ANGELES / LA / LAX
        } else if (city == "los angeles" || city == "la" || city == "lax") {
            $('body').removeClass();
            $('body').addClass('la');
        //CHANGING THE BODY CLASS TO 'AUSTIN' IF THE USER INPUTS AUSTIN / ATX
        } else if (city == "austin" || city == "atx") {
            $('body').removeClass();
            $('body').addClass('austin');
        //CHANGING THE BODY CLASS TO 'SYDNEY' IF THE USER INPUTS SYDNEY / SYD
        } else if (city == "sydney" || city == "syd") {
            $('body').removeClass();
            $('body').addClass('sydney');
        }
        
        //RESETTING THE INPUT FIELD AFTER CLICKING SUBMIT
        $('#city-type').val("");
        $('#city-type').attr("placeholder", "Enter a city name...");
        
    });
});