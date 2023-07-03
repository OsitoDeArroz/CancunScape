import React from "react";
import Encabezado from "../componentes/Encabezado";
import TarjetaTour from "../componentes/TarjetaTour";
import importImages from "../componentes/ImportImagenes";

const images = importImages(require.context("../images", false, /\.(png|jpe?g|svg)$/)); //se guardan todas las imagenes dentro de la carpeta images

function Paquetes() {
    return (
        <>
            <Encabezado />
            <div class="container">
                <div class="row">
                    <TarjetaTour imgSrc={images['snorkel.png']} title='Xcaret Plus' description='Una visita obligada para los visitantes de Cancún y la Riviera Maya. Premiado como uno de los mejores parques del mundo.' duration='3d' price='188' link='descripcion' />
                    <TarjetaTour imgSrc={images['excursion.png']} title='Xel-Há Todo Incluído' description='Disfruta de esta maravilla natural en un parque todo incluído con atractivos ecológicos e innumerables experiencias divertidas.' duration='4d' price='135' link='descripcion' />
                    <TarjetaTour imgSrc={images['itza.png']} title='Xplor Park' description='Emocionante parque de aventuras en la jungla, cavernas y cenotes. Tirolesas, vehículos anfíbios, balsas y ríos subterráneos.' duration='3 hr' price='135' link='descripcion' />
                    <TarjetaTour imgSrc={images['playa.jpg']} title='Xichen Deluxe' description='Visita el sitio arqueológico más emblemático de la cultura Maya, incluida una visita a la ciudad de Valladolid y al Cenote Tsukan.' duration='4d' price='135' link='descripcion' />
                    <TarjetaTour imgSrc={images['snorkel.png']} title='asfa' description='34513 b4ff a' duration='3 hr' price='233' link='a' />
                    <TarjetaTour imgSrc={images['snorkel.png']} title='afadsfaa' description='3w513 a' duration='4 hr' price='5553' link='a' />
                </div>
            </div>

        </>
    );
}

export default Paquetes;


