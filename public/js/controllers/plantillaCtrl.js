'use strict';
app.controller("plantillaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {
	
	//CATEGORIA
	var refCat = firebase.database().ref("categoria");
	$scope.objBDCategoria = $firebaseArray(refCat);
	$scope.objCategoria={};	
	//$scope.objCategoriaE={};
	var idCat = $routeParams.idCat;
	var categoriaKey = $routeParams.key;
	var objetoCElegido;

	if (idCat) {

		objetoCElegido=getDetallesCat(idCat);		
		$scope.objCategoria=objetoCElegido[0];
		//console.log($scope.objetoCElegido[0]);
	};

	if (categoriaKey) {
		//objetoElegido=getDetalles(categoriaDetalleId);		
		$scope.cateKey=categoriaKey;
	};

	function getDetallesCat(idCat){
		var detalles = [];
		firebase.database().ref('categoria/' + idCat).on('value', function(snapshot) {
		  detalles.push(snapshot.val());
		});		
		return detalles;		
	};

	$scope.actualizarCategoria = function (h) {
	  firebase.database().ref('categoria/' + idCat).set({
	    nombre: h.nombre,
	    descripcion: h.descripcion,
	    nombreKey : h.nombreKey
	  });
		$location.path("categorias");		
	};	

	$scope.agregarCategoria = function(c){
		$scope.objBDCategoria.$add($scope.objCategoria);
		//var recentPostsRef = firebase.database().ref('categoria').limitToLast(1);
		//console.log(recentPostsRef)
	}
	//CATEGORIA	
	//PLANTILLA
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
		$location.path("/plantilla/"+h.categoria);		
	};

	$scope.eliminarPlantilla = function (h) {
		$scope.objHotel.$remove(h)
	};
	
	$scope.listarPlantilla = function () {
		
	};
	//PLANTILLA
})