import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Encabezado() {
    const location = useLocation();

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

            <nav className="navbar navbar-expand-lg navbar-dark bg-azul">
                <a className="navbar-brand mx-2" href="/">
                    <h4>Cancun Scape</h4>
                </a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/" className={`nav-item nav-link mx-3 ${location.pathname === '/' ? 'active' : ''}`}>
                            Inicio
                        </Link>
                        <Link to="/paquetes" className={`nav-item nav-link mx-3 ${location.pathname === '/paquetes' ? 'active' : ''}`}>
                            Paquetes
                        </Link>
                        <Link to="/promociones" className={`nav-item nav-link mx-3 ${location.pathname === '/promociones' ? 'active' : ''}`}>
                            Promociones
                        </Link>
                        <Link to="/nosotros" className={`nav-item nav-link mx-3 ${location.pathname === '/nosotros' ? 'active' : ''}`}>
                            Acerca de nosotros
                        </Link>
                    </div>
                </div>
                <a className="navbar-brand" href="/login">
                    <i className="bi bi-person fs-4"></i>
                </a>
            </nav>
        </>
    )
}

export default Encabezado;