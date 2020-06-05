
'use strict'

/**
 * requires
 */
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//today
const path = require('path')

/**
 * product
 * import the shema
 */
const Product = require('./models/product')
//today
const productsRouter = require('./routes/products')

/**
 * server
 */
const app = express()
const port = process.env.PORT || 5000

/**
 * middlewares
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//today
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'public')))

/**
 * routes (petitions)
 * :name, is param
 */
/*app.get('/home/:name', (req, res) => {
    //res.send({ message: 'Welcome to API Rest' })
    res.send({ message: `Welcome ${req.params.name} to API Rest`})
    //res.end() si no quiero enviar nada
})  */

//today. route of front-end
app.use('/products', productsRouter)

/**
 * API Rest
 *store online example (model product)
 *routes endspoints
 */
app.get('/api/product', (req, res) => {
    //res.send(200, {products: []})

    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({
            message: `Error when requesting: ${err}`
        })

        if (!products) return res.status(404).send({
            message: 'There are no product'
        })

        res.send(200, { products })

    })

})

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({
            message: `Error when requesting: ${err}`
        })
        
        if (!product) return res.status(404).send({
            message: 'Product does not exist'
        })

        res.status(200).send({ product })
    })
})

app.post('/api/product', (req, res) => {
    //console.log(req.body)  //para ver el cuerpo de la peticion

    //res.status(200).send({message: 'product received'})
    //res.status(404).send({message: 'product does not exist'})

    /**use shema and register product in the data base*/
    console.log('POST /api/product')
    console.log(req.body)

    let product = new Product()    
    product.name = req.body.name    
    product.price = req.body.price
    product.category = req.body.category
    product.image = req.body.image

    product.save( (err, productStored) => {
        if (err) res.status(500).send({message: `save error: ${err}`})

        res.status(200).send({product: productStored})
    } )
})

app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    let updateData = req.body

    Product.findByIdAndUpdate(productId, updateData, (err, productUpdated) => {
        if (err) return res.status(500).send({
            message: `Failed to update data: ${err}`
        })

        res.status(200).send({ product: productUpdated })
    })

})

app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({
            message: `Error deleting: ${err}`
        })
        
        if (!product) return res.status(404).send({
            message: 'Product does not exist'
        })

        product.remove(err => {
            if (err) return res.status(500).send({
                message: `Error deleting: ${err}`
            })

            res.status(200).send({
                message: 'Product removed'
            })
        })
    })

})


/**
 * server connect
 */
/*const server = app.listen( port, () => {

    console.log( `Listening http://localhost:${ server.address().port }` )

} )  */

mongoose.connect('mongodb://localhost:27017/shopwcg', (err, res) => {
    /*if (err) {
        return console.log(`Connection to the failed database: ${err}`)
    }  */

    if (err) throw err    
    console.log('Database connection ok')

    const server = app.listen( port, () => {

        console.log( `Listening http://localhost:${ server.address().port }` )
    
    } )
})