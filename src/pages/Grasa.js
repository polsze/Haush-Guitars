import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FotoGrasa1 from "../images/grasa1.webp";
import FotoGrasa2 from "../images/grasa2.webp";
import FotoGrasa3 from "../images/grasadepez.webp";
import FotoGrasa4 from "../images/grasa4.webp";
import "../styles/Grasa.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Grasa() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const imgModalGrasa = {
    [FotoGrasa1]: FotoGrasa1,
    [FotoGrasa2]: FotoGrasa2,
    [FotoGrasa3]: FotoGrasa3,
    [FotoGrasa4]: FotoGrasa4,
  };
  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  };

  return (
    <>
      <div className="grasaBg-container container-fluid">
        <h4 data-aos="zoom-out" data-aos-duration="3000" className="signatureTitle">
          Bajo acústico Grasa de Pez
        </h4>
      </div>
      <div className="grasa-container container-fluid">
        <div className="container">
          
          <div className="images-grasa-container">
            <LazyLoadImage
              src={FotoGrasa1}
              className="img-grasa img-fluid"
              onClick={() => handleImgClick(FotoGrasa1)}
              alt="Bajo Haush Grasa de Pez"
            />
            <LazyLoadImage
              src={FotoGrasa2}
              className="img-grasa img-fluid"
              onClick={() => handleImgClick(FotoGrasa2)}
              alt="Bajo Haush Grasa de Pez"
            />
            <LazyLoadImage
              src={FotoGrasa3}
              className="img-grasa img-fluid"
              onClick={() => handleImgClick(FotoGrasa3)}
              alt="Bajo Haush Grasa de Pez"
            />
            <LazyLoadImage
              src={FotoGrasa4}
              className="img-grasa img-fluid"
              onClick={() => handleImgClick(FotoGrasa4)}
              alt="Bajo Haush Grasa de Pez"
            />

            {/* Modal */}
            {showModal && (
              <div
                className="modalGrasa"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                <div className="modalGrasa2">
                  <LazyLoadImage
                    src={imgModalGrasa[selectedImg]}
                    className="grasa-Img2 img-fluid"
                    alt="Bajo Haush Grasa de Pez"
                  />

                  <a onClick={() => setShowModal(false)}>
                    <i className="bi bi-x-circle"></i>
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="characteristics" data-aos="zoom-out" data-aos-duration="2000">
            <h3>Especificaciones:</h3>
            <ul>
              <li className="features-list">Tapa: Guayubira</li>
              <li className="features-list">Aros: Algarrobo macizo</li>
              <li className="features-list">Fondo: Algarrobo macizo</li>
              <li className="features-list">Barras armonicas: Pino Abeto</li>
              <li className="features-list">
                Barras de estructura del fondo: Cedro Paraguay
              </li>
              <li className="features-list">Diente de perro: Cedro Paraguay</li>
              <li className="features-list">Mango: Cancharana</li>
              <li className="features-list">Diapasón: Pau Ferro</li>
              <li className="features-list">Tapa cabeza: Guayubira</li>
              <li className="features-list">Puente: Guayubira</li>
              <li className="features-list">Detalles debajo del mango (zoque): Ébano</li>
              <li className="features-list">Incrustaciones: Sicomoro</li>
              <li className="features-list">Pickguard: Ébano</li>
              <li className="features-list">Tensor: doble acción</li>
              <li className="features-list">Clavijas: Gotoh Japón</li>
              <li className="features-list">Cejilla: Nubone (Canadá)</li>
              <li className="features-list">Cejuela: Nubone</li>
              <li className="features-list">Escala: 34"</li>
              <li className="features-list">Trastes holandeses 2.5mm</li>
              <li className="features-list">Terminación: Nitrocelulosa</li>
              <li className="features-list">Diapasón radio: 12"</li>
              <li className="features-list">Pickguard cubre tensor: Ébano</li>
              <li className="features-list">Cuerdas: Ernie Ball wood</li>
              <li className="features-list">Micrófono: Mazzarino</li>
            </ul>
          </div>
        </div>
      </div>
      <Link to="/instrumentos" className="back-button">
        <p>ATRÁS</p>
      </Link>
      <hr width="100%" className="line" />
    </>
  );
}

export default Grasa;
