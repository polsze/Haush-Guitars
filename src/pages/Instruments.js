import React from "react";
import "../styles/Instruments.css";
import Guitar6 from "../images/grasadepez.webp";
import Guitar7 from "../images/guitar88.webp";
import Guitar8 from "../images/guitar8.webp";
import Ubass from "../images/ubass6.webp";
import Vector from "../images/indiobg3.webp"
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Instruments() {
  return (
    <>
      <div className="instrumentsBg-container">
        <h2 className='instruments-title' data-aos="fade-up" data-aos-duration="3000">
          INSTRUMENTS
        </h2>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="image">
            <Link to="/instruments/baltasarcomotto">
              <LazyLoadImage
                src={Guitar8}
                alt="Guitarra Acustica Baltasar Comotto"
                className="guitar6"
              />
            </Link>
          </div>
          <div className="characteristics">
            <h4 className='instruments-title'>Guitarra Acústica Baltasar Comotto</h4>
            <p className="instruments-text">
              La guitarra acústica Baltasar Comotto fue diseñada justamente por el artista en cuestión. La
              idea fue construir un modelo sobrio, cómodo para ejecutar con
              buenos graves, medios y agudos, dándole estabilidad y cuerpo al
              sonido. <b>Haga click en la imagen para ver más...</b>
            </p>
            <LazyLoadImage src={Vector} className='vector img-fluid' />
          </div>
        </div>
        <div className="container">
          <div className="image">
            <Link to="/instruments/ismini">
              <LazyLoadImage
                src={Guitar7}
                alt="Guitarra Acustica IS MINI"
                className="guitar6"
              />
            </Link>
          </div>
          <div className="characteristics">
            <h4 className='instruments-title'>Guitarra Acústica IS Mini</h4>
            <p className="instruments-text">
              La guitarra acústica IS mini fue ideada junto con Gaspar Benegas.
              Se buscó reducir la escala y el tamaño del cuerpo sin perder calidad
              sonora. Se hizo encapié en resaltar detalles en su construcción. 
              Es ideal para llevar de viaje por su tamaño de 83cm de largo
              total. <b>Haga click en la imagen para ver más...</b>
            </p>
            <LazyLoadImage src={Vector} className='vector img-fluid' />
          </div>
        </div>

        <div className="container">
          <div className="image">
            <Link to="/instruments/grasadepez">
              <LazyLoadImage
                src={Guitar6}
                alt="Bajo Acustico Grasa de Pez"
                className="guitar6"
              />
            </Link>
          </div>
          <div className="characteristics">
            <h4 className='instruments-title'>Bajo Acústico Grasa de Pez</h4>
            <p className="instruments-text">
              El Bajo acústico Grasa de Pez fue diseñado para el bajista Cristian
              "Titi" Lapolla. Se buscó en reducir un poco el tamaño del cuerpo
              sin perder volumen y calidad sonora. Tiene un Mic en la boca para
              poder usarlo en estudios o shows en vivo. El cuteway favorece en
              la ejecución de las notas más agudas. Buenos graves y medios.{" "}
              <b>Haga click en la imagen para ver más...</b>
            </p>
            <LazyLoadImage src={Vector} className='vector vector img-fluid' />
          </div>
        </div>
        <div className="container">
          <div className="image">
            <Link to="/instruments/ubass">
              <LazyLoadImage src={Ubass} alt="Bajo Acustico U-Bass" className="guitar6" />
            </Link>
          </div>
          <div className="characteristics">
            <h4 className="instruments-title">Bajo Acústico U-Bass</h4>
            <p className="instruments-text">
              El U-bass o Uke-Bass acústico fue diseñado junto con Broder Bastos. Se
              construyó con cuerdas de caucho que son más suave de tocar que a su vez
              brindan un sonido similar a un contrabajo. Tiene un PRE para poder
              usarlo tanto en salas de ensayos, estudios o shows en vivo.{" "}
              <b>Haga click en la imagen para ver más...</b>
            </p>
            <LazyLoadImage src={Vector} className='vector img-fluid' />
          </div>
        </div>
        <hr width="100%" className="line" />
      </div>
    </>
  );
}
export default Instruments;
