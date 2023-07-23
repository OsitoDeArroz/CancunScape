const express = require('express');

const controllersUsuarios = require('../controllers/controllersUsuarios');

const router = express.Router()


router.get('/:id', controllersUsuarios.buscarUsuario);
router.post('/', controllersUsuarios.crearUsuario);
router.delete('/:id', controllersUsuarios.borrarUsuario);
router.patch('/:id', controllersUsuarios.actualizarUsuario);

module.exports = router;
