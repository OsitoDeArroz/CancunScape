import React from "react";
import { Form, Button } from 'rsuite';
import Encabezado from "../componentes/Encabezado";

function Login() {
    return (
        <>
            <Encabezado />
            <i className="bi bi-person fs-4" align="center"></i>
            <Form align="center">
                <Form.Group controlId="email">
                    <Form.ControlLabel>Email</Form.ControlLabel>
                    <Form.Control name="email" type="email" />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.ControlLabel>Contraseña</Form.ControlLabel>
                    <Form.Control name="password" type="password" autoComplete="off" />
                </Form.Group>
                <Form.Group>
                    <Button color="green" appearance="primary" href="/">Iniciar sesion</Button>
                    <Button color="red" appearance="subtle" href="/">Cancelar</Button>
                </Form.Group>
                <Button color="yellow" appearance="subtle" href="/registro">Crear cuenta</Button>
            </Form>
        </>
    );
}


export default Login;
