import React from "react";
import Button from "rsuite/cjs/Button";

function Login() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

            <form action="/">
                <div align="center">
                    <i className="bi bi-person fs-4" align="center"></i>
                    <div className="form-floating mb-3" align="center">
                        <input type="email" className="form-control" id="LoginCorreo" placeholder="name@example.com" />
                        <label for="floatingInput">Correo electrónico</label>
                    </div>
                    <div className="form-floating" align="center">
                        <input type="password" className="form-control" id="LoginPassword" placeholder="Contraseña" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>
                    <input type="submit" className="btn btn-outline-dark" value="Iniciar sesión" />
                    <a href="/registro">
                        <Button color="black" appearance="ghost"> Crear cuenta nueva </Button>
                    </a>
                </div>
            </form>
        </>
    );
}


export default Login;
