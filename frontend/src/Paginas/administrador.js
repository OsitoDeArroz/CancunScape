import React, { useState, useEffect } from "react";
import Encabezado from "../componentes/Encabezado";
import Carrusel from "../componentes/Carrucel";
import axios from "axios";
import TarjetaTour from "../componentes/TarjetaTour";

function Administrador() {
    const [tours, setTours] = useState([]);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de los tours
        axios.get('http://localhost:3001/tours')
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const toursData = response.data[0]; // Obtenemos la primera parte de la respuesta que contiene los datos de los tours
                setTours(toursData); // Actualizamos el estado con los datos recibidos
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    return (
        <>
            <Encabezado />
            <hr />
            <div className="container">
                <div className="row">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
                </div>
            </div>
        </>
    )
}

export default Administrador;