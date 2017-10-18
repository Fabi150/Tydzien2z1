if (String.prototype.repeat === undefined){
//if (!(String.prototype.repeat typeof function)){
	
	console.log("metoda repeat niezdefiniowana przez przeglądarkę.");
	
	String.prototype.repeat = function (i){
		
		var value = "";
		
		for (var j=0; j<i; j++){
			
			value += this;
			
		}
		
		return value;
	};
		
	} else {
		
		console.log("metoda repeat zdefiniowana przez przeglądarkę.");	
	
}

var tytul = document.querySelector("#tytul2");

var cos = "cos ";

tytul.innerHTML = cos.repeat(3);