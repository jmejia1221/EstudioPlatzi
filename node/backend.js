var basededatos = {
	usuario : "jmejia",
	password : 1234
}; // Finjo una base de datos con un objeto json

console.log("Se programar backend" );

var express = require("express"); // Requiere la libreria que instalamos - Aquí traemos express
var parcero = require("body-parser");
var web = express(); // Aquí ejecuto express
web.use(parcero.urlencoded());
var server;

server = web.listen(8080, function(){ // 127.0.0.1 esta es la ip que toda computadora tiene que apunta hacia uno mismo
	console.log("Servidor Arrancado"); 
});

// URLs Amigables

web.get("/", function(req, res){ // Require / Response
	res.sendfile("formulario.html"); // Busco mi html desde el servidor
});

web.post("/entrar", function(req, res){ // req: es lo que envia el navegador - res: es lo que envia el servidor
	/*console.log(req.body);
	res.send("Entraste al formulario");*/
	if (req.body.user == basededatos.usuario && req.body.clave == basededatos.password){
		res.send("Bienvenido a tu perfil");
	}else{
		res.send("Vete !!!!");
	}
});

web.get("/test", function(req, res){ // Requerimiento / Respuesta
	// En la url se agregaron variables ejem: 127.0.0.1:8080/test?air=airbus&edad=12
	// console.log(req); Me arroja los datos en un json, req.query.air son los datos que se arrojaron desde el json
	res.send("Tu avión es el: " + req.query.air + " y tu edad es : " + req.query.edad);
}); // Get es una función de express que me permite cargar una variable que yo le diga

web.get("/john/prueba", function(req, res){
	res.send("Prueba url desde: " + ciudad);
});


// Nota: Instalar sudo npm install body-parser para poder enviar formularios a tráves 
// de POST, recomendación, instalarla en la carpeta del proyecto y no global