'use strict';
app.controller("categoriaCtrl", function ($scope, $location, $routeParams, crudControl, $firebaseObject, $firebaseArray) {

	var refCat = firebase.database().ref("categoria");
	$scope.objBDCategoria = $firebaseArray(refCat);
	$scope.objCategoria={};	
	var categoriaKey = $routeParams.key;
		if (categoriaKey) {
			//objetoElegido=getDetalles(categoriaDetalleId);		
			$scope.cateKey=categoriaKey;
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
	
})