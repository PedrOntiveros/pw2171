const rq = require ('electron-require');
const main = rq.remote('./main.js');
const $ = require("jquery");

function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	  	$("#txtGenero").html(data.results[0].gender)
	  	$("#txtNombre").html(data.results[0].name.title+" "+
	  						 data.results[0].name.first+" "+
	  						 data.results[0].name.last)
	  	$("#imgFoto").attr("src",data.results[0].picture.large)
	  	$("#txtLocation").html(data.results[0].location.street+", "+
	  						   data.results[0].location.city+", "+
	  						   data.results[0].location.state+", "+
	  						   data.results[0].location.postcode)
	  	$("#txtEmail").html(data.results[0].email)
	  	$("#txtLogin").html("username: "+data.results[0].login.username+"<br>Password: "+
	  						data.results[0].login.password+"<br>Salt: "+
	  						data.results[0].login.salt+"<br>Md5: "+
	  						data.results[0].login.md5+"<br>Shal: "+
	  						data.results[0].login.shal+"<br>Sha256: "+
	  						data.results[0].login.sha256)
	  	$("#txtDob").html(data.results[0].dob)
	  	$("#txtRegistro").html(data.results[0].registered)
	  	$("#txtTelefono").html(data.results[0].phone)
	  	$("#txtCelular").html(data.results[0].cell)
	  	$("#txtId").html(data.results[0].id.name+" "+
	  					 data.results[0].id.value)
	  	$("#txtNat").html(data.results[0].nat)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}

$("#btnInfo").on("click",datosRandom);
