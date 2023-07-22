import React from "react";
import { Button } from "rsuite";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Encabezado from "./Encabezado";
import TarjetaCarrito from "./TarjetaCarrito";
import importImages from "./ImportImagenes";
import TarjetaTotalCarrito from "./TarjetaTotalCarrito";

const images = importImages(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/)); //se guardan todas las imagenes dentro de la carpeta images

function Carrito() {
    return (
        <>
            <Encabezado />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <TarjetaCarrito
                            imgSrc={images['snorkel.png']}
                            Titulo="Xcaret Plus"
                            Precio={5000}
                            onEdit={() => console.log("Editar")}
                            onRemove={() => console.log("Remover")} />

                        <TarjetaCarrito
                            imgSrc={images['excursion.png']}
                            Titulo="Chichén Itzá y Valladolid - Baño en Cenote y Almuerzo"
                            Precio={5000}
                            onEdit={() => console.log("Editar")}
                            onRemove={() => console.log("Remover")} />

                    </div>
                    <div className="col-lg-6">
                        <div align='center'>
                            <div className="card mb-3">
                                <div className="card-body card-color">
                                    <TarjetaTotalCarrito
                                        Titulo='Chichén Itzá y Valladolid - Baño en Cenote y Almuerzo'
                                        Precio={5000}
                                    />
                                </div>
                            </div>

                            <Link to="/descripcion">
                                <Button appearance="primary" startIcon={<FaArrowLeft />}>Regresar</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carrito;