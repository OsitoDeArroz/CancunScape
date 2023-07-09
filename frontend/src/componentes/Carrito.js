import React from "react";
import importImages from "./ImportImagenes"
import { Button, ButtonToolbar } from "rsuite";
import Encabezado from "./Encabezado";

const images = importImages(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/));

function Carrito({ imgSrc, Titulo, Fecha, Precio }) {
    imgSrc = images['snorkel.png'];
    Titulo = "Xcaret Plus";
    Precio = 1400;
    Fecha = "10/12/2023";
    return (
        <>
            <Encabezado />
            <div className="container">
                <h2>Informacion de reserva</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={imgSrc} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-lg-6">

                        <h3 className="desc-title">{Titulo}</h3>
                        <h5 className="desc-text">Fecha: {Fecha}</h5>
                        <section>
                            <h4>Cantidad de personas</h4>
                            <div className="mb-3">
                                <label for="adultos">2x Adultos</label>
                                <span id="precioAdultos"> $1000</span>
                            </div>
                            
                            <hr />
                            <div className="mb-3">
                                <label for="ninos">2x Niños </label>
                                <span id="precioNinos"> $400</span>
                            </div>
                            <div className="mb-3">
                                <label for="infantes" hidden>0x Infantes</label>
                                <span id="precioInfantes" hidden>$0</span>
                            </div>
                            <hr />
                            <h5>Total: <span id="precioTotal">{Precio} MXN</span></h5>
                        </section>
                        <ButtonToolbar>
                            <Button color="green" appearance="primary" href="/pago">Pagar</Button>
                            <Button color="red" appearance="primary" href="/">Cancelar</Button>
                            <Button color="grey" appearance="primary" href="/descripcion">Regresar</Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Carrito;