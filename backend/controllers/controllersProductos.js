const connection = require("../database.js")
//ver
const obtenerProductos = (req, res) => {
    connection.query("SELECT * FROM productos", (error, results) => {
        if(error){
            console.error("No se obtuvieron las Productos",error);
            res.status(500).json({error:"No se obtuvieron las productos"});
        }else{
            console.log("Se obtuvieron las productos");
            res.json(results);
        }
    });
};

//ver por id
const obtenerProductoPorId = (req, res) => {
const id= req.params.id_producto;

    connection.query("SELECT * FROM productos WHERE id_producto=(?)",[id], (error, results) => {
        if(error){
            console.error("No se obtuvieron las productos",error);
            res.status(500).json({error:"No se obtuvieron las productos"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvieron las productos"});
        }
        else{
            console.log("Se obtuvo la producto correctamente");
            res.json(results[0]);
        }
    }); 
};
//insertar
const crearProducto = (req, res) => {
    const {nombre} = req.body;

    connection.query("insert into productos (nombre) value(?)", [nombre], (error, results) => {
        if(error){
            console.error("No se creo la producto correctamente",error);
            res.status(500).json({error:"No se creo la producto correctamente"});
        }else{
            console.log("Se agrego la producto correctamente");
            res.json({Message:"La producto se creo correctamente"});
        }
    });
}

//borrar
const borrarProducto = (req, res) => {
    const {id_producto} = req.body;

    connection.query("delete from productos where id_producto = (?)", [id_producto], (error, results) => {
        if(error){
            console.error("No se borro la producto correctamente",error);
            res.status(500).json({error:"No se borro la producto correctamente"});
        }else if(results.length===0){
            res.status(500).json({error:"No se obtuvieron las productos"});
        }
        else{
            console.log("Se borro la producto correctamente");
            res.json({Message:"Se borro correctamente la producto"});
        }
    });
}

//actualizar
const actualizarProducto = (req, res) => {
    const {id_producto} = req.body;
    const {nombre,imagen_producto}=req.body;
    connection.query("update productos where nombre = (?), imagen_producto=(?) set id_producto = (?)", [nombre,imagen_producto,id_producto], (error, results) => {
        if(error){
            console.error("No se actualizo la producto ",error);
            res.status(500).json({error:"No se creo la producto correctamente"});
        }else{
            console.log("Se agrego la producto correctamente");
            res.json({Message:"La producto se actualizo correctamente"});
        }
    });
}

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    borrarProducto,
    actualizarProducto,
}