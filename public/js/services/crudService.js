'use strict';

app.factory('crudControl', function ($location) {

	var authfb = firebase.auth();
	var db = firebase.database();
	var plantilla = db.ref("plantilla").on('value',function (snapshot){
					    return snapshot;
				  	});
	

	return{
		agregar : function(objPlantilla){
			/*db.ref("Items").set(
				objPlantilla
			);*/
			console.log('registrando plantilla...'+objPlantilla.nombre);
			db.ref('plantilla/').push(
					objPlantilla
		    );
		},
		editar : function(){

		},
		eliminar: function(){

		},
		listar: function(){
			return plantilla;
		}

	}
});