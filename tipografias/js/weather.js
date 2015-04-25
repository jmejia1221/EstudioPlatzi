(function(){

	if(navigator.geolocation){

		navigator.geolocation.getCurrentPosition(getCoords, errorFound);


	}else{
		alert("Please Update Browser");
	}

	function errorFound(error){
		alert("Un error ocurrió" + error.code);
		// 0: Error desconocido
		// 1: Permiso denegado
		// 2: Posición no está disponible
		// 3: TimeOut
	}

	function getCoords(position){
		var lat = position.coords.latitude;
		var lon = position.coords.longitude;
		console.log("Tu posición es : " + lat + "," + lon);
	}

})();