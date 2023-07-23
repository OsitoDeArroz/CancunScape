const connection = require("../database.js")

/*
sp_insertarusuario


sp_eliminarusuario

sp_eliminarreservas
sp_actualizarusuario 

sp_actualizarreservas

sp_mostrarusuarios*/


//ver
const obtenerReservas = (req, res) => {
    connection.query("CALL sp_mostrarreservas()", (error, results) => {
        if(error){
            console.error("No se obtuvieron las reservas",error);
            res.status(500).json({error:"No se obtuvieron las reservas"});
        }else{
            console.log("Se obtuvieron las reservas");
            res.json(results);
        }
    });
};

//ver por id
const obtenerReservaPorId = (req, res) => {
const id= req.params.id_categoria;

    connection.query("SELECT * FROM categorias WHERE id_categoria=(?)",[id], (error, results) => {
        if(error){
            console.error("No se obtuvieron las categorias",error);
            res.status(500).json({error:"No se obtuvieron las categorias"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvieron las categorias"});
        }
        else{
            console.log("Se obtuvo la categoria correctamente");
            res.json(results[0]);
        }
    }); 
};

//insertar
const crearReserva = (req, res) => {
    const {nombre, fecha, usuario, tour} = req.body;

    connection.query("CALL sp_insertarreserva(?, ?, ?, ?)", [nombre, fecha, usuario, tour], (error, results) => {
        if(error){
            console.error("No se creo la reserva correctamente",error);
            res.status(500).json({error:"No se creo la reserva correctamente"});
        }else{
            console.log("Se agrego la reserva correctamente");
            res.json({Message:"La reserva se creo correctamente"});
        }
    });
}

//borrar
const borrarReserva = (req, res) => {
    const {id_categoria} = req.body;

    connection.query("delete from categorias where id_categoria = (?)", [id_categoria], (error, results) => {
        if(error){
            console.error("No se borro la categoria correctamente",error);
            res.status(500).json({error:"No se borro la categoria correctamente"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvieron las categorias"});
        }
        else{
            console.log("Se borro la categoria correctamente");
            res.json({Message:"Se borro correctamente la categoria"});
        }
    });
}

//actualizar
const actualizarReserva = (req, res) => {
    const {id_categoria} = req.body;
    const {nombre,imagen_categoria}=req.body;
    connection.query("update categorias where nombre = (?), imagen_categoria=(?) set id_categoria = (?)", [nombre,imagen_categoria,id_categoria], (error, results) => {
        if(error){
            console.error("No se actualizo la categoria ",error);
            res.status(500).json({error:"No se creo la categoria correctamente"});
        }else{
            console.log("Se agrego la categoria correctamente");
            res.json({Message:"La categoria se actualizo correctamente"});
        }
    });
}

module.exports = {
    obtenerReservas,
    obtenerReservaPorId,
    crearReserva,
    borrarReserva,
    actualizarReserva,
}