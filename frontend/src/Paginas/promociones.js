import React from "react";
import Encabezado from "../componentes/Encabezado";
import TarjetaTour from "../componentes/TarjetaTour";
import importImages from "../componentes/ImportImagenes";

const images = importImages(require.context("../images", false, /\.(png|jpe?g|svg)$/));

function Promociones() {
    return (
        <>
            <Encabezado />
            <div class="container">
                <div class="row">
                    <TarjetaTour imgSrc={images['itza.png']} title='asfa' description='34513 b4ff a' duration='3 hr' price='233' link='a' />
                    <TarjetaTour imgSrc={images['playa.jpg']} title='afadsfaa' description='3w513 a' duration='4 hr' price='5553' link='a' />
                    <TarjetaTour imgSrc={images['snorkel.png']} title='asfa' description='34513 b4ff a' duration='3 hr' price='233' link='a' />
                    <TarjetaTour imgSrc={images['snorkel.png']} title='afadsfaa' description='3w513 a' duration='4 hr' price='5553' link='a' />
                </div>
            </div>

        </>
    )
}

export default Promociones;


