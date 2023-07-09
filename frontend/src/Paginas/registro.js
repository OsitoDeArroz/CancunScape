import React from "react";
import { Form, Button } from 'rsuite';
import Encabezado from "../componentes/Encabezado";

function Registro() {
    return (
        <>
        <Encabezado/>
            <Form align="center">
                <Form.Group controlId="nombre">
                    <Form.ControlLabel>Nombre</Form.ControlLabel>
                    <Form.Control name="nombre" />
                </Form.Group>
                <Form.Group controlId="apellidos">
                    <Form.ControlLabel>Apellidos</Form.ControlLabel>
                    <Form.Control name="apellidos" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.ControlLabel>Contraseña</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.ControlLabel>Confirmar contraseña</Form.ControlLabel>
                    <Form.Control name="passwordConfirm" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                    <Button color="green" appearance="primary" href="/">Finalizar</Button>
                    <Button color="red" appearance="subtle" href="/">Cancelar</Button>
                </Form.Group>
            </Form>
        </>
    );
}

export default Registro;
