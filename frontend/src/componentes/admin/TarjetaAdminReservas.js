import React from "react";
import { ButtonToolbar, Button } from "rsuite";
import { FaTrashAlt } from 'react-icons/fa';
import axios from "axios";

function TarjetaAdminReservas({ imgSrc, Titulo, Fecha, Precio, Adultos, Ninos, Reservacion, tour, nombre }) {
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive'
    }

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
    };

    const handleEliminar = () => {
        axios.delete(`http://localhost:3001/reservas/${Reservacion}`)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error('Error al eliminar la reserva:', error);
            });
    };


    return (
        <>
            <div className="col-lg-4">
                <div className="card mb-3">
                    <div className="card-body card-color">
                        <h4 className="card-title" style={cardTitleStyle}>{Titulo}</h4>
                        <p className="card-text" style={cardTextStyle}>Fecha: {Fecha}</p>
                        <p className="card-text" style={cardTextStyle}>Adultos: {Adultos}</p>
                        <p className="card-text" style={cardTextStyle}>Niños: {Ninos}</p>
                        <p className="card-text" style={cardTextStyle}>Nombre: {nombre}</p>
                        <h5 className="card-text" style={cardTextStyle}>Total: MXN {Precio}</h5>
                        <ButtonToolbar >
                            <Button color="red" appearance="primary" startIcon={<FaTrashAlt />} onClick={handleEliminar}>
                                Eliminar
                            </Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TarjetaAdminReservas;
