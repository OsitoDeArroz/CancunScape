import React from "react";
import { Form, Button } from 'rsuite';
import Encabezado from "../componentes/Encabezado";
import { Link } from "react-router-dom";

function Registro() {

    return (
        <>
            <div align="center">
                <Encabezado />
                <Form>
                    <Form.Group controlId="nombre">
                        <Form.ControlLabel>Nombre completo</Form.ControlLabel>
                        <Form.Control name="nombre" placeholder="Nombre"/>
                    </Form.Group>
                    <Form.Group controlId="contacto">
                        <Form.ControlLabel>Telefono</Form.ControlLabel>
                        <Form.Control name="contacto" type="number" placeholder="1234567890"/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" placeholder="email@email.com"/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Contraseña</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" placeholder="*********"/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Confirmar contraseña</Form.ControlLabel>
                        <Form.Control name="passwordConfirm" type="password" autoComplete="off" placeholder="*********"/>
                    </Form.Group>
                    <Form.Group>
                        <Link to="/">
                            <Button color="green" appearance="primary">Finalizar</Button>
                        </Link>
                        <Link to="/">
                            <Button color="red" appearance="subtle">Cancelar</Button>
                        </Link>
                    </Form.Group>
                </Form>
            </div>
        </>
    );
}

export default Registro;
