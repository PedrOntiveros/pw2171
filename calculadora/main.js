//const app = require('electron').app
//const BrowserWindow = require('electron').app
const {app, BrowserWindow} = require('electron')
//Ruta donde se encuentra nuestro proyecto
const path = require ('path')
//Ruta pero en formato URL
const url = require('url')
let PantallaPrincipal;

function muestraPantallaPrincipal(){

	PantallaPrincipal = new BrowserWindow({
		width:340,
		height: 440 
	})
	PantallaPrincipal.on('closed', function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.show()

}
//La api ejecuta este evento cuando
//el archivo main.js se carga en memoria.
app.on('ready', muestraPantallaPrincipal)