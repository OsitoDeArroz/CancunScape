const express = require('express');

const controllersUsuarios = require('../controllers/controllersUsuarios');

const router = express.Router()

router.get('/', controllersUsuarios.obtenerUsuarios);
router.get('/:id', controllersUsuarios.obtenerUsuarioPorId);
router.post('/login', controllersUsuarios.Login);
router.post('/', controllersUsuarios.crearUsuario);
router.delete('/:id', controllersUsuarios.borrarUsuario);
router.patch('/:id', controllersUsuarios.actualizarUsuario);

module.exports = router;
