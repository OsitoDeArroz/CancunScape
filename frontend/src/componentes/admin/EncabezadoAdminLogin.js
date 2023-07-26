import React from "react";
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";

function Encabezadoadministrador() {
const location = useLocation();

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

            <nav className="navbar navbar-expand-lg navbar-dark bg-azul-admin">
                <a className="navbar-brand mx-2" href="/">
                    <h4>Administrador</h4>
                </a>
            </nav>
        </>
    )
}

export default Encabezadoadministrador;