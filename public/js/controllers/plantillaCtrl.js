'use strict';
app.controller("plantillaCtrl", function ($scope, crudControl) {

	$scope.objPlantilla={};

	$scope.agregarPlantilla = function (objPlantilla) {
		crudControl.agregar($scope.objPlantilla);
		console.log('antes de registrar:'+ $scope.objPlantilla.nombre);
		//sessionControl.signOut();
	}

	$scope.actualizarPlantilla = function () {
		//sessionControl.signOut();
	}

	$scope.eliminarPlantilla = function () {
		//sessionControl.signOut();
	}

	$scope.listarPlantilla = function () {
		
	}
	console.log(crudControl.listar());
})