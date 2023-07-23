const connection = require("../database.js")

//ver
const obtenerTours = (req, res) => {
    connection.query("CALL sp_mostrartours()", (error, results) => {
        if(error){
            console.error("No se obtuvieron los tours",error);
            res.status(500).json({error:"No se obtuvieron los tours"});
        }else{
            console.log("Se obtuvieron los tours");
            res.json(results);
        }
    });
};

//ver por id
const obtenerTourPorId = (req, res) => {
    const id_tour = req.params.id;

    connection.query("CALL sp_mostrartourid(?)", [id_tour], (error, results) => {
        if(error){
            console.error("No se obtuvo el tour",error);
            res.status(500).json({error:"No se obtuvo el tour"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvo el tour"});
        }
        else{
            console.log("Se obtuvo el tour correctamente");
            res.json(results[0]);
        }
    }); 
};

//insertar
const crearTour = (req, res) => {
    const {nombre, descripcion, fecha, duracion, lugar, imagen, precio} = req.body;

    connection.query("CALL sp_insertartours(?, ?, ?, ? ,?, ?, ?)", [nombre, descripcion, fecha, duracion, lugar, imagen, precio], (error, results) => {
        if(error){
            console.error("No se creo el tour correctamente",error);
            res.status(500).json({error:"No se creo el tour correctamente"});
        }else{
            console.log("Se agrego el tour correctamente");
            res.json({Message:"El tour se creo correctamente"});
        }
    });
}

//borrar
const borrarTour = (req, res) => {
    const id_tour = req.params.id;

    connection.query("CALL sp_eliminartours(?)", [id_tour], (error, results) => {
        if(error){
            console.error("No se borro el tour correctamente",error);
            res.status(500).json({error:"No se borro el tour correctamente"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvieron los tours"});
        }
        else{
            console.log("Se borro el tour correctamente");
            res.json({Message:"Se borro correctamente el tour"});
        }
    });
}

//actualizar
const actualizarTour = (req, res) => {
    const id_tour = req.params.id;
    const {nombre, descripcion, fecha, duracion, lugar, imagen, precio}=req.body;

    connection.query("CALL sp_actualizartours(?, ?, ?, ?, ?, ?, ?, ?)", [id_tour, nombre, descripcion, fecha, duracion, lugar, imagen, precio], (error, results) => {
        if(error){
            console.error("No se actualizo el tour ",error);
            res.status(500).json({error:"No se actualizo el tour correctamente"});
        }else{
            console.log("Se actualizo el tour correctamente");
            res.json({Message:"El tour se actualizo correctamente"});
        }
    });
}

module.exports = {
    obtenerTours,
    obtenerTourPorId,
    crearTour,
    borrarTour,
    actualizarTour,
}