import React, { useState, useEffect } from "react";
import { Carousel } from "rsuite";
import { Link } from "react-router-dom";
import axios from "axios";

function Carrusel() {
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
            <Carousel autoplay className="custom-slider">
                {tours.slice(0, 5).map(tour => (
                    <Link key={tour.id_tours} to={`/descripcion/${tour.id_tours}`}>
                        <img src={tour.imagen} height="100%" width="100%" alt={tour.nombre_tours} />
                    </Link>
                ))}
            </Carousel>
        </>
    );
}

export default Carrusel;
