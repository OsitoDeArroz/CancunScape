import React from "react";
import { Form, Button, Schema, ButtonGroup } from 'rsuite';
import { Link } from 'react-router-dom';
import Encabezado from "../componentes/Encabezado";
import axios from "axios";

const { StringType } = Schema.Types;

const model = Schema.Model({
    email: StringType()
        .isEmail('Introduce un correo valido.')
        .isRequired('Campo obligatorio.'),
    password: StringType().isRequired('Campo obligatorio.'),
});

const TextField = React.forwardRef((props, ref) => {
    const { name, label, accepter, ...rest } = props;
    return (
        <Form.Group controlId={`${name}-4`} ref={ref}>
            <Form.ControlLabel>{label} </Form.ControlLabel>
            <Form.Control name={name} accepter={accepter} {...rest} />
        </Form.Group>
    );
});

function Login() {

    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Error en el formulario');
            return;
        }
        
        // Datos del formulario a enviar a la API
        const userData = {
            correo: formValue.email,
            password: formValue.password,
        };

        // Realizar la solicitud POST a la API para crear el usuario
        axios.post("URL_DE_LA_API", userData)
            .then(response => {
                console.log("El usuario se creó correctamente");
                // Realizar acciones adicionales o redireccionar a otra página después de crear el usuario
            })
            .catch(error => {
                console.error("Error al crear el usuario:", error);
                // Manejar el error de acuerdo a tus necesidades
            });
    };

    return (
        <>
            <div align='center'>
                <Encabezado />
                <i className="bi bi-person fs-4"></i>
                <Form
                    ref={formRef}
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formValue={formValue}
                    model={model}
                >

                    <TextField name="email" label="Email" />
                    <TextField name="password" label="Contraseña" type="password" autoComplete="off" />
                    <ButtonGroup>
                        <Button color="green" appearance="primary" onClick={handleSubmit}>
                            Iniciar sesión
                        </Button>
                        <Link to="/">
                            <Button color="red" appearance="subtle">Cancelar</Button>
                        </Link>
                    </ButtonGroup>
                    <Link to="/registro">
                        <Button color="yellow" appearance="subtle">Crear cuenta</Button>
                    </Link>
                </Form>
            </div>
        </>
    );
}

export default Login;

