(function (){
	var app = angular.module('geofencing', []);	

	app.controller('GeoController',['$http', function($http){
		
		var locations = this;

		locations = [];

		$http.get('http://54.175.94.150:8080/calance/sandbox/geolocations').success(function (data){
			locations = data.entities;
		});

		this.getLocations = function(){
			return locations;
		}
	}]);
})();

