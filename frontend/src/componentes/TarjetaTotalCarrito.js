import React, { useState } from "react";
import { Button, Modal, Form, Message } from "rsuite";
import { FaCreditCard } from 'react-icons/fa';

function TarjetaTotalCarrito({ Titulo, Precio, pagar }) {
    const [showNotification, setShowNotification] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);

    };

    const handleOpen = () => {
        setOpen(true);

    };

    const cardTitleStyle = {
        fontFamily: 'Pacifico, cursive'
    };

    const cardTextStyle = {
        fontFamily: 'Roboto, sans-serif'
    };

    const handlePago = () => {
        handleClose();
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
            
        }, 5000);
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
                                value="Carlos Yahir Velazquez de la Cruz"
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

            {showNotification && (
                <div>
                    <>
                        <Message showIcon type="success" header="Pago exitoso">
                            El pago se realizo correctamente
                        </Message>
                    </>
                    <hr />
                </div>
            )}
        </>
    );
};

export default TarjetaTotalCarrito;



