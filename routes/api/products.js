const express = require('express');
const router = express.Router();
const productMocks = require('../../utils/mocks/products');

//Listar todos los productos
router.get('/', function(req, res) {
    const { query } = req.query;   //consulta de todos los datos

    res.status(200).json({
        data: productMocks,
        message: 'products listed'
    });
});

//Consultar un solo producto con :productId (variable de parametro, la variable viene desde los parametros)
router.get('/:productId', function(req, res) {
    const { productId } = req.params;

    res.status(200).json({
        data: productMocks[productId],
        message: 'product retrieved'
    });
});

//Crear un producto nuevo
router.post('/', function(req, res) {

    res.status(201).json({
        data: productMocks[0],    //traer un producto especifio
        message: 'products'
    });
});

//Actualizar
router.put('/:productId', function(req, res) {

    res.status(200).json({
        data: productMocks,
        message: 'products updated'
    });
});

//Eliminar
router.delete('/', function(req, res) {

    res.status(200).json({
        data: productMocks[0],
        message: 'products deleted'
    });
});


module.exports = router;
