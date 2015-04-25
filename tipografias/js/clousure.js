// Clousures, Funciones dentro de otras funciones

function aumentarFuente(size){
 return function(){
  document.body.style.fontSize = size + 'px';
 }
}

var size30 = aumentarFuente(30);

size30();

var Contador = (function(){
	// Si una función o método son privados colocarle guión bajo _ como buena práctica para identificarla
	var _contadorPrivado = 0;

	function _cambiarValor(valor){
		_contadorPrivado += valor;
	};

	return {
		incrementar : function(){
			_cambiarValor(1);
		},
		decrementar : function(){
			_cambiarValor(-1);
		},
		valor : function(){
			return _contadorPrivado;
		}
	}

})();

// Copiar el código en consola y llamarlo de la siguiente forma:
// Contador.incrementar();
// Contador.valor(); Aquí muestra el número de veces que se ha llamado la función incrementar