const express = require("express")
const app = express()

app.get( "/", function( req, res, next ) {

    //res.send( "Saludos desde modo desarrollador" )

    res.send( { greeting: "Saludos desde json" } )

} )

const server = app.listen( 3000, () => {

    console.log( `Listening http://localhost:${ server.address().port }` )

} )