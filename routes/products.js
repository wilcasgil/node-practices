const express = require("express");
const router = express.Router();   //crear el router
const productMocks = require('../utils/mocks/products');   //llamar los mocks de productos

// file de products example
/* const products = [
  {
    name: "Balon",
    price: 35,
    image: "/static/images/futbol.jpg"
  },
  {
    name: "Tennis",
    price: 100,
    image: "/static/images/tennis.jpeg"
  }
] */

//Listar los productos
router.get("/", function(req, res) {
  res.render("products", { productMocks });   //file products de formato pug, al cual se le pasan la opcion products
});


module.exports = router;  //exportar la ruta