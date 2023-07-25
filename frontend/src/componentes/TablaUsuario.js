import React from "react";
import { Button, Modal, Form } from "rsuite";
import axios from "axios";

function TablaUsuario(id_usuario, nombre, correo, fecha, contacto, rol) {

    const [open, setOpen] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        id_usuario: id_usuario,
        nombre: nombre,
        correo: correo,
        fecha: fecha,
        contacto: contacto,
        rol: rol
    });

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    const handleEliminar = () => {
        axios.delete(`http://localhost:3001/usuarios/${id_usuario}`)
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error('Error al eliminar el usuario:', error);
            });
    };

    const actualizarUsuario = () => {
        const { id_usuario, nombre, correo, fecha, contacto, rol } = formValue; // Obtenemos los valores ingresados en el modal
        // Realizar la solicitud PATCH a la API con los datos actualizados

        axios.patch(`http://localhost:3001/usuarios`, {
            id_usuario: id_usuario,
            nombre: nombre,
            correo: correo,
            fecha: fecha,
            contacto: contacto,
            rol: rol
        })
            .then(response => {
                window.location.reload();
            })
            .catch(error => {
                console.error("Error al actualizar el tour: ", error);
            });
    };

    return (
        <>
            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Editar usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group>
                            <Form.ControlLabel>Nombre:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="nombre" // Asignamos el nombre del campo en el estado formValue
                                min={1}
                                max={25}
                                onChange={(value) => setFormValue({ ...formValue, nombre: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Correo:</Form.ControlLabel>
                            <Form.Control
                                name="correo" // Asignamos el nombre del campo en el estado formValue
                                onChange={(value) => setFormValue({ ...formValue, correo: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Contacto:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="contacto"
                                onChange={(value) => setFormValue({ ...formValue, contacto: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Rol:</Form.ControlLabel>
                            <Form.Control
                                style={{ width: 160 }}
                                name="rol" // Asignamos el nombre del campo en el estado formValue
                                min={1}
                                max={2}
                                onChange={(value) => setFormValue({ ...formValue, rol: value })} // Actualizamos el valor del campo en el estado formValue
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={actualizarUsuario} appearance="primary">
                        Confirmar
                    </Button>
                    <Button onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
            //agregar la tabla de usuario
        </>
    );
};

export default TablaUsuario;


