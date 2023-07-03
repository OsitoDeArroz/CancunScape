import React from "react";
import { Form, Button } from 'rsuite';

function Login() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />
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
