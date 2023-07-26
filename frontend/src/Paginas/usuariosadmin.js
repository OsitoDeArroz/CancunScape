import React, { useState, useEffect } from "react";
import Encabezadoadministrador from "../componentes/Encabezadoadministrador";
import axios from "axios";
import TablaUsuario from "../componentes/TablaUsuario";

function Usuariosadmin() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de los tours
        axios.get('http://localhost:3001/usuarios')
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const usuariosData = response.data; // Obtenemos la primera parte de la respuesta que contiene los datos de los tours
                setUsuarios(usuariosData); // Actualizamos el estado con los datos recibidos
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);
    console.log(usuarios);
    return (
        <>
            <Encabezadoadministrador />
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Contacto</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-active">
                        {usuarios.map(usuario => (
                            <TablaUsuario
                                id_usuario={usuario.id_usuario}
                                nombre={usuario.nombre_completo}
                                fecha={usuario.fecha_registro}
                                correo={usuario.correo_electronico}
                                contacto={usuario.contacto}
                                rol={usuario.nombre_rol}
                            />
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Usuariosadmin;