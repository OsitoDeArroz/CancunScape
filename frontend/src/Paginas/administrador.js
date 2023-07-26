import React, { useState, useEffect } from "react";
import { FaPlus } from 'react-icons/fa';
import { Button, Modal, Form, DatePicker} from "rsuite";
import Encabezadoadministrador from "../componentes/Encabezadoadministrador";
import axios from "axios";
import TarjetaAdmin from "../componentes/TarjetaAdmin";
import isBefore from 'date-fns/isBefore';

function Administrador() {
    const [tours, setTours] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        nombre: "",
        descripcion: "",
        fecha: "",
        duracion: "",
        lugar: "",
        imagen: "",
        precio: ""
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de los tours
        axios.get('http://localhost:3001/tours')
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const toursData = response.data[0]; // Obtenemos la primera parte de la respuesta que contiene los datos de los tours
                setTours(toursData); // Actualizamos el estado con los datos recibidos
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    function crearTour() {
        const { nombre, descripcion, fecha, duracion, lugar, imagen, precio } = formValue; // Obtenemos los valores ingresados en el modal
        // Realizar la solicitud PATCH a la API con los datos actualizados

        axios.post(`http://localhost:3001/tours`, {
            nombre: nombre,
            descripcion: descripcion,
            fecha: fecha,
            duracion: duracion,
            lugar: lugar,
            imagen: imagen,
            precio: precio
        })
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al actualizar el tour: ", error);
            });
    }

    return (
        <>
            <Encabezadoadministrador />
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Crear Tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group>
                            <Form.ControlLabel>Fecha:</Form.ControlLabel>
                            <DatePicker
                                style={{ width: 160 }}
                                name="fecha" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, fecha: value })} // Actualizamos el valor del campo en el estado formValue
                                disabledDate={date => isBefore(date, new Date())}
                                disabledHours={hour => hour < 6 || hour > 20}
                                format="yyyy-MM-dd"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Nombre:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="nombre" // Asignamos el nombre del campo en el estado formValue
                                min={1}
                                max={25}
                                onChange={(value) => setFormValue({ ...formValue, nombre: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Descripcion:</Form.ControlLabel>
                            <Form.Control
                                name="descripcion" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, descripcion: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Lugar:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="lugar"
                                onChange={(value) => setFormValue({ ...formValue, lugar: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Duracion:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="duracion" // Asignamos el nombre del campo en el estado formValue
                                min={1}
                                onChange={(value) => setFormValue({ ...formValue, duracion: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>imagen:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="imagen" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, imagen: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Precio:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="precio" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, precio: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={crearTour} appearance="primary">
                        Confirmar
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div align="center">
                <Button color="green" appearance="primary" startIcon={<FaPlus />} onClick={handleOpen}> Agregar tour</Button>
            </div>
            <hr/>
            <div className="container">
                <div className="row">
                    {tours.map(tour => (
                        <TarjetaAdmin
                            imagen={tour.imagen}
                            nombre_tours={tour.nombre_tours}
                            descripcion_tours={tour.descripcion_tours}
                            duracion={tour.duracion}
                            fecha={tour.fecha_y_hora}
                            precio={tour.precio}
                            id_tours={tour.id_tours}
                            lugar={tour.lugar}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Administrador;