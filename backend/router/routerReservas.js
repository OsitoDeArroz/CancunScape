const express = require('express');

const controllersReservas = require('../controllers/controllersReservas');

const router = express.Router()

router.get('/',controllersReservas.obtenerReservas);
router.get('/:id',controllersReservas.obtenerReservaPorId);
router.post('/',controllersReservas.crearReserva);
router.post('/:id',controllersReservas.borrarReserva);
router.post('/:id',controllersReservas.actualizarReserva);

module.exports = router;
