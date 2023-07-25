const connection = require("../database.js")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

//ver
const obtenerUsuarios = (req, res) => {

    connection.query("CALL sp_mostrarusuarios()", (error, results) => {
        if (error) {
            console.error("No se obtuvieron los usuario", error);
            res.status(500).json({ error: "No se obtuvieron los usuarios" });
        } else if (results.length === 0) {
            res.status(500).json({ error: "No se obtuvieron los usuarios" });
        }
        else {
            console.log("Se obtuvo el usuario correctamente");
            res.json(results[0]);
        }
    });
};

//ver por id
const obtenerUsuarioPorId = (req, res) => {
    const id_usuario = req.params.id;

    connection.query("CALL sp_mostrarusuarioporid(?)", [id_usuario], (error, results) => {
        if (error) {
            console.error("No se obtuvo el usuario", error);
            res.status(500).json({ error: "No se obtuvo el usuario" });
        } else if (results.length === 0) {
            res.status(500).json({ error: "No se obtuvo el usuario" });
        }
        else {
            console.log("Se obtuvo el usuario correctamente");
            res.json(results[0]);
        }
    });
};

//insertar
const crearUsuario = (req, res) => {
    const { nombre, correo, password, contacto } = req.body;

    // Primero, verificamos si ya existe un usuario con el mismo correo
    connection.query("SELECT * FROM usuario WHERE correo_electronico = ?", [correo], (error, results) => {
        if (error) {
            console.error("Error al buscar el usuario en la base de datos", error);
            res.status(500).json({ error: "Error al buscar el usuario en la base de datos" });
        } else {
            if (results.length > 0) {
                // Si ya existe un usuario con el mismo correo, devolvemos un mensaje de error
                res.status(400).json({ error: "Ya existe un usuario con este correo" });
            } else {
                // Generar el hash de la contraseña utilizando bcrypt
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        console.error("Error al generar el hash de la contraseña", err);
                        res.status(500).json({ error: "Error al generar el hash de la contraseña" });
                    } else {
                        // Si no existe un usuario con el mismo correo y se generó el hash de la contraseña, procedemos a insertar el nuevo usuario
                        connection.query("CALL sp_insertarusuario(?, ?, ?, ?)", [nombre, correo, hash, contacto], (error, results) => {
                            if (error) {
                                console.error("No se creó el usuario correctamente", error);
                                res.status(500).json({ error: "No se creó el usuario correctamente" });
                            } else {
                                console.log("Se agregó el usuario correctamente");
                                res.json({ Message: "El usuario se creó correctamente" });
                            }
                        });
                    }
                });
            }
        }
    });
}

//borrar
const borrarUsuario = (req, res) => {
    const usuario = req.params.id;

    connection.query("CALL sp_eliminarusuario(?)", [usuario], (error, results) => {
        if (error) {
            console.error("No se borro el usuario correctamente", error);
            res.status(500).json({ error: "No se borro el usuario correctamente" });
        } else if (results.length === 0) {
            res.status(500).json({ error: "No se obtuvieron los usuarios" });
        }
        else {
            console.log("Se borro el usuario correctamente");
            res.json({ Message: "Se borro correctamente el usuario" });
        }
    });
}

//actualizar
const actualizarUsuario = (req, res) => {
    const { usuario, nombre, correo, password, contacto } = req.body;

    connection.query("CALL sp_actualizarusuario(?, ?, ?, ?, ?, ?, ?)", [usuario, nombre, correo, password, contacto], (error, results) => {
        if (error) {
            console.error("No se actualizo el usuario ", error);
            res.status(500).json({ error: "No se actualizo el usuario correctamente" });
        } else {
            console.log("Se actualizo el usuario correctamente");
            res.json({ Message: "El usuario se actualizo correctamente" });
        }
    });
}

//login
const Login = (req, res) => {
    const { correo, password } = req.body;

    connection.query("SELECT * FROM usuario WHERE correo_electronico = ?", [correo], (error, results) => {
        if (error) {
            console.error("Error al buscar el usuario en la base de datos", error);
            res.status(500).json({ error: "Error al buscar el usuario en la base de datos" });
        } else {
            if (results.length === 0) {
                res.status(401).json({ error: "Credenciales incorrectas vacio" });
            } else {
                const usuario = results[0];
                bcrypt.compare(password, usuario.password_usuario, (err, result) => {
                    if (err || !result) {
                        res.status(401).json({ error: "Credenciales incorrectas" });
                    } else {
                        res.json({ Message: "Inicio de sesión exitoso" });
                    }
                });
            }
        }
    });
};

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(403).json({ success: false, message: 'Token no proporcionado' });
        return;
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({ success: false, message: 'Token inválido' });
            return;
        }

        req.userId = decoded.id_usuario;
        next();
    });
};


module.exports = {
    obtenerUsuarios,
    obtenerUsuarioPorId,
    crearUsuario,
    borrarUsuario,
    actualizarUsuario,
    Login,
    verifyToken
}