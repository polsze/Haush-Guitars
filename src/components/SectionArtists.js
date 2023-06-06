import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SectionArtists.css";
import Balta from "../images/baltasarcomottovivo2.webp";
import Gaspar from "../images/apai2.webp";
import Titi from "../images/titilapolla.webp";
import Bastos from "../images/bastos.webp";
import Scaglione from "../images/scaglione.webp";
import Sbaraglia from "../images/sbaraglia.webp";
import Mariel from "../images/marielfuertes.webp";
import Sotelo from "../images/marcossotelo1.webp";
import Balta2 from "../images/baltasarcomottovivo3.webp";
import Gaspar2 from "../images/gasparbenegas.webp";
import Titi2 from "../images/titi.webp";
import Bastos2 from "../images/bastos2.webp";
import Scaglione2 from "../images/scaglione2.webp";
import Sotelo2 from "../images/sotelo.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";





function SectionArtists() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const artists = {
    [Sbaraglia]: "Carlos Solari",
    [Balta]: "Baltasar Comotto",
    [Gaspar]: "Gaspar Benegas",
    [Titi]: 'Cristian "Titi" Lapolla',
    [Bastos]: "Broder Bastos",
    [Scaglione]: "Luciano Scaglione",
    [Mariel]: "Mariel Fuertes",
    [Sotelo]: "Marcos Sotelo",
  };

  const ytLinks = {
    [Sbaraglia]: "https://www.youtube.com/embed/i-wenDno1lA",
    [Balta]: "https://www.youtube.com/embed/MAGWtuJDJgE",
    [Gaspar]: "https://www.youtube.com/embed/ONvgGORQj8k",
    [Titi]: "https://www.youtube.com/embed/rxX9mHL3WGw",
    [Bastos]: "https://www.youtube.com/embed/cEPXxXSHUfI",
    [Scaglione]: "https://www.youtube.com/embed/ThwWcDh9wWA",
    [Mariel]: "https://www.youtube.com/embed/k5nnlqEHA3k",
    [Sotelo]: "https://www.youtube.com/embed/X4OwYI8y9gY",
  };

  const imgModal = {
    [Sbaraglia]: Sbaraglia,
    [Balta]: Balta2,
    [Gaspar]: Gaspar2,
    [Titi]: Titi2,
    [Bastos]: Bastos2,
    [Scaglione]: Scaglione2,
    [Mariel]: Mariel,
    [Sotelo]: Sotelo2,
  };

  const trayectoryModal = {
    [Sbaraglia]: [
      "Indio Solari y los Fundamentalistas del Aire Acondicionado",
    ],
    [Balta]: [
      "Luis Alberto Spinetta",
      "Andrés Calamaro",
      "Indio Solari y Los Fundamentalistas del Aire Acondicionado",
    ],
    [Gaspar]: [
      "Las Manos de Filippi",
      "Indio Solari y Los Fundamentalistas del Aire Acondicionado",
      "La Mono",
      "El Mister y los Marsupiales Extintos"
    ],
    [Titi]: ["A.N.I.M.A.L", "Simbiosis", "Power Of Soul", "Raptor"],
    [Bastos]: ["Ciro y los Persas"],
    [Scaglione]: ["Attaque 77"],
    [Mariel]: ["La Con Todo Band"],
    [Sotelo]: ["Sawtelle", "Pasión Redonda Tributo (Los Angeles, USA)"],
  };

  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  };

  return (
    <>
      <div className='title-logo-artist-cont'>
      <h4 className='artistTitle' data-aos="fade-up" data-aos-duration="3000">ARTISTAS QUE USAN HAUSH</h4>
       </div>
      <p className="click">Toque en las imagenes para más...</p>
      <div className="artists-container container-fluid">
        <LazyLoadImage
          src={Balta}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Balta)}
          alt=" Baltasar Comotto"
        />
        <LazyLoadImage
          src={Gaspar}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Gaspar)}
          alt="Gaspar Benegas"
        />
        <LazyLoadImage
          src={Titi}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Titi)}
          alt='Cristian "Titi" Lapolla'
        />
        <LazyLoadImage
          src={Bastos}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Bastos)}
          alt="Broder Bastos"
        />
        <LazyLoadImage
          src={Scaglione}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Scaglione)}
          alt="Luciano Scaglione"
        />
        <LazyLoadImage
          src={Sbaraglia}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Sbaraglia)}
          alt='Pablo Sbaraglia'
        />
        <LazyLoadImage 
          src={Mariel}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Mariel)}
          alt="Mariel Fuertes"
        />
        <LazyLoadImage 
          src={Sotelo}
          className="artist-Img img-fluid"
          onClick={() => handleImgClick(Sotelo)}
          alt="Marcos Sotelo"
        />

        {/* Modal */}
        {showModal && (
          <div
            className="modalArtist"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-duration="2000"
          >
            <div className="modalArtist2">
              <h4>{artists[selectedImg]}</h4>
              <LazyLoadImage
                src={imgModal[selectedImg]}
                alt=""
                className="artist-Img2 img-fluid"
                alt="Imagel del modal"
              />
              <ul>
                <h6 className="titleTrayectory">Trayectoria:</h6>
                <li className="band">{trayectoryModal[selectedImg][0]}</li>
                <li className="band">{trayectoryModal[selectedImg][1]}</li>
                <li className="band">{trayectoryModal[selectedImg][2]}</li>
                <li className="band">{trayectoryModal[selectedImg][3]}</li>
              </ul>
              <iframe
                className="ytVid"
                width="350"
                height="350"
                src={ytLinks[selectedImg]}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <a onClick={() => setShowModal(false)}>
                <i className="bi bi-x-circle"></i>
              </a>
            </div>
          </div>
        )}
      </div>
      <hr width="100%" className="line" />
    </>
  );
}

export default SectionArtists;