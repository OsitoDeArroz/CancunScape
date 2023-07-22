import React from "react";
import importImages from "./ImportImagenes";
import { Carousel } from "rsuite";
import { Link } from "react-router-dom";

const images = importImages(require.context("../assets/images", false, /\.(png|jpe?g|svg)$/));

function Carrusel() {
    return (
        <>
            <Carousel autoplay className="custom-slider">
                <Link to="/descripcion">
                    <img src={images["snorkel.png"]} height="100%" width="100%" alt="a" />
                </Link>
                <Link to="/descripcion">
                    <img src={images["excursion.png"]} height="100%" width="100%" alt="a" />
                </Link>
                <Link to="/descripcion">
                    <img src={images["itza.png"]} height="100%" width="100%" alt="a" />
                </Link>
                <Link to="/descripcion">
                    <img src={images["excursion.png"]} height="100%" width="100%" alt="a" />
                </Link>
            </Carousel>
        </>
    );
}

export default Carrusel;
