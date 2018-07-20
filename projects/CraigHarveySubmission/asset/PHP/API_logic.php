<?php
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// User name taken from the previous page via get method of
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
//  ucfirst method used to capitalise the first letter of the users name
$userName = ucfirst($_GET['userName']);


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Geo-location data requested from google API - this data is based on input from the user on the previous page with the parameters being passed using GET method
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  Google API key set as a variable
$google_api_key = 'AIzaSyAD8VyImQpXUvPG55FLV9PJZ0ibU8z37O0' ;

//  User location passed from previous page using GET method from form and stored in variable
$user_location_input = $_GET['location'];

//  Google maps API query string constructed
$maps_query_string = "https://maps.googleapis.com/maps/api/geocode/json?address=" . urlencode($user_location_input)  ."&key=" . urlencode($google_api_key);


//  file_get_contents performs the API request and returns JSON data from the API specified in the '$maps_query_string' variable
$maps_json = file_get_contents($maps_query_string);
//  JSON data converted into an array
$maps_array = json_decode($maps_json, true);

//  users latitude, longitude, formatted address and  City extracted from the array $maps_array
$user_latitude = $maps_array['results'][0]['geometry']['location']['lat'];
$user_longitude = $maps_array['results'][0]['geometry']['location']['lng'];
$user_formatted_address = $maps_array['results'][0]['formatted_address'];
$user_city = $maps_array['results'][0]['address_components'][3]['short_name'];
$user_place_id = $maps_array['results'][0]['place_id'];



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// Weather data requested from Dark Sky API using data extracted from the google geo location API data
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  Dark Sky API key set as variable
$dark_sky_api_key = '5e42593a53c82bf365a6bfeefbb1c9f1';

// Dark Sky API query string using api key variable and padding the users latitude and longitude generated from the Google API response
$weather_query_string = "https://api.darksky.net/forecast/". urlencode($dark_sky_api_key) . "/". urlencode($user_latitude).','.urlencode($user_longitude).'?units=si';

//  file_get_contents performs the API request and returns JSON data from the API specified in the '$maps_query_string' variable
$weather_json = file_get_contents($weather_query_string);
//  JSON data converted into an array
$weather_array = json_decode($weather_json, true);

// weather variables generated from the $weather_array
//  current weather conditions
$weather_current_summary = $weather_array['currently']['summary'];
$weather_current_temp= $weather_array['currently']['temperature'];
// daily weather conditions
$weather_daily_summary= $weather_array['hourly']['summary'];
$weather_daily_icon= $weather_array['hourly']['icon'];

// weekly weather conditions
$weather_weekly_summary= $weather_array['daily']['summary'];



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// News Data requested from newsAPI using the city name extracted from the google geo location API data
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

//  News API key set as a variable
$news_api_key = '46ce2ff81e3d467585e22515caf07224' ;

// https://newsapi.org/v2/everything?q=aberdeen&sources=bbc-news&sortBy=publishedAt&apiKey=46ce2ff81e3d467585e22515caf07224

// the news article query string using
$news_query_string = "https://newsapi.org/v2/everything?q=".urlencode($user_city)."&sources=bbc-news&sortBy=publishedAt&apiKey=" . urlencode($news_api_key);

$news_json = file_get_contents($news_query_string);
//  JSON data converted into an array
$news_array = json_decode($news_json, true);