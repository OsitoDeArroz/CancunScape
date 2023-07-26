const connection = require("../database.js")

//ver
const obtenerpromociones = (req, res) => {
    connection.query("CALL sp_mostrarpromociones()", (error, results) => {
        if(error){
            console.error("No se obtuvieron las promociones",error);
            res.status(500).json({error:"No se obtuvieron las promociones"});
        }else{
            console.log("Se obtuvieron los promociones");
            res.json(results);
        }
    });
};

const obtenerpromocionest = (req, res) => {
    connection.query("SELECT * FROM promociones", (error, results) => {
        if(error){
            console.error("No se obtuvieron las promociones",error);
            res.status(500).json({error:"No se obtuvieron las promociones"});
        }else{
            console.log("Se obtuvieron los promociones");
            res.json(results);
        }
    });
};


module.exports = {
    obtenerpromociones,
    obtenerpromocionest

}