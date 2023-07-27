import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "rsuite";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import TarjetaCarrito from "./TarjetaCarrito";
import TarjetaTotalCarrito from "./TarjetaTotalCarrito";
import Cookies from 'js-cookie';
import MainHeader from "./MainHeader";

function Carrito() {
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
    let Nombre = ""
    if (user) {
        id = user.id_usuario;
        Nombre = user.nombre_completo;
    }


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:3001/carritos/${id}`)
                .then(response => {
                    const reservasData = response.data[0];
                    setReservas(reservasData);
                })
                .catch(error => {
                    console.error('Error al hacer la solicitud:', error);
                });
        }
    }, [id]);

    // Calculamos el costo total de todas las reservas
    const calcularTotal = () => {
        let total = 0;
        reservas.forEach(reserva => {
            total += reserva.precio * reserva.adultos + reserva.ninos * (reserva.precio - 100);
        });
        return total;
    };

    const pagarDeshabilitado = reservas.length === 0;

    return (
        <>
            <MainHeader />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        {reservas.map(reserva => (
                            <TarjetaCarrito
                                key={reserva.id_carrito}
                                imgSrc={reserva.imagen}
                                Titulo={reserva.nombre_tours}
                                Fecha={reserva.fecha}
                                Precio={calcularTotal()}
                                Adultos={reserva.adultos}
                                Ninos={reserva.ninos}
                                Reservacion={reserva.id_carrito}
                                tour={reserva.id_tours_id}
                                user={id}
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
                                        pagar={pagarDeshabilitado}
                                        user={id}
                                        nombre={Nombre}
                                        reservaData={reservas}
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

