'use strict';
app.controller("plantillaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {

	$scope.objPlantilla={};	
	$scope.saludo='Hola';

	var ref = firebase.database().ref("plantilla");
	$scope.objHotel = $firebaseArray(ref);
	//console.log($scope.objHotel);

	$scope.test="inicio";
	console.log($scope.test);
	var usuarioId = $routeParams.id;

	if (usuarioId) {
		$scope.uElegido=getDetalles(usuarioId);		
		$scope.objPlantilla=$scope.uElegido[0];
		$scope.test="modificado";
		console.log($scope.test);
	};

	function getDetalles(id){
		var detalles = [];

		firebase.database().ref('plantilla/' + id).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;
		
	}

	$scope.agregarPlantilla = function (h) {
		$scope.objHotel.$add($scope.objPlantilla)
		//crudControl.agregar($scope.objHotel);
		console.log('Antes de agregar: '+$scope.objHotel);
	}

	$scope.actualizarPlantilla = function (h) {
	  firebase.database().ref('plantilla/' + usuarioId).set({
	    nombre: h.nombre,
	    descripcion: h.descripcion,
	    webURL : h.webURL
	  });


		/*for(var i=0; i<$scope.objHotel.length; i++) {
	        // Saves all
	        $scope.objHotel.$save(i).then(function(ref) {
	            // whatever
	            //console.log("Editando:"$scope.objHotel.length);
	        })
	    }*/
		/*$scope.objHotel[0].fooo = h;
		$scope.objHotel.$save(0).then(function(ref) {
		  ref.key === $scope.objHotel[0].$id; // true
		  
		});*/
		//$scope.objHotel.$save($scope.objPlantilla);
		$location.path("/hoteles");
		
	}

	$scope.eliminarPlantilla = function (h) {
		//sessionControl.signOut();
		$scope.objHotel.$remove(h)
	}
	
	$scope.listarPlantilla = function () {
		
	}
})