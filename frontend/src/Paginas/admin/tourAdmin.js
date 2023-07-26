import React, { useState, useEffect } from "react";
import { FaPlus, FaBrush } from 'react-icons/fa';
import { Button, Modal, Form, DatePicker, Schema, Input } from "rsuite";
import Encabezadoadministrador from "../../componentes/admin/Encabezadoadministrador";
import axios from "axios";
import TarjetaAdmin from "../../componentes/admin/TarjetaAdmin";
import isBefore from 'date-fns/isBefore';

const { StringType, NumberType, DateType } = Schema.Types;

const model = Schema.Model({
    nombre: StringType().isRequired('Campo obligatorio.'),
    descripcion: StringType().isRequired('Campo obligatorio.'),
    fecha: DateType().isRequired('Campo obligatorio'),
    duracion: StringType().isRequired('Campo obligatorio.'),
    lugar: StringType().isRequired('Campo obligatorio.'),
    imagen: StringType().isRequired('Campo obligatorio.'),
    precio: NumberType().isRequired('Campo obligatorio.'),
});

function TourAdmin() {
    const formRef = React.useRef();
    const [filteredTours, setFilteredTours] = useState([]);
    const [formError, setFormError] = React.useState({});
    const [searchTerm, setSearchTerm] = useState("");
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

    useEffect(() => {
        // Filtrar la lista de tours cuando el término de búsqueda cambie
        const filteredResults = tours.filter(tour =>
            // Verificar si el término de búsqueda se encuentra en cualquiera de los campos del tour
            Object.values(tour).some(fieldValue =>
                fieldValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredTours(filteredResults);
    }, [tours, searchTerm]);

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Error en el formulario');
            return;
        }

        // Datos del formulario a enviar a la API
        const userData = {
            nombre: formValue.nombre,
            descripcion: formValue.descripcion,
            fecha: formValue.fecha,
            duracion: formValue.duracion,
            lugar: formValue.lugar,
            imagen: formValue.imagen,
            precio: formValue.precio
        };

        axios.post(`http://localhost:3001/tours`, userData)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al crear el tour: ", error);
            });
    }

    return (
        <>
            <Encabezadoadministrador />
            <div align="center">
                <Form>
                    <Form.Group>
                        <Form.ControlLabel>Búsqueda:</Form.ControlLabel>
                        <Form.Control style={{ width: 300 }}
                            onChange={(value) => setSearchTerm(value)}
                            value={searchTerm}
                        />
                    </Form.Group>
                    <Button appearance="primary" startIcon={<FaBrush />} onClick={() => setSearchTerm("")}> Limpiar búsqueda </Button>
                    <Button color="green" appearance="primary" startIcon={<FaPlus />} onClick={handleOpen}> Agregar tour </Button>
                </Form>
            </div>
            <hr />
            <div className="container">
                <div className="row">
                    {filteredTours.map(tour => (
                        <TarjetaAdmin
                            key={tour.id_tours}
                            imagen={tour.imagen}
                            nombre_tours={tour.nombre_tours}
                            descripcion_tours={tour.descripcion_tours}
                            duracion={tour.duracion}
                            fecha={tour.fecha}
                            precio={tour.precio}
                            id_tours={tour.id_tours}
                            lugar={tour.lugar}
                        />
                    ))}
                </div>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Crear Tour</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form 
                    ref={formRef}
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formValue={formValue}
                    model={model}>
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
                            <Input 
                                as="textarea" 
                                rows={3}                                
                                name="descripcion" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, descripcion: value })}  />
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
                            <Form.ControlLabel>Imagen:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 300 }}
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
                    <Button color="green" appearance="primary" onClick={handleSubmit}>
                        Confirmar
                    </Button>
                    <Button color="red" appearance="subtle" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TourAdmin;