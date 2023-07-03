import React from "react";

function Registro() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" />

            <div className="mb-3">
                <label htmlFor="" className="form-label">
                    Nombre
                </label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                />
                <label htmlFor="" className="form-label">
                    Apellidos
                </label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                />
                <label htmlFor="" className="form-label">
                    Correo electronico
                </label>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                />
                <label htmlFor="inputPasswords" className="form-label">
                    Contraseña
                </label>
                <input
                    type="password"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    aria-labelledby="passwordHelpBlock"
                />
                <label htmlFor="inputPasswords" className="form-label">
                    Confirma tu contraseña
                </label>
                <input
                    type="password"
                    className="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                    aria-labelledby="passwordHelpBlock"
                />
                <input
                    type="submit"
                    className="btn btn-outline-dark"
                    defaultValue="Terminar registro"
                />
            </div>
        </>
    );
}

export default Registro;