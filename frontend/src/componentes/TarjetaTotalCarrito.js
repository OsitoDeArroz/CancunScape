import React, { useState } from "react";
import { Button, Modal, Form, Message } from "rsuite";
import { FaCreditCard } from 'react-icons/fa';
import axios from "axios";
import { useNavigate } from "react-router-dom";

function TarjetaTotalCarrito({ Titulo, Precio, pagar, id, reservaData, nombre }) {
    const [showNotification, setShowNotification] = useState({
        show: false,
        message: "",
        type: "success", // You can change the type to customize the message style
    });
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);

    };

    const handleOpen = () => {
        setOpen(true);

    };
    const Navigate = useNavigate();
    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive'
    };

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif'
    };

    const handlePago = () => {
        handleClose();
        setShowNotification({
            show: true,
            message: "El pago se realizó correctamente, espere un momento...",
            type: "success",
        });
        setTimeout(() => {
            setShowNotification({
                show: false,
                message: "",
                type: "success",
            });

            reservaData.forEach((reservation) => {
                const { fecha, id_usuario_id, id_tours_id, adultos, ninos, precio } = reservation;

                axios.post(`http://localhost:3001/reservas/`, {
                    fecha,
                    usuario: id_usuario_id,
                    tour: id_tours_id,
                    adultos,
                    ninos,
                    precio,
                })
                    .then(response => {

                        console.log("Reserva creada correctamente");
                        // Optionally, you can do something with the response if needed.
                    })
                    .catch(error => {
                        console.error('Error al crear la reserva:', error);
                        // Optionally, you can handle the error if needed.
                    });
            });
            clearCarrito();
            Navigate("/reservas")
        }, 5000);


    };

    const clearCarrito = () => {

        const id_usuario_id = reservaData.length > 0 ? reservaData[0].id_usuario_id : null;

        // Check if id_usuario_id is available before making the delete request
        if (id_usuario_id) {
            axios.delete(`http://localhost:3001/carritos/borrar/${id_usuario_id}`)
                .then(response => {
                    window.location.reload();
                })
                .catch(error => {
                    console.error('Error al eliminar la reserva:', error);
                });
        } else {
            console.error('ID de usuario no encontrado en reservaData.');
        }

    };


    return (
        <>
            <h4 className="card-title" style={cardTitleStyle}>Detalle de su compra</h4>
            <hr></hr>


            <div className="total-container">
                <h5 className="card-text" style={cardTextStyle}>Total a pagar:</h5>
                <h5 className="card-text" style={cardTextStyle}>MXN {Precio}</h5>
            </div>
            <div className="mt-auto" align="center">

                <Button color="yellow" appearance="primary" startIcon={<FaCreditCard />} block disabled={pagar} onClick={handleOpen} > Pagar</Button>
            </div>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Inserta los datos de tu tarjeta</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.ControlLabel>Nombre de beneficiario:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 300 }}
                                value={nombre}
                                name="nombre" // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Numero de tarjeta:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 300 }}
                                value="4846-8496-4576-8375"
                                name="numtarjeta"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Fecha de vencimiento:</Form.ControlLabel>
                            <Form.Control
                                value="8/2025"
                                name="vencimiento" // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>CVV:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                value="312"
                                name="cvv" // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group align="center">
                            <Form.ControlLabel>Precio total: {Precio}</Form.ControlLabel>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="green" appearance="primary" onClick={handlePago}>
                        Confirmar
                    </Button>
                    <Button color="red" appearance="subtle" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>

            {showNotification.show && (
                <div className="overlay">
                    <div className="message-container">
                        <Message
                            showIcon
                            type={showNotification.type}
                            header="Pago exitoso"
                            description={showNotification.message}
                        >El pago se realizo correctamente, espere un momento...</Message>
                    </div>
                </div>
            )}
        </>
    );
};

export default TarjetaTotalCarrito;



