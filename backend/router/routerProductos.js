const express = require('express');

const controllersProductos = require('../controllers/controllersProductos');

const router = express.Router()

router.get('/', controllersProductos.obtenerProductos);
router.get('/:id_producto', controllersProductos.obtenerProductoPorId);
router.post('/', controllersProductos.crearProducto);
router.post('/:id_producto', controllersProductos.borrarProducto);
router.post('/:id_producto', controllersProductos.actualizarProducto);

module.exports = router;
