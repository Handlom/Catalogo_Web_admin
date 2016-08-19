'use strict';
app.controller("userCtrl", function ($scope, sessionControl) {
$scope.personas=[
 		{nombre:"pepe",edad:20},
        {nombre:"angel",edad:30},
        {nombre:"maria",edad:35},
        {nombre:"gema",edad:25}
        ]; 
        console.log($scope.personas);
	$scope.logoutUser = function () {
		sessionControl.signOut();
	}
	// body...
})