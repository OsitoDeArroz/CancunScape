import React from "react";
import { Button } from "rsuite";
import { Link } from "react-router-dom";
import "rsuite/dist/rsuite.min.css";

function TarjetaTour({ imgSrc, title, description, duration, price, link }) {
    
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
        <div className="col-lg-4">
            <div className="card mb-3">
                <Link to={link}>
                    <img src={imgSrc} className="card-img-top" alt={title} />
                </Link>
                <div className="card-body card-color">
                    <h4 className="card-title" style={cardTitleStyle}>{title}</h4>
                    <p className="card-text" style={cardTextStyle}>{description}</p>
                    <p className="card-text" style={cardTextStyle}>Duración: {duration}</p>
                    <h5 className="card-text" style={cardTextStyle}>MXN {price}</h5>
                    <div className="mt-auto" align="center">
                        <Link to={link}>
                            <Button color="yellow" appearance="subtle"> Más información </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TarjetaTour;
