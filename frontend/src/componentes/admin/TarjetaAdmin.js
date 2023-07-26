import React from "react";
import { ButtonToolbar, Button, Modal, Form, DatePicker, Input } from "rsuite";
import { FaRegEdit, FaTrashAlt, FaCalendar, FaMapMarkedAlt } from 'react-icons/fa';
import axios from "axios";
import isBefore from 'date-fns/isBefore';

function TarjetaAdmin({ id_tours, nombre_tours, descripcion_tours, fecha, duracion, lugar, imagen, precio }) {
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive',
        marginBottom: '10px',
        minHeight: '50px'

    }

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        maxHeight: '80px'
    };

    const recortarDescripcion = (texto, limitePalabras) => {
        const palabras = texto.split(' ');
        if (palabras.length <= limitePalabras) {
            return texto;
        } else {
            return palabras.slice(0, limitePalabras).join(' ') + '...';
        }
    };

    const [open, setOpen] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        id_tours: id_tours,
        nombre_tours: nombre_tours,
        descripcion_tours: descripcion_tours,
        fecha: fecha,
        duracion: duracion,
        lugar: lugar,
        imagen: imagen,
        precio: precio
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleEliminar = () => {
        axios.delete(`http://localhost:3001/tours/${id_tours}`)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error('Error al eliminar la reserva:', error);
            });
    };

    const actualizarTour = () => {
        const { id_tours, nombre_tours, descripcion_tours, fecha, duracion, lugar, imagen, precio } = formValue; // Obtenemos los valores ingresados en el modal
        // Realizar la solicitud PATCH a la API con los datos actualizados
        console.log(formValue)
        axios.patch(`http://localhost:3001/tours/${id_tours}`, {
            nombre: nombre_tours,
            descripcion: descripcion_tours,
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
    };

    const Textarea = React.forwardRef((props, ref) => <Input {...props} as="textarea" ref={ref} />);

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Editar Tour</Modal.Title>
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
                                name="nombre_tours" // Asignamos el nombre del campo en el estado formValue
                                min={1}
                                max={25}
                                onChange={(value) => setFormValue({ ...formValue, nombre_tours: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Descripcion:</Form.ControlLabel>
                            <Form.Control
                                name="descripcion_tours" // Asignamos el nombre del campo en el estado formValue
                                rows={5}
                                accepter={Textarea}
                                onChange={(value) => setFormValue({ ...formValue, descripcion_tours: value })} // Actualizamos el valor del campo en el estado formValue
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
                    <Button color="green" onClick={actualizarTour} appearance="primary">
                        Confirmar
                    </Button>
                    <Button color="red" onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="col-lg-4">
                <div className="card mb-3">
                    <img src={imagen} className="card-img-top" alt={nombre_tours} />
                    <div className="card-body card-color">
                        <h4 className="card-title" style={cardTitleStyle}>{nombre_tours}</h4>
                        <p className="card-text" style={cardTextStyle} > <FaCalendar/> Fecha: {fecha}</p>
                        <p className="card-text" style={cardTextStyle}> <FaMapMarkedAlt/> Lugar: {lugar}</p>
                        <p className="card-text" style={cardTextStyle}>Descripcion: {recortarDescripcion(descripcion_tours, 25)} </p>
                        <p className="card-text" style={cardTextStyle}>Duracion: {duracion} horas</p>
                        <h5 className="card-text" style={cardTextStyle}>Precio unitario: MXN {precio}</h5>
                        <ButtonToolbar >
                            <Button appearance="primary" startIcon={<FaRegEdit />} onClick={handleOpen}>
                                Editar
                            </Button>
                            <Button color="red" appearance="primary" startIcon={<FaTrashAlt />} onClick={handleEliminar}>
                                Eliminar
                            </Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TarjetaAdmin;
