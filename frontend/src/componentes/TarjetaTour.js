import React from "react";
import { Button } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function TarjetaTour({ imgSrc, title, description, duration, price, link }) {
    return (
        <>
            <div className="col-lg-4">
                    <div className="card mb-3">
                    <a href={link}>
                        <img src={imgSrc} className="card-img-top" alt={title} />
                    </a>
                        <div className="card-body card-color">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-text">{description}</p>
                            <p className="card-text">Duración: {duration}</p>
                            <h5 className="card-text">MXN {price}</h5>
                            <div className="mt-auto" align="center">
                                <a href={link}>
                                    <Button color="yellow" appearance="subtle"> Más información </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                
            </div>
        </>
    );
}

export default TarjetaTour;