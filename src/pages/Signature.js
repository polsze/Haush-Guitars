import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FotoSignature1 from "../images/guitarbaltasarcomotto.webp";
import FotoSignature2 from "../images/guitarbaltasarcomotto2.webp";
import FotoSignature3 from "../images/guitarbaltasarcomotto3.webp";
import FotoSignature4 from "../images/guitarbaltasarcomotto4.webp";
import "../styles/Signature.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Signature() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const imgModal1 = {
    [FotoSignature1]: FotoSignature1,
    [FotoSignature2]: FotoSignature2,
    [FotoSignature3]: FotoSignature3,
    [FotoSignature4]: FotoSignature4,
  };

  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  };

  return (
    <>
      <div className="signatureBg-container container-fluid">
        <h4 data-aos="zoom-out" data-aos-duration="3000" className="signatureTitle">
          Guitarra acústica Baltasar Comotto
        </h4>
      </div>
      <section className="signature-container container-fluid">
        <div className="container">

          <div className="images-signature-container" >
            <LazyLoadImage
              src={FotoSignature1}
              className="img-signature img-fluid"
              onClick={() => handleImgClick(FotoSignature1)}
              alt="Guitarra Acustica Baltasar Comotto"
            />
            <LazyLoadImage
              src={FotoSignature2}
              className="img-signature img-fluid"
              onClick={() => handleImgClick(FotoSignature2)}
              alt="Guitarra Acustica Baltasar Comotto"
            />
            <LazyLoadImage
              src={FotoSignature3}
              className="img-signature img-fluid"
              onClick={() => handleImgClick(FotoSignature3)}
              alt="Guitarra Acustica Baltasar Comotto"
            />
            <LazyLoadImage
              src={FotoSignature4}
              className="img-signature img-fluid"
              onClick={() => handleImgClick(FotoSignature4)}
              alt="Guitarra Acustica Baltasar Comotto"
            />
            {/* Modal */}
            {showModal && (
              <div
                className="modalSignature"
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="2000"
              >
                <div className="modalSignature2">
                  <LazyLoadImage
                    src={imgModal1[selectedImg]}
                    alt="Guitarra Acustica Baltasar Comotto"
                    className="signature-Img2 img-fluid"
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
              <li className="features-list">Tapa: Caoba maciza</li>
              <li className="features-list">Aros: Caoba maciza</li>
              <li className="features-list">Fondo: Caoba maciza</li>
              <li className="features-list">Barras armonicas: Pino Abeto</li>
              <li className="features-list">
                Barras de estructura del fondo: Cedro Paraguay
              </li>
              <li className="features-list">Diente de perro: Cedro Paraguay</li>
              <li className="features-list">Mango: Cancharana</li>
              <li className="features-list">Diapasón: Ébano</li>
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
              <li className="features-list">Escala: 633mm</li>
              <li className="features-list">Trastes holandeses: 2.2 mm</li>
              <li className="features-list">Terminación: Nitrocelulosa</li>
              <li className="features-list">Diapasón radio: 12"</li>
              <li className="features-list">Pickguard cubre tensor: Ébano</li>
              <li className="features-list">Cuerdas: Ernie Ball wood</li>
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
export default Signature;