// forma uno
// var http = require('http');

// function onServer(request, response) {

//     console.log("Peticion Ok");

//     response.writeHead( 200, { "Content-Type": "text/html" } );

//     response.write(" <h1>Server online, hi! </h1> " );

//     response.end();

// }

// var server = http.createServer(onServer);

// server.listen(3000);

// console.log( "Server funcionando en http://localhost:3000/" );



// ++++++++++++++++++++++++++++++++
// forma dos
// var http = require('http');

// http.createServer(function (request, response) {   
    
//     response.writeHead( 200, { 'Content-Type': 'text/plain' } );
    
//     response.write( "Saludo desde el servidor, Welcome" );
    
//     response.end();
    
// }).listen(3000, 'localhost');

// console.log( 'Server running in http://localhost:3000/' );


// ++++++++++++++++++++++++++++++++
// forma tres
// var http = require( "http" );
//     fs = require( "fs" );

// http.createServer( function ( req, res ) {
    
//     fs.readFile( "./home.html", function ( err, html ) {
        
//         res.write( html );

//         res.end();

//     } );
// } ).listen( 3000 );



// ++++++++++++++++++++++++++++++++
// forma cuatro
// var http =  require ("http");
// var fs = require('fs');
 
// http.createServer( function(req,res){

// 	res.writeHead(200, { 'Content-Type': 'text/html' } );

// 	switch (req.url) {
// 		case '/':
// 			plantilla = "home.html";
// 			break;
// 		case '/express':
// 			plantilla = "sobreexpress.html";
// 			break;
// 		default :
// 			plantilla = "404.html";
// 			break;
// 	}

// 	fs.readFile( "./plantillas/" + plantilla , function(error, datos) {
	
//         res.write(datos);
        
// 		res.end();
	
// 	});

// }).listen(3000, 'localhost');

// console.log("Server funcinando");


// ++++++++++++++++++++++++++++++++
// forma cinco
// var express = require('express');
// var app = express();

// //Gestionar las rutas
// app.get('/' , function( peticion, respuesta ){

//     respuesta.send('Hello word with express');

//  });


//  app.listen( 3000 , function(){

//      console.log("escuchando en el puerto 3000");

//  });


// ++++++++++++++++++++++++++++++++
// forma seis
//exportamos módulo de express
// const express = require('express')

// //inicializar express
// var app = express()

// //Cualquier rutas respuesta con arrow function
// app.use('/', (req, res) => {
//     res.send('Saludos, con arrow function')
// })

// //Escuchar server
// const server = app.listen( 3000, () => {

//     console.log( `Listening http://localhost:${ server.address().port }` )

// } )

// ++++++++++++++++++++++++++++++++
// forma siete 
const express = require('express')

//nos permite trabajar y gestionar nuestras peticiones
const router = express.Router()

const PUERTO = 3000

//inicializar express
var app = express()

//agregamos router a la aplicacion de express
app.use(router)

//Gestionar las peticiones
router.get('/plantillas', (req, res) => {
    //res.send('Products list')

    res.send( { 
        greeting: "Saludos desde json",
        Things: "Muñeco de trapo"
    } )

})

router.post('/plantillas/forms', (req, res) => {
    //res.send('Add product')

    res.send( { 
        id: 1,
        Name: "Hat",
        Price: "1000"
    } )
})

const server = app.listen( PUERTO, () => {
    console.log( `Listening http://localhost:${ server.address().port }` )

} )