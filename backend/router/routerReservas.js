const express = require('express');

const controllersReservas = require('../controllers/controllersReservas');

const router = express.Router()

router.get('/',controllersReservas.obtenerReservas);
router.get('/:id_categoria',controllersReservas.obtenerReservaPorId);
router.post('/',controllersReservas.crearCategoria);
router.post('/:id_categoria',controllersReservas.borrarCategoria);
router.post('/:id_categoria',controllersReservas.actualizarCategoria);

module.exports = router;
