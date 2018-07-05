// JavaScript Document
// itunes search app controller 
//
// var getMediaApp = angular.module('getMediaApp', [])

getMediaApp.controller('itunes_controller', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
	
	
	
	$scope.searchiTunes = function (artist, whatKind) {

		$http.jsonp('http://itunes.apple.com/search?', {
			params: {
				'callback': 'JSON_CALLBACK',
				'term': artist,
				'limit': '50',
				'entity': whatKind

			}
		}).then(onSearchComplete, onError);
// console.log(whatKind);
	};

	var onSearchComplete = function (response) {
		$scope.data = response.data;
		$scope.songs = response.data.results;
	};

	var onError = function (reason) {
		$scope.error = reason;
	};



// playSong function is called on click of the search result img tag
// playSong passes in link to itunes preview as music parameter
// audio player element is targerted using its ID
// src attribute is targeted and set as the music parameter
	$scope.playSong = function (music) {
		// var el =angular.element('#musicPlayerSource');
		// el.attr('src', music);
		var audioPlayer = angular.element(document.querySelector('#musicPlayerSource'));
		audioPlayer.attr('src', music);
		alert("Preview feature coming soon, media streamed from this source: "+music);
	}


}]);