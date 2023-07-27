const express = require('express');
const controllersCarrito = require('../controllers/controllersCarrito');
const router = express.Router()

router.get('/:id', controllersCarrito.VerCarrito);
router.post('/', controllersCarrito.crearCarrito);
router.patch('/', controllersCarrito.EditarCarrito);
router.delete('/:id', controllersCarrito.BorrarCarrito);
router.delete('/borrar/:id', controllersCarrito.BorrarTodoCarrito);


module.exports = router;
