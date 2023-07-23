import React, { useState, useEffect } from "react";
import Encabezado from "./Encabezado";
import { Link, useParams } from "react-router-dom";
import { Form, ButtonToolbar, Button, DatePicker, ButtonGroup } from "rsuite";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import "../assets/css/descripcionTour.css";
import axios from "axios";
import isBefore from 'date-fns/isBefore';

function DescripcionTour() {
    const { id } = useParams(); // Obtener la ID del tour desde la URL
    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los detalles del tour por ID
        axios
            .get(`http://localhost:3001/tours/${id}`)
            .then((response) => {
                // En este punto, la respuesta contiene los detalles del tour con la ID especificada
                const tourData = response.data;
                setTour(tourData); // Actualizamos el estado con los datos recibidos
                setLoading(false); // La carga de datos ha finalizado, actualizamos el estado de carga
            })
            .catch((error) => {
                console.error("Error al hacer la solicitud:", error);
                setLoading(false); // La carga de datos ha finalizado, actualizamos el estado de carga
            });
    }, [id]);

    if (loading) {
        // Muestra un mensaje de carga mientras se obtienen los datos
        return <div>Cargando...</div>;
    }

    if (!tour) {
        // Manejo de error si los datos no se obtienen correctamente
        return <div>Error al cargar los datos del tour</div>;
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
                        <p className="desc-text">Duracion: {tour?.duracion} dias</p>
                        <h4>Reserva</h4>
                        <Form >
                            <Form.Group controlId="email">
                                <DatePicker disabledDate={date => isBefore(date, new Date())} disabledHours={hour => hour < 6 || hour > 20} format="yyyy-MM-dd HH:mm" />
                            </Form.Group>
                            <Form.Group controlId="adultos">
                                <Form.ControlLabel>Adultos:</Form.ControlLabel>
                                <Form.Control name="adultos" type="number" min={0} max={25} />
                            </Form.Group>
                            <Form.Group controlId="ninos">
                                <Form.ControlLabel>Niños:</Form.ControlLabel>
                                <Form.Control name="adultos" type="number" min={0} max={20} />
                            </Form.Group>
                            <Form.Group>
                                <ButtonToolbar>
                                    <Link to="/carrito">
                                        <Button color="green" appearance="primary" startIcon={<FaCartPlus />}>
                                            Reservar
                                        </Button>
                                    </Link>
                                    <Link to="/paquetes">
                                        <Button appearance="primary" startIcon={<FaArrowLeft />}>
                                            Regresar
                                        </Button>
                                    </Link>
                                </ButtonToolbar>
                            </Form.Group>
                        </Form>

                    </div>
                </div>
            </div>
        </>
    );
}

export default DescripcionTour;
