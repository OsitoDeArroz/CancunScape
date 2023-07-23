import React, { useState, useEffect } from "react";
import Encabezado from "./Encabezado";
import { Link, useParams } from "react-router-dom";
import { Button, ButtonToolbar } from "rsuite";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import "../assets/css/descripcionTour.css";
import axios from "axios";

function DescripcionTour() {
    const { id } = useParams(); // Obtener la ID del tour desde la URL
    const [tour, setTour] = useState(null);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los detalles del tour por ID
        axios.get(`http://localhost:3001/tours/${id}`)
            .then(response => {
                // En este punto, la respuesta contiene los detalles del tour con la ID especificada
                const tourData = response.data;
                setTour(tourData); // Actualizamos el estado con los datos recibidos
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, [id]);

    if (!tour) {
        // Muestra un mensaje de carga o maneja el estado mientras se obtienen los datos
        return <div>Cargando...</div>;
    }

    return (
        <>
            <Encabezado />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Detalles</h2>
                        <hr />
                        <img src={tour.imagen} className="img-fluid" alt="Imagen" />
                    </div>
                    <div className="col-lg-6">

                        <h3 className="desc-title">{tour.nombre_tours}</h3>
                        <p className="desc-text">{tour.descripcion_tours}</p>
                        <p className="desc-text">Duracion: {tour.duracion} dias</p>
                        <h4>Reserva</h4>
                        <div className="mb-3">
                            <label htmlFor="fecha">Fecha:</label>
                            <input type="date" id="fecha" name="fecha" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="adultos">Adultos:</label>
                            <input type="number" id="adultos" name="adultos" className="form-control" min="0" max="25" />
                            <span id="precioAdultos" hidden>$0</span>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="ninos">Niños:</label>
                            <input type="number" id="ninos" name="ninos" className="form-control" min="0" max="20" />
                            <span id="precioNinos" hidden>$0</span>
                        </div>
                        <h5>Total: <span id="precioTotal">{tour.precio} MXN</span></h5>
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