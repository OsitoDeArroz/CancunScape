import React from "react";
import { Form, Button } from 'rsuite';
import { Link } from 'react-router-dom';
import Encabezado from "../componentes/Encabezado";

function Login() {
    return (
        <>
            <div align='center'>
                <Encabezado />
                <i className="bi bi-person fs-4"></i>
                <Form>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Contraseña</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                        <Link to="/">
                            <Button color="green" appearance="primary">Iniciar sesión</Button>
                        </Link>
                        <Link to="/">
                            <Button color="red" appearance="subtle">Cancelar</Button>
                        </Link>
                    </Form.Group>

                    <Link to="/registro">
                        <Button color="yellow" appearance="subtle">Crear cuenta</Button>
                    </Link>
                </Form>
            </div>
        </>
    );
}

export default Login;

