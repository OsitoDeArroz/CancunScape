import React, { useState, useEffect } from "react";
import { FaPlus, FaBrush } from 'react-icons/fa';
import { Button, Modal, Form, DatePicker, Schema, InputPicker } from "rsuite";
import Encabezadoadministrador from "../../componentes/admin/Encabezadoadministrador";
import axios from "axios";
import TarjetaCarrito from "../../componentes/TarjetaCarrito";
import isBefore from 'date-fns/isBefore';
import TarjetaAdminReservas from "../../componentes/admin/TarjetaAdminReservas";

function ReservasAdmin() {
    const [reservas, setReservas] = useState([]);
    const [filteredReservas, setFilteredReservas] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [open, setOpen] = useState(false);
    const [formValue, setFormValue] = useState({
        nombre_tours: "",
        nombre_usuario: "",
        fecha: "",
        cant_adultos: 1,
        cant_ninos: 0,
        // Otros campos del formulario de creación de reservas
    });
    const [tours, setTours] = useState([]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    useEffect(() => {
        axios.get(`http://localhost:3001/tours`)
            .then(response => {
                const toursData = response.data[0];
                setTours(toursData);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:3001/reservas`)
            .then(response => {
                const reservasData = response.data; // Acceder a la propiedad "reservas" de la respuesta
                setReservas(reservasData);
                console.log(reservasData);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    useEffect(() => {
        // Filtrar la lista de reservas cuando el término de búsqueda cambie
        const filteredResults = reservas.filter(reserva =>
            // Verificar si el término de búsqueda se encuentra en cualquiera de los campos de la reserva
            Object.values(reserva).some(fieldValue =>
                fieldValue.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setFilteredReservas(filteredResults);
    }, [reservas, searchTerm]);

    function crearReserva() {
        const { nombre_tours, fecha, cant_adultos, cant_ninos } = formValue;

        // Realizar la solicitud POST a la API con los datos de la nueva reserva
        axios.post(`http://localhost:3001/reservas`, {
            nombre_tours: nombre_tours,
            fecha: fecha,
            cant_adultos: cant_adultos,
            cant_ninos: cant_ninos,
            // Otros campos de la reserva
        })
            .then(response => {
                // Actualizar la lista de reservas con la nueva reserva creada
                setReservas([...reservas, response.data]);
                // Cerrar el modal después de crear la reserva
                handleClose();
            })
            .catch(error => {
                console.error("Error al crear la reserva:", error);
            });
    }

    return (
        <>
            <Encabezadoadministrador />
            <div align="center">
                <Form>
                    <Form.Group>
                        <Form.ControlLabel>Búsqueda:</Form.ControlLabel>
                        <Form.Control
                            style={{ width: 300 }}
                            onChange={(value) => setSearchTerm(value)}
                            value={searchTerm}
                        />
                    </Form.Group>
                    <Button
                        appearance="primary"
                        startIcon={<FaBrush />}
                        onClick={() => setSearchTerm("")}
                    >
                        Limpiar búsqueda
                    </Button>
                    <Button
                        color="green"
                        appearance="primary"
                        startIcon={<FaPlus />}
                        onClick={handleOpen}
                    >
                        Agregar reserva
                    </Button>
                </Form>
            </div>
            <hr />
            <div className="container">
                {filteredReservas.map(reserva => (
                    <TarjetaAdminReservas
                        key={reserva.id_reservas}
                        imgSrc={reserva.imagen}
                        Titulo={reserva.nombre_tours}
                        Fecha={reserva.fecha_reserva}
                        Precio={reserva.precio_unitario}
                        Adultos={reserva.cant_adultos}
                        Ninos={reserva.cant_ninos}
                        Reservacion={reserva.id_reservas}
                        tour={reserva.id_tours_id}
                        nombre={reserva.nombre_completo}
                    />
                ))}
            </div>

            <Modal open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Crear Reserva</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={setFormValue} formValue={formValue}>
                        <Form.Group>
                            <Form.ControlLabel>Tour:</Form.ControlLabel>
                            <InputPicker
                                data={tours}
                                labelKey="nombre_tours"
                                valueKey="id_tours"
                                style={{ width: '100%' }}
                                name="nombre_tours"
                                onChange={value => setFormValue({ ...formValue, nombre_tours: value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Fecha:</Form.ControlLabel>
                            <DatePicker
                                style={{ width: 160 }}
                                name="fecha"
                                onChange={value => setFormValue({ ...formValue, fecha: value })}
                                shouldDisableDate={date => isBefore(date, new Date())}
                                shouldDisabledHours={hour => hour < 6 || hour > 20}
                                format="yyyy-MM-dd"
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Adultos:</Form.ControlLabel>
                            <Form.Control
                                name="cant_adultos"
                                onChange={value => setFormValue({ ...formValue, cant_adultos: value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.ControlLabel>Niños:</Form.ControlLabel>
                            <Form.Control
                                name="cant_ninos"
                                onChange={value => setFormValue({ ...formValue, cant_ninos: value })}
                            />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="green" onClick={crearReserva} appearance="primary">
                        Confirmar
                    </Button>
                    <Button color="red" onClick={handleClose} appearance="subtle">
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReservasAdmin;
