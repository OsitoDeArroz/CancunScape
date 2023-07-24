import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "rsuite";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Encabezado from "./Encabezado";
import TarjetaCarrito from "./TarjetaCarrito";
import TarjetaTotalCarrito from "./TarjetaTotalCarrito";


function Carrito() {
    const { id } = useParams();
    const [reservas, setReservas] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/reservas/${id}`)
            .then(response => {
                const reservasData = response.data[0];
                setReservas(reservasData);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, [id]);

    // Calculamos el costo total de todas las reservas
    const calcularTotal = () => {
        let total = 0;
        reservas.forEach(reserva => {
            total += reserva.precio_unitario * reserva.cant_adultos + reserva.cant_ninos * (reserva.precio_unitario - 100);
        });
        return total;
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
                                Reservacion={reserva.id_reservas}
                                tour={reserva.id_tours_id}
                            />
                        ))}
                    </div>
                    <div className="col-lg-6">
                        <div align='center'>
                            <div className="card mb-3">
                                <div className="card-body card-color">
                                    <TarjetaTotalCarrito
                                        Titulo={""}
                                        Precio={calcularTotal()}
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

