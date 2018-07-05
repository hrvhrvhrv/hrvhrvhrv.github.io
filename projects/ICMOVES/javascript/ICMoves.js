//IC Moves functions

$(document).mouseup(function (e) {
    var container = new Array();
    container.push($('#hidden-theme'));
    container.push($('#hidden-weather'));
    container.push($('#hidden-PriceRange'));
    container.push($('#hidden-location'));
    container.push($('#hidden-bedRoom'));
    container.push($('#hidden-property'));


    $.each(container, function (key, value) {
        if (!$(value).is(e.target) // if the target of the click isn't the container...
            &&
            $(value).has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(value).hide();
        } else if ($(value).is(e.target) // if the target of the click is the container...
            &&
            $(value).has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(value).hide();
        } else if ($(value).is(e.target) // if the target of the click isn't the container...
            &&
            $(value).has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(value).hide();
        }
    });
});

$(function () {
    $('#carousel').owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        dotData: false,
        nav: true
    });
    var webPage = $('html,body');


    $('.slowScroll').on('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        webPage.stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, "easeInOutQuint");
    });

    $('#top').on('click', function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        webPage.stop().animate({
            scrollTop: 0
        }, 1000, "easeInOutQuint");
    });

    // google geolocation api key 
    //https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=YOUR_API_KEY
    //    AIzaSyA79Tyl7cDEJYGhCBHzQ1DFB2k1KoZ3sc4 

    // darksky api key 
    // 5e42593a53c82bf365a6bfeefbb1c9f1

    var status = $('#status');

    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Use Google Geocoding API to get the city & country name
                getCityName(lat, long);

                // Use forecast.io to get Weather
                getWeather(lat, long);
            });
        } else {
            status.text("Your browser doesn't support Geolocation !");
        }

    })();


    function getCityName(lat, long) {
        // Query the Google Maps Geocoding API using AJAX to get the name of the city
        $.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyA79Tyl7cDEJYGhCBHzQ1DFB2k1KoZ3sc4", function (data) {
            console.log(data);
            $("#streetDisplay").text(data.results[0].address_components[1].long_name);
            $("#cityDisplay").text(data.results[6].address_components[0].long_name);
            $("#countryDisplay").text(data.results[7].formatted_address);
            // $("#cityDisplay").text(data.results[5].formatted_address);
        });

    }

    function getWeather(lat, long) {
        status.text('Getting Current Weather...');
        $.get(("https://api.darksky.net/forecast/5e42593a53c82bf365a6bfeefbb1c9f1/" + lat + "," + long), {
            units: "uk2"
        }, function (data) {
            // $('#currentTemp').text(data.currently.temperature);
            // $('#summary').text(data.daily.summary);
            weather(data);
        }, "jsonp");


        function weather(data) {
            var temp = Math.round(data.currently.temperature),
                icon = data.currently.icon,
                summary = data.currently.summary,
                daysummary = data.minutely.summary,
                windSpeed = Math.round(data.currently.windSpeed);
            console.log(icon, temp, summary, windSpeed, daysummary);
            displayWeather(icon, temp, summary, windSpeed, daysummary);

        } // end of weather function

        function displayWeather(icon, temp, summary, windSpeed, daysummary) {
            // Using the colored Skycons - https://github.com/maxdow/skycons
            var skycons = new Skycons({
                monochrome: false,
                colors: {
                    main: "#333333",
                    moon: "#78586F",
                    fog: "#78586F",
                    fogbank: "#B4ADA3",
                    cloud: "#C6C6C6",
                    snow: "#7B9EA8",
                    leaf: "#7B9EA8",
                    rain: "#7B9EA8",
                    sun: "#FF8C42"
                }
            });
            //     tempC = Math.round((temp - 32) * 5 / 9);
            $("#tempDisplay").text(temp + "C°");
            $("#condition").text(summary);
            $("#windSpeed").text(windSpeed + " mph");
            $("#daycondition").text(daysummary);

            // Add Skycon based on weather condition
            skycons.add("icon1", icon);
            skycons.play();
        } // end of displayWeather
    }



    $('#hidden-PriceRange-toggle').on('click', function () {
        // ToggleFade Code Goes Here
        $('#hidden-PriceRange').toggle();
    });

    $('#hidden-Location-toggle').on('click', function () {
        // ToggleFade Code Goes Here
        $('#hidden-location').toggle();
    });

    $('#hidden-bedRoom-toggle').on('click', function () {
        // ToggleFade Code Goes Here
        $('#hidden-bedRoom').toggle();
    });

    $('#hidden-property-toggle').on('click', function () {
        // ToggleFade Code Goes Here
        $('#hidden-property').toggle();
    });

    $('#hidden-weather-toggle').on('click', function () {
        // ToggleFade Code Goes Here
        $('#hidden-weather').toggle();
    });

    $('#hidden-theme-toggle').on('click', function () {
        // ToggleFade Code Goes Here
        $('#hidden-theme').toggle();
    });

    //closing of self invoking JS
});