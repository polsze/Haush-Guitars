import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FotoIS1 from "../images/ismini.webp";
import FotoIS2 from "../images/ismini2.webp";
import FotoIS3 from "../images/ismini3.webp";
import FotoIS4 from "../images/ismini4.webp";
import "../styles/IndioMini.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function IndioMini() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const imgModalIS = {
    [FotoIS1]: FotoIS1,
    [FotoIS2]: FotoIS2,
    [FotoIS3]: FotoIS3,
    [FotoIS4]: FotoIS4,
  };
  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  };
  return (
    <>
      <div className="indioBg-container container-fluid">
        <h4 className="title-ins" data-aos="fade-up" data-aos-duration="3000">
          Guitarra acústica IS Mini
        </h4>
      </div>
      <div className="indio-container container-fluid">
        <div className="container">
          
          <div className="images-is-container">
            <LazyLoadImage
              src={FotoIS1}
              className="IS-img img-fluid"
              onClick={() => handleImgClick(FotoIS1)}
              alt="Guitarra Acustica Haush IS MINI"
            />
            <LazyLoadImage
              src={FotoIS2}
              className="IS-img img-fluid"
              onClick={() => handleImgClick(FotoIS2)}
              alt="Guitarra Acustica Haush IS MINI"
            />
            <LazyLoadImage
              src={FotoIS3}
              className="IS-img img-fluid"
              onClick={() => handleImgClick(FotoIS3)}
              alt="Guitarra Acustica Haush IS MINI"
            />
            <LazyLoadImage
              src={FotoIS4}
              className="IS-img img-fluid"
              onClick={() => handleImgClick(FotoIS4)}
              alt="Guitarra Acustica Haush IS MINI"
            />
            {/* Modal */}
            {showModal && (
              <div
                className="modalIS"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                <div className="modalIS2">
                  <LazyLoadImage 
                    src={imgModalIS[selectedImg]}
                    alt=""
                    className="is-Img2 img-fluid"
                    alt="Guitarra Acustica Haush IS MINI"
                  />
                  <a onClick={() => setShowModal(false)}>
                    <i className="bi bi-x-circle"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="characteristics">
            <h3>Especificaciones:</h3>
            <ul>
              <li className="features-list">Tapa: Caoba maciza</li>
              <li className="features-list">Aros: Caoba maciza</li>
              <li className="features-list">Fondo: Caoba maciza</li>
              <li className="features-list">Barras armonicas: Pino Abeto</li>
              <li className="features-list">
                Barras de estructura del fondo: Cedro Paraguay
              </li>
              <li className="features-list">Diente de perro: Cedro Paraguay</li>
              <li className="features-list">Mango: Cancharana</li>
              <li className="features-list">Diapason: Ébano</li>
              <li className="features-list">Tapa cabeza: Ébano</li>
              <li className="features-list">Puente: Ébano</li>
              <li className="features-list">
                Detalles debajo del mango (zoque) y atrás del cuerpo: Ébano
              </li>
              <li className="features-list">
                Incrustaciones en pala, diapasón y pickguard: Sicomoro
              </li>
              <li className="features-list">Pickguard: Ébano</li>
              <li className="features-list">Tensor: doble acción</li>
              <li className="features-list">Clavijas: Gotoh Japón negras</li>
              <li className="features-list">Cejilla: Nubone (Canadá)</li>
              <li className="features-list">Cejuela puente: Nubone (Canadá)</li>
              <li className="features-list">Escala: 578 mm</li>
              <li className="features-list">Trastes holandeses: 2.2 mm</li>
              <li className="features-list">Terminación: Laca Nitrocelulosa</li>
              <li className="features-list">Diapasón radio: 12</li>
              <li className="features-list">Pickguard cubre tensor: Ébano</li>
              <li className="features-list">Cuerdas: Ernie Ball wood</li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/instruments" className="back-button">
        <p>ATRÁS</p>
      </Link>
      <hr width="100%" className="line" />
    </>
  );
}

export default IndioMini;
