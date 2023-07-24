import React from "react";
import { ButtonToolbar, Button, Modal, Form, DatePicker } from "rsuite";
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import axios from "axios";
import isBefore from 'date-fns/isBefore';

function TarjetaCarrito({ imgSrc, Titulo, Fecha, Precio, Adultos, Ninos, Reservacion, tour }) {
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive',
        fontSize: '24px',
        marginBottom: '10px',
    };

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '16px',
        marginBottom: '20px',
    };

    const [open, setOpen] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        fecha: null,
        adultos: 1,
        ninos: 0
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleEliminar = () => {
        axios.delete(`http://localhost:3001/reservas/${Reservacion}`)
            .then(response => {
                console.log("Se borró la reserva correctamente");
                window.location.reload();
            })
            .catch(error => {
                console.error('Error al eliminar la reserva:', error);
            });
    };

    const actualizarReserva = () => {
        const { fecha, adultos, ninos } = formValue; // Obtenemos los valores ingresados en el modal
        // Realizar la solicitud PATCH a la API con los datos actualizados

        axios.patch(`http://localhost:3001/reservas`, {
            id_reserva: Reservacion,
            fecha: fecha,
            usuario: 1, // Coloca el ID del usuario que realiza la reserva
            id_tour: tour,
            adultos: adultos,
            ninos: ninos
        })
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al actualizar la reserva: ", error);
            });
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Editar Reserva</Modal.Title>
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
                            <Form.ControlLabel>Adultos:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="adultos" // Asignamos el nombre del campo en el estado formValue
                                min={1} 
                                max={25}
                                onChange={(value) => setFormValue({ ...formValue, adultos: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Niños:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="ninos" // Asignamos el nombre del campo en el estado formValue
                                min={0} 
                                max={25}
                                onChange={(value) => setFormValue({ ...formValue, ninos: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={actualizarReserva} appearance="primary">
                        Confirmar
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="card mb-3">
                <img src={imgSrc} className="card-img-top" alt={Titulo} />
                <div className="card-body card-color">
                    <h4 className="card-title" style={cardTitleStyle}>{Titulo}</h4>
                    <p className="card-text" style={cardTextStyle}>Fecha: {Fecha}</p>
                    <p className="card-text" style={cardTextStyle}>Adultos: {Adultos}</p>
                    <p className="card-text" style={cardTextStyle}>Niños: {Ninos}</p>
                    <h5 className="card-text" style={cardTextStyle}>Precio unitario: MXN {Precio}</h5>
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


        </>
    );
};

export default TarjetaCarrito;
