import React, { useState, useEffect } from "react";
import axios from "axios";
import Tarjetapromocion from "../componentes/Tarjetapromocion";
import MainHeader from "../componentes/MainHeader";

function Promociones() {
    const [promociones, setPromociones] = useState([]);

    useEffect(() => {
        // Hacer la solicitud GET a la API para obtener los datos de los tours
        axios.get('http://localhost:3001/promociones')
            .then(response => {
                // En este punto, la respuesta contiene los datos del servidor
                const promocionesData = response.data; // La respuesta es un array de promociones
                setPromociones(promocionesData); // Actualizamos el estado con los datos recibidos
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
                    {promociones.map(promocion => (
                        <Tarjetapromocion
                            key={promocion.id_promociones}
                            imgSrc={promocion.imagen}
                            title={promocion.titulo_promocion}
                            description={promocion.descripcion_promocion}
                            duration={promocion.duracion}
                            previous_price={promocion.precio_anterior}
                            new_price={promocion.precio_nuevo}
                            link={promocion.id_promociones}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Promociones;
