import React from "react";

function TarjetaReservas({ imgSrc, Titulo, Fecha, Precio, Adultos, Ninos }) {
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive'
    }

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
    };

    return (
        <>
            <div className="col-lg-4">
                <div className="card mb-3">
                    <img src={imgSrc} className="card-img-top" alt={Titulo} />
                    <div className="card-body card-color">
                        <h4 className="card-title" style={cardTitleStyle}>{Titulo}</h4>
                        <p className="card-text" style={cardTextStyle}>Fecha: {Fecha}</p>
                        <p className="card-text" style={cardTextStyle}>Adultos: {Adultos}</p>
                        <p className="card-text" style={cardTextStyle}>Niños: {Ninos}</p>
                        <h5 className="card-text" style={cardTextStyle}>Total: MXN {Precio}</h5>
                    </div>
                </div>
            </div>

        </>
    );
};

export default TarjetaReservas;
