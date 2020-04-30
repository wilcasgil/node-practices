const express = require("express")
const app = express()

app.get( "/", function( req, res, next ) {

    //res.send("Como van!!")

    res.send( { greeting: "Como estan todos?" } )

} )

const server = app.listen( 8000, function() {

    console.log( `Listening http://localhost:${server.address().port}` )

} )