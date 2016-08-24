'use strict';
app.controller("plantillaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {
	
	var refCat = firebase.database().ref("categoria");
	$scope.objBDCategoria = $firebaseArray(refCat);
	$scope.objCategoria={};	

	var categoriaKey = $routeParams.key;
	var objetoCategoriElegida;

	if (categoriaKey) {
		//objetoElegido=getDetalles(categoriaDetalleId);		
		$scope.cateKey=categoriaKey;
	};

	//-------------------------------------------

	var idCat = $routeParams.idCat;

	if (idCat) {
		objetoCategoriElegida=getDetallesCat(idCat);		
		$scope.objCategoria=objetoCategoriElegida[0];
	};

	function getDetallesCat(idCat){
		var detalles = [];
		firebase.database().ref('categoria/' + idCat).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	//---------------------------------------------

	var ref = firebase.database().ref("plantilla");
	$scope.objHotel = $firebaseArray(ref);

	$scope.objPlantilla={};	
	var categoriaDetalleId = $routeParams.id;
	var objetoElegido;

	if (categoriaDetalleId) {
		objetoElegido=getDetalles(categoriaDetalleId);		
		$scope.objPlantilla=objetoElegido[0];
	};

	function getDetalles(id){
		var detalles = [];
		firebase.database().ref('plantilla/' + id).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	$scope.agregarCategoria = function(c){
		$scope.objBDCategoria.$add($scope.objCategoria);
		//var recentPostsRef = firebase.database().ref('categoria').limitToLast(1);
		//console.log(recentPostsRef)
	}

	$scope.actualizarCategoria = function (c) {
	  firebase.database().ref('categoria/' + idCat).set({
	    nombre: c.nombre,
	    descripcion: c.descripcion,
	    nombreKey : c.nombreKey
	  });
		$location.path("/cate");		
	};



	$scope.agregarPlantilla = function (h) {
		$scope.objHotel.$add($scope.objPlantilla)
		//crudControl.agregar($scope.objHotel);
		console.log('Antes de agregar: '+$scope.objHotel);
	};


	$scope.actualizarPlantilla = function (h) {
	  firebase.database().ref('plantilla/' + categoriaDetalleId).set({
	    nombre: h.nombre,
	    descripcion: h.descripcion,
	    webURL : h.webURL,
	    categoria : h.categoria
	  });
		$location.path("/cate/"+h.categoria);		
	};

	$scope.eliminarPlantilla = function (h) {
		$scope.objHotel.$remove(h)
	};
	
	$scope.listarPlantilla = function () {
		
	};
})