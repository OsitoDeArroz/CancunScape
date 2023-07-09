import React from "react";
import importImages from "./ImportImagenes"
import { Carousel } from "rsuite";
const images = importImages(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/));


function Carrusel() {

    return (
        <>
            <Carousel autoplay className="custom-slider">
                <a href="/descripcion"><img src={images['snorkel.png']} height="100%" width="100%" alt="a" /></a>
                <a href="/descripcion"><img src={images['excursion.png']} height="100%" width="100%" alt="a" /></a>
                <a href="/descripcion"><img src={images['itza.png']} height="100%" width="100%" alt="a" /></a>
                <a href="/descripcion"><img src={images['excursion.png']} height="100%" width="100%" alt="a" /></a>
            </Carousel>
        </>
    );
}

export default Carrusel;