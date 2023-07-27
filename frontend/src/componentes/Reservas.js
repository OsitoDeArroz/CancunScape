import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "rsuite";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import MainHeader from "./MainHeader";
import TarjetaReservas from "./TarjetaReservas";

function Reservas() {
    const [reservas, setReservas] = useState([]);
    const [user, setUser] = useState(null);


    useEffect(() => {
        // Obtener el contenido de la cookie 'user' y convertirlo a un objeto
        const storedUser = Cookies.get('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Decoding the URI component
        }
    }, []);

    let id = 2;
    if (user) {
        id = user.id_usuario;
    }

    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/reservas/${id}`)
                .then(response => {
                    const reservasData = response.data[0];
                    setReservas(reservasData);
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    }, [id]);

    return (
        <>
            <MainHeader />
            <div align="center">
                <Link to="/">
                    <Button appearance="primary" startIcon={<FaArrowLeft />}>Regresar</Button>
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    {reservas.map(reserva => (
                        <TarjetaReservas
                            key={reserva.id_reservas}
                            imgSrc={reserva.imagen}
                            Titulo={reserva.nombre_tours}
                            Fecha={reserva.fecha}
                            Precio={reserva.precio_unitario * reserva.cant_adultos + reserva.cant_ninos * (reserva.precio_unitario - 100)}
                            Adultos={reserva.cant_adultos}
                            Ninos={reserva.cant_ninos}
                            Reservacion={reserva.id_carrito}
                            tour={reserva.id_tours_id}
                            user={id}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Reservas;

