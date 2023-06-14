import React from "react";
import "../styles/SectionAbout.css";
import guitars from "../images/claybass.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SectionAbout() {
  return (
    <div className="about-container ">
      <hr width="100%" className="line" />
      <div className="about-container2">
        <div className="left-about">
          <LazyLoadImage
            src={guitars}
            className="guitar-about img-fluid"
            alt="Bajo de Haush Guitars"
          />
        </div>
        <div className="right-about">
          <h1 className="aboutTitle" data-aos="zoom-out" data-aos-duration="3000">Haush Guitars</h1>
          <p className="aboutText">
            tiene su origen en el año 2015. El luthier Nicolás
            Barrios tras años de capacitación y formación desarrolló sus
            habilidades calibrando instrumentos de cuerda frotada para orquestas
            juveniles, también estudió construcción de guitarras en la
            Asociación Argentina de Luthiers y por último trabajó en la fábrica
            de Guitarras Zagert (La Alpujarra, Fonseca) donde pegaba puentes y
            calibraba 25000 guitarras al año. Después de esta experiencia armó
            su propio taller y comienza a construir instrumentos. Hoy en día
            Haush Guitars trabaja con artistas de primer nivel que usan sus
            guitarras en shows masivos, grabaciones y ensayos, garantizando un
            verdadero prestigio a la marca. Los instrumentos son construidos a
            mano con total y entera dedicación en cada uno de ellos, con maderas
            macizas de excelentes prestaciones sonoras que influyen
            positivamente en el sonido final.
          </p>
        </div>
      </div>
      <hr width="100%" className="line" />
    </div>
  );
}

export default SectionAbout;
