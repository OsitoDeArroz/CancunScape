import React from "react";
import { Button } from "rsuite";
import { Link } from "react-router-dom";
import { FaCreditCard } from 'react-icons/fa';

function TarjetaTotalCarrito({ Titulo, Precio}) {
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '24px',
        marginBottom: '5px',
    };

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        marginBottom: '15px',
    };

    return (
        <>
            <h4 className="card-title" style={cardTitleStyle}>Detalle de su compra</h4>
            <hr></hr>
            <div className="total-container">
                <p className="card-text" style={cardTextStyle}>{Titulo} </p>
                <h5 className="card-text" style={cardTextStyle}>MXN {Precio}</h5>
            </div>

            <div className="total-container">
                <h5 className="card-text" style={cardTextStyle}>Total a pagar:</h5>
                <h5 className="card-text" style={cardTextStyle}>MXN {Precio}</h5>
            </div>
            <div className="mt-auto" align="center">
                <Link to="/pago">
                    <Button color="green" appearance="primary" startIcon={<FaCreditCard/>} block> Pagar</Button>
                </Link>
            </div>
        </>
    );
};

export default TarjetaTotalCarrito;



