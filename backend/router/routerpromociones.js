const express = require('express');
const controllersTours = require('../controllers/controllerspromociones');
const router = express.Router()

router.get('/', controllersTours.obtenerpromocionest);
router.get('/:id', controllersTours.obtenerpromociones);


module.exports = router;
