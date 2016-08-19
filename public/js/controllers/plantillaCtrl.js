'use strict';
app.controller("plantillaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {

	$scope.objPlantilla={};	
	$scope.saludo='Hola';
	/*var ref = firebase.database().ref().child("plantilla");
	// download the data into a local object
	var syncObject = $firebaseObject(ref);
	// synchronize the object with a three-way data binding
	// click on `index.html` above to see it used in the DOM!
	syncObject.$bindTo($scope, "objData");*/

	var id= '-KPYBasSGniZYx4jF2nF';
	var refu = firebase.database().ref().child("plantilla");
	$scope.user= $firebaseArray(refu);
	

	var ref = firebase.database().ref().child("plantilla");
	$scope.objHotel = $firebaseArray(ref);
	
	
	var commentsRef = firebase.database().ref('plantilla');
	

	$scope.objHotelS="Vacio";
	$scope.objHotelS2="Vacio";

	

	var usuarioId = $routeParams.nombre;

	if (usuarioId) {
		$scope.uElegido=getDetalles(usuarioId);
		console.log('$scope.uElegido: ');
		console.log($scope.uElegido);
	};

	/*function obtenerUsuario(usuId){
		return $firebaseObject(ref.child("tbUsuario").child(usuId));
	}*/

	function getDetalles(id){
		console.log("en la funcion getDetalles, id: "+ id);
		var detalles = [];
		var idObj=[];

		commentsRef.on('child_added', function(data) {
		  	idObj.push(data.val());
		  	console.log(idObj);
		});
		for (var i in idObj) {
			if (idObj[i].nombre == id) {
				detalles.push(idObj[i]);
				console.log('son iguales');
				console.log(detalles);
			}
		}

		return detalles;
		console.log(detalles);
	}
	/*if (htl) {
		//$scope.objHotel = htl;
		$scope.uElegido=obtenerUsuario(htl);
		console.log($scope.uElegido.nombre);
	};

	function obtenerUsuario(ht){
		return $firebaseObject(ref.child('plantilla').child(ht));
	}*/
	$scope.refresh = function(){
		if ($scope.$root && !$scope.$root.$$phase) {
			$scope.objHotelS2="funciono con refresh";
			$scope.$apply();
		}
	}
	$scope.seleccionarData = function(hotel){
		//var objH = hotel;        
        $scope.objHotelS=[
	 		{nombre:"pepe",edad:20},
	        {nombre:"angel",edad:30},
	        {nombre:"maria",edad:35},
	        {nombre:"gema",edad:25}
        ];
        setTimeout(function () {
	        $scope.$apply(function () {
	            $scope.objHotelS2 = "Timeout called!";
	        });
    	}, 2000);
        $scope.objHotelS2="funciono";
        if ($scope.$root && !$scope.$root.$$phase) {
				$scope.$apply();

			}
        console.log($scope.objHotelS2);	
        $location.path('/formPlantilla');
		//$scope.objHotelS=$scope.objHotel;
		//$scope.$apply();
		
	}


	$scope.agregarPlantilla = function () {
		$scope.objHotel.$add($scope.objPlantilla)
		//crudControl.agregar($scope.objHotel);
		console.log('Antes de agregar: '+$scope.objPlantilla);
	}

	$scope.actualizarPlantilla = function (h) {
		//sessionControl.signOut();
		$scope.objHotel.$save(h);
	}

	$scope.eliminarPlantilla = function (h) {
		//sessionControl.signOut();
		$scope.objHotel.$remove(h)
	}
	
	$scope.listarPlantilla = function () {
		
	}
	
	/*$scope.iniciarListado=function() {
		crudControl.bd().ref("plantilla").on('value',function (snapshot){
		    $scope.objHotel = snapshot.val();
		    //$scope.$apply();
		    if ($scope.$root && !$scope.$root.$$phase) {
				$scope.$apply();
			}
		    //if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
			//    $scope.$apply();
			//}
		    console.log($scope.objHotel);
		});
	}*/
	  /*$scope.load_todo = function() {
		    databaseref.on("value", function(snapshot) {
		      $scope.objHotel=snapshot.val();
		      // $digest se encargará de lanzarse durante momentos determinados e irá comprobando si hay cambios en los modelos incluidos en el $scope
		      //Si en $scope->$root->$$phase no aplicaron cambios y $scope->$root->$$phase no se ejecutaron los cambios
		      if ($scope.$root.$$phase != '$apply' && $scope.$root.$$phase != '$digest') {
				    $scope.$apply();
				}
		      console.log($scope.objHotel);
		    }, function (errorObject) {
		      console.log("The read failed: " + errorObject.code);
		    });
		}*/
	//console.log(crudControl.listar());
})