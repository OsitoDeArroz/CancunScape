import React, { useState, useEffect } from "react";
import { Button } from "rsuite";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import TarjetaCarrito from "./TarjetaCarrito";
import TarjetaTotalCarrito from "./TarjetaTotalCarrito";
import axios from "axios";

function Carrito() {
    const Usuario  = 1;
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de las reservas
        axios.get(`http://localhost:3001/reservas`, Usuario)
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const reservasData = response.data[0]; // Aquí eliminamos el acceso a la primera parte de la respuesta
                setReservas(reservasData); // Actualizamos el estado con los datos recibidos
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, [Usuario]);
    
    return (
        <>
            <Encabezado />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {reservas.map(reserva => (
                            <TarjetaCarrito
                                key={reserva.id_reservas}
                                Fecha={reserva.fecha_reserva}
                                Adultos={reserva.cant_adultos}
                                Ninos={reserva.cant_ninos}
                                Precio={reserva.precio * reserva.cant_adultos + (reserva.cant_ninos - 100)}
                            />
                        ))}

                    </div>
                    <div className="col-lg-6">
                        <div align='center'>
                            <div className="card mb-3">
                                <div className="card-body card-color">
                                    <TarjetaTotalCarrito

                                    />
                                </div>
                            </div>

                            <Link to="/">
                                <Button appearance="primary" startIcon={<FaArrowLeft />}>Regresar</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito;