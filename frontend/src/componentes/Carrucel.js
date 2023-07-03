import React from "react";
import importImages from "./ImportImagenes"
import { Carousel } from "rsuite";
const images = importImages(require.context("../images", false, /\.(png|jpe?g|svg)$/));


function Carrusel() {

    return (
        <>
            <Carousel autoplay className="custom-slider">
                <a href="/descripcion"><img src={images['snorkel.png']} height="200" alt="a" /></a>
                <a href="/descripcion"><img src={images['excursion.png']} height="200" alt="a" /></a>
                <a href="/descripcion"><img src={images['itza.png']} height="200" alt="a" /></a>
                <a href="/descripcion"><img src={images['excursion.png']} height="200" alt="a" /></a>
            </Carousel>
        </>
    );
}

export default Carrusel;