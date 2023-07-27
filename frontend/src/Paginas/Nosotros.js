import React from "react";
import MainHeader from "../componentes/MainHeader";

function Nosotros() {
    return (
        <>
            <MainHeader />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <img src={'https://images.pexels.com/photos/11447571/pexels-photo-11447571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} height={500} alt="e" />
                    </div>
                    <div className="col-lg-6">

                        <div align='center'>
                            <div className="card mb-3">
                                <div className="card-body card-color">
                                    <h1 className="text-center mt-5">Acerca de nosotros</h1>
                                    <p className="text-center">Bienvenido a Cancun Scape, tu mejor opción para descubrir los tesoros ocultos de Cancún y sus alrededores. Nos dedicamos a ofrecer emocionantes tours y experiencias únicas para que disfrutes al máximo de tu estancia en este paraíso tropical.</p>
                                    <p className="text-center">Nuestro equipo te llevará a través de aventuras inolvidables, desde explorar las antiguas ruinas mayas hasta nadar en cristalinas aguas turquesas y descubrir la rica biodiversidad de los arrecifes de coral.</p>
                                    <p className="text-center">No importa si eres un amante de la naturaleza, un buscador de emociones o un aficionado a la historia, tenemos el tour perfecto para ti. ¡Ven y únete a nosotros en Cancun Scape para vivir una experiencia inolvidable!</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Nosotros;