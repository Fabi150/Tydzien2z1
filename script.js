if (String.prototype.repeat === undefined){
//if (typeof String.prototype.repeat !== "function")){
//if (!("repeat" in  String.prototype)){
	
	console.log("Metoda repeat niezdefiniowana przez przeglądarkę.");
	
	String.prototype.repeat = function (i){
		
		var value = "";
		
		for (var j=0; j<i; j++){
			
			value += this;
			
		}
		
		return value;
	};
		
	} else {
		
		console.log("Metoda repeat zdefiniowana przez przeglądarkę.");	
	
}

var tytul = document.querySelector("#tytul2");

var cos = "cos ";

tytul.innerHTML = cos.repeat(3);