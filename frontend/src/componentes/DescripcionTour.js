import React from "react";
import importImages from "./ImportImagenes";
import Encabezado from "./Encabezado";
import { Link } from "react-router-dom";
import { Button, ButtonToolbar } from "rsuite";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import "../assets/css/descripcionTour.css";

const images = importImages(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/));


function DescripcionTour({ imgSrc, Titulo, Descripcion, Precio, Duracion }) {
    imgSrc = images['snorkel.png'];
    Titulo = "Xcaret Plus";
    Descripcion = "Una visita obligada para los visitantes de Cancún y la Riviera Maya. Premiado como uno de los mejores parques del mundo.";
    Precio = 1500;
    Duracion = 3;
    return (
        <>
            <Encabezado />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Detalles</h2>
                        <hr />
                        <img src={imgSrc} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-lg-6">

                        <h3 className="desc-title">{Titulo}</h3>
                        <p className="desc-text">{Descripcion}</p>
                        <p className="desc-text">Duracion: {Duracion} dias</p>
                        <h4>Reserva</h4>
                        <div className="mb-3">
                            <label for="fecha">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label for="adultos">Adultos:</label>
                            <input type="number" id="adultos" name="adultos" className="form-control" min="0" max="25" />
                            <span id="precioAdultos" hidden>$0</span>
                        </div>
                        <div className="mb-3">
                            <label for="ninos">Niños:</label>
                            <input type="number" id="ninos" name="ninos" className="form-control" min="0" max="20" />
                            <span id="precioNinos" hidden>$0</span>
                        </div>
                        <h5>Total: <span id="precioTotal">{Precio} MXN</span></h5>
                        <ButtonToolbar>
                            <Link to="/carrito">
                                <Button color="green" appearance="primary" startIcon={<FaCartPlus />}>Reservar</Button>
                            </Link>
                            <Link to="/paquetes">
                                <Button appearance="primary" startIcon={<FaArrowLeft />}>Regresar</Button>
                            </Link>
                        </ButtonToolbar>
                        <hr />
                    </div>
                </div>
            </div>

        </>
    );
}

export default DescripcionTour;