const connection = require("../database.js")

//ver
const VerCarrito = (req, res) => {
    const id = req.params.id;

    connection.query("CALL view_carrito_by_user_id(?)", [id], (error, results) => {
        if (error) {
            console.error("No se obtuvieron las promociones", error);
            res.status(500).json({ error: "No se obtuvieron las promociones" });
        } else {
            console.log("Se obtuvieron los promociones");
            res.json(results);
        }
    });
};

const crearCarrito = (req, res) => {
    const { usuario, tour, adultos, ninos, fecha, precio } = req.body;

    connection.query("CALL sp_insertar_carrito(?,?,?,?,?,?)", [usuario, tour, adultos, ninos, fecha, precio], (error, results) => {
        if (error) {
            console.error("No se creo el carrito", error);
            res.status(500).json({ error: "No se creo el carrito" });
        } else {
            console.log("Se creo el carrito");
            res.json(results);
        }
    });
}

const BorrarCarrito = (req, res) => {
    const id = req.params.id;

    connection.query("CALL clear_carrito(?)", [id], (error, results) => {
        if (error) {
            console.error("No se borro el carrito", error);
            res.status(500).json({ error: "No se borro el carrito" });
        } else {
            console.log("Se borro el carrito");
            res.json(results);
        }
    });
};

const BorrarTodoCarrito = (req, res) => {
    const id = req.params.id;
    console.log(id);
    connection.query("CALL clear_carritoTodo(?)", [id], (error, results) => {
        if (error) {
            console.error("No se borro todo el carrito", error);
            res.status(500).json({ error: "No se borro todo el carrito" });
        } else {
            console.log("Se borro todo el carrito");
            res.json(results);
        }
    });
};

const EditarCarrito = (req, res) => {
    const { id_carrito, adultos, ninos, fecha } = req.body;

    connection.query("CALL edit_carrito(?,?,?,?)", [id_carrito, adultos, ninos, fecha], (error, results) => {
        if (error) {
            console.error("No se obtuvieron las promociones", error);
            res.status(500).json({ error: "No se obtuvieron las promociones" });
        } else {
            console.log("Se obtuvieron los promociones");
            res.json(results);
        }
    });
};

module.exports = {
    VerCarrito,
    BorrarCarrito,
    EditarCarrito,
    crearCarrito,
    BorrarTodoCarrito
}