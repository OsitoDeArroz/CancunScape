import React from "react";
import { ButtonToolbar, Button } from "rsuite";
import { Link } from "react-router-dom";
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";

function TarjetaCarrito({ imgSrc, Titulo, Fecha, Precio, Adultos, Ninos, tour }) {
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '24px',
        marginBottom: '10px',
    };

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        marginBottom: '20px',
    };

    const handleEliminar = () => {
        axios.delete(`http://localhost:3001/reservas/${tour}`)
            .then(response => {
                console.log("Se borro la reserva correctamente");
                window.location.reload();
            })
            .catch(error => {
                console.error('Error al eliminar la reserva:', error);
            });
    };

    return (
        <>
            <div className="card mb-3">
                <img src={imgSrc} className="card-img-top" alt={Titulo} />
                <div className="card-body card-color">
                    <h4 className="card-title" style={cardTitleStyle}>{Titulo}</h4>
                    <p className="card-text" style={cardTextStyle}>Fecha: {Fecha}</p>
                    <p className="card-text" style={cardTextStyle}>Adultos: {Adultos}</p>
                    <p className="card-text" style={cardTextStyle}>Niños: {Ninos}</p>
                    <h5 className="card-text" style={cardTextStyle}>Precio: MXN {Precio}</h5>
                    <ButtonToolbar >
                        <Link to="/descripcion">
                            <Button appearance="primary" startIcon={<FaRegEdit />}>Editar</Button>
                        </Link>
                        <Button color="red" appearance="primary" startIcon={<FaTrashAlt />} onClick={handleEliminar}>Eliminar</Button>
                    </ButtonToolbar>
                </div>
            </div>
        </>
    );
};

export default TarjetaCarrito;
