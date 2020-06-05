const express = require('express')
const router = express.Router()

//const ProductsService = require('../../services/products')

//mocks
const products = [
    {
        name: "Bandeja",
        price: 25000,
        category: "foods",
        image: "/static/images/Bandeja-Paisa.jpg"
        //image: "bandeja.jpg"
    },
    {
        name: "Black bike",
        price: 800000,
        category: "home",
        image: "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=53d820e6622fadd53b8638d60f468ccd&auto=format&fit=crop&w=800&q=60"
        //image: "bike"
    }
]

//rendering the view of pug format
router.get('/', (req, res) => {
    res.render('products', {products})
})

//Otra forma con async await
/*router.get("/", async (req, res, next) => {
    const { tags } = req.query  //Si es es necesario pasarle los tags, los sacamos del query y se los pasamos al servicio
    
    try {
      const products = await productService.getProducts( { tags } )  //Pedimos el servicio con getProducts
      res.render("products", { products })   //file products de formato pug, al cual se le pasan la opcion products
    } catch (err) {
      next(err)
    }
    
  } ) */

module.exports = router
