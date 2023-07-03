import React from "react";
import importImages from "./ImportImagenes";
import Encabezado from "./Encabezado";

const images = importImages(require.context("../images", false, /\.(png|jpe?g|svg)$/));


function DescripcionTour() {
    return (
        <>
            <Encabezado/>
            <div>
                <img src={images['snorkel.png']} height="200" alt="a" />
            </div>
        </>
    );
}

export default DescripcionTour;