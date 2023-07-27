import React, { useState, useEffect } from 'react';
import TarjetaTour from "../componentes/TarjetaTour";
import axios from 'axios';
import MainHeader from '../componentes/MainHeader';

function Paquetes() {
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
            <MainHeader />
            <div className="container">
                <div className="row">
                    {tours.map(tour => (
                        <TarjetaTour
                            imgSrc={tour.imagen}
                            title={tour.nombre_tours}
                            description={tour.descripcion_tours}
                            duration={tour.duracion}
                            price={tour.precio}
                            link={tour.id_tours}
                        />
                    ))}
                </div>
            </div>

        </>
    );
}

export default Paquetes;


