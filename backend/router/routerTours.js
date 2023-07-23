const express = require('express');

const controllersTours = require('../controllers/controllersTours');

const router = express.Router()

router.get('/', controllersTours.obtenerTours);
router.get('/:id', controllersTours.obtenerTourPorId);
router.post('/', controllersTours.crearTour);
router.delete('/:id', controllersTours.borrarTour);
router.patch('/:id', controllersTours.actualizarTour);

module.exports = router;
