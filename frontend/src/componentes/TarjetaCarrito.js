import React from "react";
import { ButtonToolbar, Button } from "rsuite";
import { Link } from "react-router-dom";
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';

function TarjetaCarrito({ imgSrc, Titulo, Fecha, Precio, onEdit, onRemove }) {
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

    return (
        <>
            <div className="card mb-3">
                <img src={imgSrc} className="card-img-top" alt={Titulo} />
                <div className="card-body card-color">
                    <h4 className="card-title" style={cardTitleStyle}>{Titulo}</h4>
                    <p className="card-text" style={cardTextStyle}>Fecha: {Fecha}</p>
                    <h5 className="card-text" style={cardTextStyle}>MXN {Precio}</h5>
                    <div className="mt-auto">
                        <ButtonToolbar >
                            <Link to="/descripcion">
                                <Button appearance="primary" startIcon={<FaRegEdit />}>Editar</Button>
                            </Link>
                            <Link to="/">
                                <Button color="red" appearance="primary" startIcon={<FaTrashAlt />}>Eliminar</Button>
                            </Link>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TarjetaCarrito;
