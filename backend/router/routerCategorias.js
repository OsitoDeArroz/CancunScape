const express = require('express');

const controllersCategorias = require('../controllers/controllersCategorias');

const router = express.Router()

router.get('/',controllersCategorias.obtenerCategorias);
router.get('/:id_categoria',controllersCategorias.obtenerCategoriaPorId);
router.post('/',controllersCategorias.crearCategoria);
router.post('/:id_categoria',controllersCategorias.borrarCategoria);
router.post('/:id_categoria',controllersCategorias.actualizarCategoria);

module.exports = router;
