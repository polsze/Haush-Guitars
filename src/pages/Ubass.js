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
        <h4 className="title-ins" data-aos="fade-up" data-aos-duration="3000">
          Bajo acústico U-Bass
        </h4>
      </div>
      <div className="ubass-container container-fluid">
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
                    alt=""
                    className="ubass-Img2 img-fluid"
                    alt="Bajo Acustico U-Bass"
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

export default Ubass;
