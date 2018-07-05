// var icmovesApp = angular.module('icmovesApp', ['ngRoute', 'ngAnimate']);
var icmovesApp = angular.module('icmovesApp', []);
icmovesApp.controller('icmovesApp_controler', ['$scope', '$location', function ($scope, $location) {

    $scope.cities = ["Aberdeen", "Dundee", "Edinburgh", "Glasgow"];
    $scope.beds = [1, 2, 3, 4];
    $scope.priceRange = [100000, 200000, 300000, 400000];
    $scope.propertyType = [{
            type: "house",
            icon: "fa-home"
        },
        {
            type: "flat",
            icon: "fa-building-o"
        },
        {
            type: "mobile home",
            icon: "fa-truck"
        },
        {
            type: "spaceship",
            icon: "fa-space-shuttle"
        }
    ];
    $scope.buildings = [
        // flats  
        // *********************
        {
            title: "1 bedroom flat for sale",
            propertyType: "flat",
            shortDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            longDescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat",
            imgMain: "images/housing/flat_1bed_front_sale.jpg",
            imgBath: "images/housing/flat_bath.jpg",
            imgBed: "images/housing/flat_bed.jpg",
            imgKit: "images/housing/flat_kitchen.jpg",
            imgLiv: "images/housing/flat_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 120000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Ingram Street",
            propertyArea: "Dunbartonshire",
            lat: 57,
            lon: 10,
            trainStation: 1.5
        },
        {
            title: "1 bedroom flat for rent",
            propertyType: "flat",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/flat_1bed_front_rent.jpg",
            imgBath: "images/housing/flat_bath.jpg",
            imgBed: "images/housing/flat_bed.jpg",
            imgKit: "images/housing/flat_kitchen.jpg",
            imgLiv: "images/housing/flat_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 1800,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Queensborough Gardens",
            propertyArea: "Glasgow",
            lat: 57,
            lon: 10,
            trainStation: 0.5
        },
        {
            title: "2 bedroom flat for rent",
            propertyType: "flat",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/flat_2bed_front_rent.jpg",
            imgBath: "images/housing/flat_bath.jpg",
            imgBed: "images/housing/flat_bed.jpg",
            imgKit: "images/housing/flat_kitchen.jpg",
            imgLiv: "images/housing/flat_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 24300,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Park Circus",
            propertyArea: "Glasgow",
            lat: 57,
            lon: 10,
            trainStation: 0.2
        },
        {
            title: "2 bedroom flat for sale",
            propertyType: "flat",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/flat_2bed_front_sale.jpg",
            imgBath: "images/housing/flat_bath.jpg",
            imgBed: "images/housing/flat_bed.jpg",
            imgKit: "images/housing/flat_kitchen.jpg",
            imgLiv: "images/housing/flat_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "South Frederick Street",
            propertyArea: "Glasgow",
            lat: 57,
            lon: 10,
            trainStation: 0.2
        },

        // houses  
        // *********************
        {
            title: "1 bedroom house for sale",
            propertyType: "house",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/house_1bed_front_sale.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 120000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Warriston Street",
            propertyArea: "Glasgow",
            lat: 57,
            lon: 10,
            trainStation: 1.5
        },
        {
            title: "1 bedroom house for rent",
            propertyType: "house",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/house_1bed_front_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 1800,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Lismore Drive",
            propertyArea: "Paisley",
            lat: 57,
            lon: 10,
            trainStation: 0.5
        },
        {
            title: "2 bedroom house for rent",
            propertyType: "house",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/house_2bed_front_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 24300,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Kenmure Gardens",
            propertyArea: "Glasgow",
            lat: 57,
            lon: 10,
            trainStation: 0.2
        },
        {
            title: "2 bedroom house for sale",
            propertyType: "house",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/house_2bed_front_sale.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Portland Park",
            propertyArea: "Hamilton",
            lat: 57,
            lon: 10,
            trainStation: 0.2
        },

        // mobile homes  
        // *********************
        {
            title: "1 bedroom mobile home for sale",
            propertyType: "mobile",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/mobile_1bed_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Anywhere you want to go",
            propertyArea: "Everywhere",
            lat: 57,
            lon: 10,
            trainStation: 6000,
        },
        {
            title: "100 bedroom mobile home for sale",
            propertyType: "mobile",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/mobile_1bed_sale.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Anywhere you want to go",
            propertyArea: "Everywhere",
            lat: 57,
            lon: 10,
            trainStation: 5600
        },
        {
            title: "2 bedroom mobile home for sale",
            propertyType: "mobile",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/mobile_2bed_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Anywhere you want to go",
            propertyArea: "Everywhere",
            lat: 57,
            lon: 10,
            trainStation: 6000
        },
        {
            title: "2 bedroom mobile home for sale",
            propertyType: "mobile",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/mobile_2bed_sale.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Anywhere you want to go",
            propertyArea: "Everywhere",
            lat: 57,
            lon: 10,
            trainStation: 6000
        },
        {
            title: "10 bedroom mobile for sale",
            propertyType: "mobile",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/spaceship_10bed_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Anywhere you want to go",
            propertyArea: "Everywhere",
            lat: 57,
            lon: 10,
            trainStation: 6000
        },

        // Spaceships  
        // *********************      
        {
            title: "100 bedroom spaceship for sale",
            propertyType: "spaceship",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/spaceship_100bed_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Geo stationary above Anniesland",
            propertyArea: "Glasgow",
            lat: 57,
            lon: 10,
            trainStation: 5600
        },
        {
            title: "3 bedroom spaceship for sale",
            propertyType: "spaceship",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/spaceship_rent.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: false,
            rent: true,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Geo stationary above Hamilton",
            propertyArea: "Hamilton",
            lat: 57,
            lon: 10,
            trainStation: 6000
        },
        {
            title: "30 bedroom spaceship for sale",
            propertyType: "spaceship",
            shortDescription: "10 words or less",
            longDescription: "50 words or less",
            imgMain: "images/housing/spaceship_sale.jpg",
            imgBath: "images/housing/house_bath.jpg",
            imgBed: "images/housing/house_bed.jpg",
            imgKit: "images/housing/house_kitchen.jpg",
            imgLiv: "images/housing/house_livingroom.jpg",
            sale: true,
            rent: false,
            cost: 243000,
            //this information will be turned in to google geolocation data taken from teh lat + long
            propertyAddress: "Where no mans gone before",
            propertyArea: "Drumchapel",
            lat: 57,
            lon: 10,
            trainStation: 6000
        }
    ];


    $scope.viewMenu = true;
    
        $scope.toggleMenu = function (value) {
            $scope.viewMenu = value;
        };
        






}]);