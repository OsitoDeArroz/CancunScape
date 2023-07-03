import React from "react";
import Encabezado from "../componentes/Encabezado";

function Nosotros() {
    return (
        <>
            <Encabezado />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <h1 className="text-center mt-5">Acerca de nosotros</h1>
                        <p className="text-center">Bienvenido a Cancun Scape, tu mejor opción para descubrir los tesoros ocultos de Cancún y sus alrededores. Nos dedicamos a ofrecer emocionantes tours y experiencias únicas para que disfrutes al máximo de tu estancia en este paraíso tropical.</p>
                        <p className="text-center">Nuestro equipo te llevará a través de aventuras inolvidables, desde explorar las antiguas ruinas mayas hasta nadar en cristalinas aguas turquesas y descubrir la rica biodiversidad de los arrecifes de coral.</p>
                        <p className="text-center">No importa si eres un amante de la naturaleza, un buscador de emociones o un aficionado a la historia, tenemos el tour perfecto para ti. ¡Ven y únete a nosotros en Cancun Scape para vivir una experiencia inolvidable!</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="text-center">Contacto</h2>
                        <p className="text-center">¡Contáctanos para obtener más información sobre nuestros tours y reservas!</p>
                        <a href="/contacto" className="btn btn-primary d-block mx-auto">Contactar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros;