function suma (a,b) {
	return a+b
}

var suma2 = function(a,b){
	return a+b;
}

function texto(){
	alert(document.getElementById("texto1").value);
}

function sumaNum (){
	var n1 = document.getElementById("num1").value;
	var n2 = document.getElementById("num2").value;
	alert(suma(parseInt(n1),parseInt(n2)));
}