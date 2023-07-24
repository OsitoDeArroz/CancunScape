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
        if (error) {
            console.error("No se obtuvieron las reservas", error);
            res.status(500).json({ error: "No se obtuvieron las reservas" });
        } else {
            console.log("Se obtuvieron las reservas");
            res.json(results);
        }
    });
};

//ver por id
const obtenerReservaPorId = (req, res) => {
    const id = req.params.id;

    connection.query("SELECT * FROM reservas WHERE id_reservas=(?)", [id], (error, results) => {
        if (error) {
            console.error("No se obtuvieron las reservas", error);
            res.status(500).json({ error: "No se obtuvieron las reservas" });
        } else if (results.length === 0) {
            res.status(500).json({ error: "No se obtuvieron las reservas" });
        }
        else {
            console.log("Se obtuvo la reserva correctamente");
            res.json(results[0]);
        }
    });
};

//insertar
const crearReserva = (req, res) => {
    const { fecha, usuario, tour, adultos, ninos, precio } = req.body;

    connection.query("CALL sp_insertarreserva(?, ?, ?, ?, ?, ?)", [fecha, usuario, tour, adultos, ninos, precio], (error, results) => {
        if (error) {
            console.error("No se creo la reserva correctamente", error);
            res.status(500).json({ error: "No se creo la reserva correctamente" });
        } else {
            console.log("Se agrego la reserva correctamente");
            res.json({ Message: "La reserva se creo correctamente" });
        }
    });
}

//borrar
const borrarReserva = (req, res) => {
    const id_reserva = req.params.id;

    connection.query("CALL sp_eliminarreservas(?)", [id_reserva], (error, results) => {
        if (error) {
            console.error("No se borro la reserva correctamente", error);
            res.status(500).json({ error: "No se borro la reserva correctamente" });
        } else if (results.length === 0) {
            res.status(500).json({ error: "No se obtuvieron las reservas" });
        }
        else {
            console.log("Se borro la reserva correctamente");
            res.json({ Message: "Se borro correctamente la reserva " });
        }
    });
}

//actualizar
const actualizarReserva = (req, res) => {
    const id_reserva = req.params.id;
    const { fecha, usuario, id_tour } = req.body;
    connection.query("CALL sp_actualizarreservas(?,?,?,?)", [id_reserva, fecha, usuario, id_tour], (error, results) => {
        if (error) {
            console.error("No se actualizo la reserva ", error);
            res.status(500).json({ error: "No se creo la reserva correctamente" });
        } else {
            console.log("Se agrego la reserva correctamente");
            res.json({ Message: "La reserva actualizo correctamente" });
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