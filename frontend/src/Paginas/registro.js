import React from "react";
import { Form, Button, Schema, ButtonGroup } from 'rsuite';
import { Link } from 'react-router-dom';
import Encabezado from "../componentes/Encabezado";
import axios from "axios";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    name: StringType().isRequired('Campo obligatorio.'),
    email: StringType()
        .isEmail('Introduce un correo valido.')
        .isRequired('Campo obligatorio.'),
    phone: NumberType()
        .isRequired('Campo obligatorio'),
    password: StringType().isRequired('Campo obligatorio.'),
    verifyPassword: StringType()
        .addRule((value, data) => {
            console.log(data);

            if (value !== data.password) {
                return false;
            }

            return true;
        }, 'Las contraseñas no coinciden')
        .isRequired('Campo obligatorio.')
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
        name: '',
        email: '',
        age: '',
        password: '',
        verifyPassword: ''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Error en el formulario');
            return;
        }

        // Datos del formulario a enviar a la API
        const userData = {
            nombre: formValue.name,
            correo: formValue.email,
            password: formValue.password,
            contacto: formValue.phone
        };

        // Realizar la solicitud POST a la API para crear el usuario
        axios.post("/", userData)
            .then(response => {
                // Falta agregar una autenticacion
            })
            .catch(error => {
                console.error("Error al crear el usuario:", error);
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
                    <TextField name="name" label="Nombre completo" />
                    <TextField name="email" label="Email" />
                    <TextField name="phone" label="Telefono" type="number" min={0} max={9999999999} />
                    <TextField name="password" label="Contraseña" type="password" autoComplete="off" />
                    <TextField
                        name="verifyPassword"
                        label="Introduce tu contraseña nuevamente"
                        type="password"
                        autoComplete="off"
                    />

                    <Button color="green" appearance="primary" onClick={handleSubmit}> Finalizar </Button>
                    <Link to="/">
                        <Button color="red" appearance="subtle">Cancelar</Button>
                    </Link>

                </Form>
            </div>
        </>
    );
}

export default Login;

