import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FotoUBass1 from "../images/ubass.webp";
import FotoUBass2 from "../images/ubass3.webp";
import FotoUBass3 from "../images/ubass4.webp";
import FotoUBass4 from "../images/ubass5.webp";
import "../styles/Ubass.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Ubass() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const imgModalUbass = {
    [FotoUBass1]: FotoUBass1,
    [FotoUBass2]: FotoUBass2,
    [FotoUBass3]: FotoUBass3,
    [FotoUBass4]: FotoUBass4,
  };
  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  };
  return (
    <>
      <div className="ubassBg-container container-fluid">
        <h4 className="signatureTitle" data-aos="zoom-out" data-aos-duration="3000">
          Bajo acústico U-Bass
        </h4>
      </div>
      <section className="ubass-container container-fluid">
        <div className="container">

          <div className="images-ubass-container">
            <LazyLoadImage
              src={FotoUBass1}
              className="img-ubass img-fluid"
              onClick={() => handleImgClick(FotoUBass1)}
              alt="Bajo Acustico U-Bass"
            />
            <LazyLoadImage
              src={FotoUBass2}
              className="img-ubass img-fluid"
              onClick={() => handleImgClick(FotoUBass2)}
              alt="Bajo Acustico U-Bass"
            />
            <LazyLoadImage
              src={FotoUBass3}
              className="img-ubass img-fluid"
              onClick={() => handleImgClick(FotoUBass3)}
              alt="Bajo Acustico U-Bass"
            />
            <LazyLoadImage
              src={FotoUBass4}
              className="img-ubass img-fluid"
              onClick={() => handleImgClick(FotoUBass4)}
              alt="Bajo Acustico U-Bass"
            />
            {/* Modal */}
            {showModal && (
              <div
                className="modalUbass"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                <div className="modalUbass2">
                  <LazyLoadImage
                    src={imgModalUbass[selectedImg]}
                    alt="Bajo Acustico U-Bass"
                    className="ubass-Img2 img-fluid"
                  />

                  <button onClick={() => setShowModal(false)}>
                    <i className="bi bi-x-circle"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="characteristics" data-aos="zoom-out" data-aos-duration="2000">
            <h3>Especificaciones:</h3>
            <ul>
              <li className="features-list">Tapa: Abeto </li>
              <li className="features-list">Aros: Nogal macizo</li>
              <li className="features-list">Fondo: Nogal macizo</li>
              <li className="features-list">Barras armonicas: Abeto</li>
              <li className="features-list">
                Barras de estructura del fondo: Cedro Paraguay
              </li>
              <li className="features-list">Mango: Cancharana</li>
              <li className="features-list">Diapasón: Ébano</li>
              <li className="features-list">Tapa cabeza: Pau Ferro</li>
              <li className="features-list">Puente: Pau Ferro</li>
              <li className="features-list">
                Detalles debajo del mango (zoque): Ébano
              </li>
              <li className="features-list">
                Incrustaciones: Sicomoro
              </li>
              <li className="features-list">Pickguard: Ébano</li>
              <li className="features-list">Tensor: doble acción</li>
              <li className="features-list">U-Bass 2+2 Negras</li>
              <li className="features-list">Cejilla: Nubone (Canadá)</li>
              <li className="features-list">Cejuela: Nubone (Canadá)</li>
              <li className="features-list">Escala: 578 mm</li>
              <li className="features-list">Trastes holandeses: 2 mm</li>
              <li className="features-list">Terminación: Nitrocelulosa</li>
              <li className="features-list">Diapasón radio: 12"</li>
              <li className="features-list">Pickguard cubre tensor: Ébano</li>
              <li className="features-list">Cuerdas: Ernie Ball wood</li>
              <li className="features-list">Pre: Fishman</li>
            </ul>
          </div>
        </div>
      </section>
      <Link to="/instrumentos" className="back-button">
        <p>ATRÁS</p>
      </Link>
      <hr width="100%" className="line" />
    </>
  );
}

export default Ubass;
