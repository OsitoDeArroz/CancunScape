const connection = require("../database.js")
//ver
const obtenerCategorias = (req, res) => {
    connection.query("SELECT * FROM categorias", (error, results) => {
        if(error){
            console.error("No se obtuvieron las categorias",error);
            res.status(500).json({error:"No se obtuvieron las categorias"});
        }else{
            console.log("Se obtuvieron las categorias");
            res.json(results);
        }
    });
};

//ver por id
const obtenerCategoriaPorId = (req, res) => {
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
const crearCategoria = (req, res) => {
    const {nombre} = req.body;

    connection.query("insert into categorias (nombre) value(?)", [nombre], (error, results) => {
        if(error){
            console.error("No se creo la categoria correctamente",error);
            res.status(500).json({error:"No se creo la categoria correctamente"});
        }else{
            console.log("Se agrego la categoria correctamente");
            res.json({Message:"La categoria se creo correctamente"});
        }
    });
}

//borrar
const borrarCategoria = (req, res) => {
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
const actualizarCategoria = (req, res) => {
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
    obtenerCategorias,
    obtenerCategoriaPorId,
    crearCategoria,
    borrarCategoria,
    actualizarCategoria,
}