import React, { useState, useEffect } from "react";
import { FaPlus, FaBrush, FaTrash, FaRegEdit } from 'react-icons/fa';
import { Button, Form, Modal, Schema, Notification, InputPicker } from "rsuite";
import Encabezadoadministrador from "../../componentes/admin/Encabezadoadministrador";
import axios from "axios";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
    nombre: StringType().isRequired('Campo obligatorio.'),
    correo: StringType()
        .isEmail('Introduce un correo valido.')
        .isRequired('Campo obligatorio.'),
    contacto: NumberType()
        .isRequired('Campo obligatorio'),
    password: StringType().isRequired('Campo obligatorio.'),
});

const data = [
    { label: 'Admin', value: 1 },
    { label: 'Cliente', value: 2 }
];

function UsuariosAdmin() {
    const formRef = React.useRef();
    const [usuarios, setUsuarios] = useState([]);
    const [filteredUsuarios, setFilteredUsuarios] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = React.useState(false);
    const [notificationVisible, setNotificationVisible] = React.useState(false);
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        nombre: '',
        correo: '',
        contacto: '',
        password: '',
        rol: ''
    });
    

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de los usuarios
        axios.get('http://localhost:3001/usuarios')
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const usuariosData = response.data; // Obtenemos la primera parte de la respuesta que contiene los datos de los usuarios
                setUsuarios(usuariosData); // Actualizamos el estado con los datos recibidos
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            console.error('Error en el formulario');
            return;
        }

        // Datos del formulario a enviar a la API
        const userData = {
            nombre: formValue.nombre,
            correo: formValue.correo,
            password: formValue.password,
            contacto: formValue.contacto,
            rol: formValue.rol
        };

        // Realizar la solicitud POST a la API para crear el usuario
        axios.post("http://localhost:3001/usuarios/registroAdm", userData)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al crear el usuario:", error);
                setNotificationVisible(true);
            });

    };

    useEffect(() => {
        // Filtrar la lista de usuarios cuando el término de búsqueda cambie
        const filteredResults = usuarios.filter(usuario =>
            // Verificar si el término de búsqueda se encuentra en cualquiera de los campos del usuario
            Object.values(usuario).some(fieldValue =>
                fieldValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredUsuarios(filteredResults);
    }, [usuarios, searchTerm]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleNotificationClose = () => {
        setNotificationVisible(false);
    };

    const handleDeleteUsuario = (id_usuario) => {
        // Realizar la solicitud DELETE a la API para eliminar el usuario

        axios.delete(`http://localhost:3001/usuarios/${id_usuario}`)
            .then(response => {
                // Actualizar la lista de usuarios después de eliminar el usuario
                window.location.reload();
            })
    };


    return (
        <>
            <Encabezadoadministrador />
            <div align="center">
                <Form>
                    <Form.Group>
                        <Form.ControlLabel>Búsqueda:</Form.ControlLabel>
                        <Form.Control style={{ width: 300 }}
                            onChange={(value) => setSearchTerm(value)}
                            value={searchTerm}
                        />
                    </Form.Group>
                    <Button appearance="primary" startIcon={<FaBrush />} onClick={() => setSearchTerm("")}> Limpiar búsqueda </Button>
                    <Button color="green" appearance="primary" startIcon={<FaPlus />} onClick={handleOpen}> Agregar usuario </Button>
                </Form>
                <hr />
            </div>
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Teléfono</th>
                        <th>Rol</th>
                        <th>Editar</th>
                        <th>Eliminar</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {filteredUsuarios.map(usuario => (
                        <tr>
                            <td>{usuario.nombre_completo}</td>
                            <td>{usuario.correo_electronico}</td>
                            <td>{usuario.contacto}</td>
                            <td>{usuario.nombre_rol}</td>
                            <td>
                                <Button appearance="primary" startIcon={<FaRegEdit />} > </Button>
                            </td>
                            <td>
                                <Button color="red" appearance="primary" startIcon={<FaTrash />} onClick={() => handleDeleteUsuario(usuario.id_usuario)}> </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Agregar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form
                        ref={formRef}
                        onChange={setFormValue}
                        onCheck={setFormError}
                        formValue={formValue}
                        model={model}
                    >
                        {notificationVisible && (
                            <Notification closable type="error" header="Correo en uso" onClose={handleNotificationClose}></Notification>
                        )}

                        <Form.Group>
                            <Form.ControlLabel>Nombre:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="nombre" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, nombre: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Contraseña:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="password"
                                type="password"
                                autoComplete="off"
                                onChange={(value) => setFormValue({ ...formValue, password: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Teléfono:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="contacto" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, contacto: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Correo:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="correo"
                                onChange={(value) => setFormValue({ ...formValue, correo: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Rol:</Form.ControlLabel>
                            <InputPicker data={data} placeholder="Selecciona el rol" name="rol" style={{ width: 224 }} onChange={(value) => setFormValue({ ...formValue, rol: value })} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="green" onClick={handleSubmit} appearance="primary">
                        Confirmar
                    </Button>
                    <Button color="red" appearance="subtle" onClick={handleClose}>Cancelar</Button>
                </Modal.Footer>
            </Modal>

            
        </>
    )
}

export default UsuariosAdmin;
