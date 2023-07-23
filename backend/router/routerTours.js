const express = require('express');

const controllersTours = require('../controllers/controllersTours');

const router = express.Router()

router.get('/', controllersTours.obtenerTours);
router.get('/:id_tour', controllersTours.obtenerTourPorId);
router.post('/', controllersTours.crearTour);
router.delete('/:id_tour', controllersTours.borrarTour);
router.patch('/:id_tour', controllersTours.actualizarTour);

module.exports = router;
