const mysql = require('mysql2');


const connection = mysql.createConnection({
    hostname : "Localhost",
    user: "root",
    password : "",
    database : "CancunScape"
});


connection.connect((error)=>{
    if(error){
        connection.error("Error al conectar a la base de datos", error);
    }
    else{
        console.log("Conexion a la base de datos exitosa");
    }
});

module.exports = connection;

