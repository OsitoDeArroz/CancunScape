import React from "react";
import { Button } from "rsuite";
import { Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import "rsuite/dist/rsuite.min.css";

function TarjetaTour({ imgSrc, title, description, duration, price, link }) {

    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '22px',
        marginBottom: '10px',
        minHeight: '50px'
    };

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        minHeight: '50px',
    };

    const recortarDescripcion = (texto, limitePalabras) => {
        const palabras = texto.split(' ');
        if (palabras.length <= limitePalabras) {
            return texto;
        } else {
            return palabras.slice(0, limitePalabras).join(' ') + '...';
        }
    };

    return (
        <div className="col-lg-4">
            <div className="card mb-3">
                <Link to={`/descripcion/${link}`}>
                    <img src={imgSrc} className="card-img-top" alt={title} />
                </Link>
                <div className="card-body card-color" >
                    <h4 className="card-title" style={cardTitleStyle}>{title}</h4>
                    <p className="card-text" style={cardTextStyle}>
                        {recortarDescripcion(description, 15)}
                    </p>
                    <p className="card-text" style={cardTextStyle}>Duración: {duration} horas</p>
                    <h5 className="card-text" style={cardTextStyle}>Precio: MXN {price}</h5>
                    <div className="mt-auto" align="center">
                        <Link to={`/descripcion/${link}`}>
                            <Button color="yellow" appearance="subtle" startIcon={<FaInfoCircle />}> Más información </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaTour;
