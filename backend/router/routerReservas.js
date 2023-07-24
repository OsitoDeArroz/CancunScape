const express = require('express');

const controllersReservas = require('../controllers/controllersReservas');

const router = express.Router()

router.get('/',controllersReservas.obtenerReservas);
router.get('/:id',controllersReservas.obtenerReservaPorId);
router.post('/',controllersReservas.crearReserva);
router.delete('/:id',controllersReservas.borrarReserva);
router.patch('/:id',controllersReservas.actualizarReserva);

module.exports = router;
