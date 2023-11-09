import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate  } from "react-router-dom";
import { Form, ButtonToolbar, Button, DatePicker, InputNumber } from "rsuite";
import { FaCartPlus, FaArrowLeft } from "react-icons/fa";
import "../assets/css/descripcionTour.css";
import axios from "axios";
import isBefore from 'date-fns/isBefore';
import Cookies from "js-cookie";
import MainHeader from "./MainHeader";

function DescripcionTour() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Obtener el contenido de la cookie 'user' y convertirlo a un objeto
        const storedUser = Cookies.get('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser)); // Decoding the URI component
        }
    }, []);

    const { id } = useParams(); // Obtener la ID del tour desde la URL
    const usuario = user ? user.id_usuario : "";

    const [tour, setTour] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidadAdultos, setCantidadAdultos] = useState(1);
    const [cantidadNinos, setCantidadNinos] = useState(0);
    const [selectedDate, setSelectedDate] = useState(null)

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

    // Función para calcular el precio total
    const calcularTotal = () => {
        const precioAdultos = tour[0].precio * cantidadAdultos;
        const precioNinos = cantidadNinos * (tour[0].precio - 100);
        return precioAdultos + precioNinos;
    };

    const reservarTour = () => {
        if (usuario) {
            const reservaData = {
                usuario: usuario, // usuario que realiza la reserva 
                tour: tour[0].id_tours, // tour que se está reservando
                adultos: cantidadAdultos,
                ninos: cantidadNinos,
                fecha: selectedDate, // fecha seleccionada
                precio: tour[0].precio
            };

            // Realizar la solicitud POST a la API con los datos de la reserva
            axios.post("http://localhost:3001/carritos", reservaData)
                .then(response => {
                    window.location.reload(); // Recargamos la página del carrito después de hacer la reserva
                })
                .catch(error => {
                    console.error("Error al hacer la reserva:", error);
                });
        }else{
            navigate("/login")
        }
    };

    return (
        <>
            <MainHeader />

            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h2>Detalles</h2>
                        <hr />
                        <img src={tour[0].imagen} className="img-fluid" alt="Imagen" maxHeight="300" />
                        <hr />
                    </div>
                    <div className="col-lg-6">
                        <div className="card mb-3">
                            <div className="card-body card-color">
                                <h3 className="desc-title">{tour[0].nombre_tours}</h3>
                                <p className="desc-text">{tour[0].descripcion_tours}</p>
                                <p className="desc-text">Duracion: {tour[0].duracion} dias</p>
                                <h4>Reserva</h4>
                                <h5 className="desc-text" align='center'>Total: MXN {calcularTotal()}</h5>
                                <Form>
                                    <Form.Group controlId="fecha-3">
                                        <Form.ControlLabel>Fecha y hora:</Form.ControlLabel>
                                        <DatePicker style={{ width: 160 }} shouldDisableDate={date => isBefore(date, new Date())} shouldDisableHour={hour => hour < 6 || hour > 20} format="yyyy-MM-dd" onChange={value => setSelectedDate(value)} required />
                                    </Form.Group>
                                    <Form.Group controlId="adultos-3">
                                        <Form.ControlLabel>Adultos:</Form.ControlLabel>
                                        <Form.Control style={{ width: 160 }} value={cantidadAdultos} name="adultos" type="number" min={1} max={25} accepter={InputNumber} onChange={value => setCantidadAdultos(parseInt(value, 10))} />
                                    </Form.Group>
                                    <Form.Group controlId="ninos-3">
                                        <Form.ControlLabel>Niños:</Form.ControlLabel>
                                        <Form.Control style={{ width: 160 }} value={cantidadNinos} name="ninos" type="number" min={0} max={20} accepter={InputNumber} onChange={value => setCantidadNinos(parseInt(value, 10))} />
                                    </Form.Group>
                                    <Form.Group>
                                        <ButtonToolbar>
                                            <Link to={`/carrito/${usuario}`}>
                                                <Button color="green" appearance="primary" startIcon={<FaCartPlus />} onClick={reservarTour} >
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
                        <hr />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DescripcionTour;
