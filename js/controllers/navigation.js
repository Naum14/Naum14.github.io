'use strict';

angular.module ('myApp')
.controller ('NavigationCtrl', function ($scope, $location) {

	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
    
	$scope.setRoute = function(route) {
		$location.path(route);
    };
});