import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext";

function EncabezadoadministradorLog() {
const location = useLocation();
const { logout } = useAuth();

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

            <nav className="navbar navbar-expand-lg navbar-dark bg-azul-admin">
                <a className="navbar-brand mx-2" href="/">
                    <h4>Administrador</h4>
                </a>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link to="/admin/paquetes" className={`nav-item nav-link mx-3 ${location.pathname === '/admin/paquetes' ? 'active' : ''}`}>
                            Paquetes
                        </Link>
                        <Link to="/admin/reservas" className={`nav-item nav-link mx-3 ${location.pathname === '/admin/reservas' ? 'active' : ''}`}>
                            Reservas
                        </Link>
                        <Link to="/admin/usuarios" className={`nav-item nav-link mx-3 ${location.pathname === '/admin/usuarios' ? 'active' : ''}`}>
                            Usuarios
                        </Link>
                    </div>
                </div>
                <Link to="/admin/login" className="navbar-brand" onClick={() => {logout()}}>
                    <i className="bi bi-box-arrow-in-right fs-4"></i>
                </Link>
            </nav>
        </>
    )
}

export default EncabezadoadministradorLog;