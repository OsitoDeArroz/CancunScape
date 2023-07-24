const express = require('express');

const controllersReservas = require('../controllers/controllersReservas');

const router = express.Router()

router.get('/:id',controllersReservas.obtenerReservas);
router.get('/',controllersReservas.obtenerReservaPorId);
router.post('/',controllersReservas.crearReserva);
router.delete('/:id',controllersReservas.borrarReserva);
router.patch('/',controllersReservas.actualizarReserva);

module.exports = router;
