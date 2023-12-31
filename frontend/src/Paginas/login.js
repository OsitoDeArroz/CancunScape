import React from "react";
import { Form, Button, Schema, ButtonGroup, Notification } from 'rsuite';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../componentes/AuthContext';
import axios from "axios";
import MainHeader from "../componentes/MainHeader";

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
    const { login } = useAuth();
    const formRef = React.useRef();
    const navigate = useNavigate();
    const [formError, setFormError] = React.useState({});
    const [notificationVisible, setNotificationVisible] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    const handleSubmit = () => {

        // Datos del formulario a enviar a la API
        const userData = {
            correo: formValue.email,
            password: formValue.password
        };

        // Realizar la solicitud POST a la API para iniciar sesión

        axios.post("http://localhost:3001/usuarios/login", userData)
            .then(response => {
                if (response.data.success) {
                    login(response.data.usuario);
                    navigate("/");
                } else {
                    console.log(response.data.message);
                }
            })
            .catch(error => {
                console.error("Error al iniciar sesión: ");
                setNotificationVisible(true);
            });
    };


    const handleNotificationClose = () => {
        setNotificationVisible(false);
    };

    return (
        <>
            <div align='center'>
                <MainHeader />
                <i className="bi bi-person fs-4"></i>
                <Form
                    ref={formRef}
                    onChange={setFormValue}
                    onCheck={setFormError}
                    formValue={formValue}
                    model={model}
                >
                    {notificationVisible && (
                        <Notification closable type="error" header="Credenciales inválidas" onClose={handleNotificationClose}></Notification>
                    )}
                    <TextField name="email" label="Email" />
                    <TextField name="password" label="Contraseña" type="password" autoComplete="off" />
                    <ButtonGroup>
                        <Button color="green" appearance="primary" onClick={handleSubmit}>Iniciar sesion</Button>
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