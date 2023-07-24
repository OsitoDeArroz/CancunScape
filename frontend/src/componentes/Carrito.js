import React, { useState, useEffect } from "react";
import { Button } from "rsuite";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Encabezado from "./Encabezado";
import TarjetaCarrito from "./TarjetaCarrito";
import TarjetaTotalCarrito from "./TarjetaTotalCarrito";
import axios from "axios";

function Carrito() {
    const { id } = useParams(); // Obtener la ID del tour desde la URL
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de las reservas
        axios.get(`http://localhost:3001/reservas/${id}`)
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const reservasData = response.data[0];
                setReservas(reservasData);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, [id]);

    // Función para formatear la fecha en un formato legible
    const formatFecha = (fechaString) => {
        const [fecha, hora] = fechaString.split('-');
        const [anio, mes, dia] = fecha.split('-');
        return `${dia}/${mes}/${anio} - ${hora} hrs`;
    };

    return (
        <>
            <Encabezado />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {reservas.map(reserva => (
                            <TarjetaCarrito
                                key={reserva.id_reservas}
                                imgSrc={reserva.imagen}
                                Titulo={reserva.nombre_tours}
                                Fecha={reserva.fecha}
                                Precio={reserva.precio_unitario}
                                Adultos={reserva.cant_adultos}
                                Ninos={reserva.cant_ninos}
                            />
                        ))}

                    </div>
                    <div className="col-lg-6">
                        <div align='center'>
                            <div className="card mb-3">
                                <div className="card-body card-color">
                                    <TarjetaTotalCarrito
                                        Titulo={"a"}
                                        Precio={200}
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