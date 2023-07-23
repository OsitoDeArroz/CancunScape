const connection = require("../database.js")

//ver por id
const buscarUsuario = (req, res) => {
    const id_usuario = req.params.id;

    connection.query("CALL sp_mostrarusuariorid(?)", [id_usuario], (error, results) => {
        if(error){
            console.error("No se obtuvo el usuario",error);
            res.status(500).json({error:"No se obtuvo el usuario"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvo el usuario"});
        }
        else{
            console.log("Se obtuvo el usuario correctamente");
            res.json(results[0]);
        }
    }); 
};

//insertar
const crearUsuario = (req, res) => {
    const {nombre, correo, password, contacto} = req.body;

    connection.query("CALL sp_insertarusuario(?, ?, ?, ?)", [nombre, correo, password, contacto], (error, results) => {
        if(error){
            console.error("No se creo el usuario correctamente",error);
            res.status(500).json({error:"No se creo el usuario correctamente"});
        }else{
            console.log("Se agrego el usuario correctamente");
            res.json({Message:"El usuario se creo correctamente"});
        }
    });
}

//borrar
const borrarUsuario = (req, res) => {
    const id_usuario = req.params.id;

    connection.query("CALL sp_eliminarusuario(?)", [id_usuario], (error, results) => {
        if(error){
            console.error("No se borro el usuario correctamente",error);
            res.status(500).json({error:"No se borro el usuario correctamente"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvieron los usuarios"});
        }
        else{
            console.log("Se borro el usuario correctamente");
            res.json({Message:"Se borro correctamente el usuario"});
        }
    });
}

//actualizar
const actualizarUsuario = (req, res) => {
    const id_usuario = req.params.id;
    const {nombre, correo, password, fecha, contacto, imagen, precio}=req.body;

    connection.query("CALL sp_actualizartours(?, ?, ?, ?, ?, ?, ?, ?)", [id_tour, nombre, descripcion, fecha, duracion, lugar, imagen, precio], (error, results) => {
        if(error){
            console.error("No se actualizo el usuario ",error);
            res.status(500).json({error:"No se actualizo el usuario correctamente"});
        }else{
            console.log("Se actualizo el usuario correctamente");
            res.json({Message:"El usuario se actualizo correctamente"});
        }
    });
}

module.exports = {
    buscarUsuario,
    crearUsuario,
    borrarUsuario,
    actualizarUsuario,
}