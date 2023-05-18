import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SectionArtists.css';
import Titi from '../images/titi2.png';
import Balta from '../images/baltasarcomottovivo3.jpg';
import Gaspar from '../images/gasparbenegas.png';
import Indio from '../images/carlossolari2.png';
import Bastos from '../images/bastos4.png'
import Scaglione from '../images/scaglione.jpeg'
import Mariel from '../images/mariel1.png'
import Sotelo from '../images/marcossotelo1.png'
import haushLogo1 from '../images/logohaushtransparente.png';
import Sotelo2 from '../images/sotelo.jpeg'
import Timido from '../images/carlossolari1.png'
import Balta2 from '../images/baltavivo.jpg'
import Titi2 from '../images/titi6.png'
import Gaspar2 from '../images/apai2.png'
import Bastos2 from '../images/bastos.jpg'
import Scaglione2 from '../images/scaglione1.jpg'
import Mariel2 from '../images/mariel2.jpeg'


function SectionArtists() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImg, setSelectedImg] = useState('');

  const artists = {
    [Indio]: 'Carlos Solari',
    [Balta]: 'Baltasar Comotto',
    [Gaspar]: 'Gaspar Benegas',
    [Titi]: 'Cristian "Titi" Lapolla',
    [Bastos]: 'Broder Bastos',
    [Scaglione]: 'Luciano Scaglione',
    [Mariel]: 'Mariel Fuertes',
    [Sotelo]: 'Marcos Sotelo'
  };

  const ytLinks = {
    [Indio]: 'https://www.youtube.com/embed/i-wenDno1lA',
    [Balta]: 'https://www.youtube.com/embed/MAGWtuJDJgE',
  	[Gaspar]: 'https://www.youtube.com/embed/ONvgGORQj8k',
  	[Titi]: 'https://www.youtube.com/embed/rxX9mHL3WGw',
  	[Bastos]: 'https://www.youtube.com/embed/cEPXxXSHUfI',
    [Scaglione]: 'https://www.youtube.com/embed/ThwWcDh9wWA',
    [Mariel]: 'https://www.youtube.com/embed/k5nnlqEHA3k',
    [Sotelo]: 'https://www.youtube.com/embed/X4OwYI8y9gY'
  }

  const imgModal = {
    [Indio]: Timido,
    [Balta]: Balta2,
    [Gaspar]: Gaspar2,
    [Titi]: Titi2,
    [Bastos]: Bastos2,
    [Scaglione]: Scaglione,
    [Mariel]: Mariel2,
    [Sotelo]: Sotelo2
  }

  const trayectoryModal = {
    [Indio]: ["Patricio Rey y sus Redonditos de Ricota", "Indio Solari Y los Fundamentalistas del Aire Acondicionado"],
    [Balta]: ["Luis Alberto Spinetta", "Andrés Calamaro", "Los Fundamentalistas del Aire Acondicionado"],
    [Gaspar]: ["Las Manos de Filippi", "Los Fundamentalistas del Aire Acondicionado", "La Mono"],
    [Titi]: ["A.N.I.M.A.L", "Simbiosis", "Power Of Soul", "Raptor"],
    [Bastos]: ["Ciro y los Persas"],
    [Scaglione]: ["Attaque 77"],
    [Mariel]: ["La Con Todo Band"],
    [Sotelo]: ["Sawtelle"]
  }

  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  }

  return (
  	<>
    <h2 className='artist-title1'>ARTISTAS</h2>
    <p className='click'>Toque en las imagenes para más...</p>
    <div className='artists-container container-fluid'>
     	<img src={Indio} className='artist-Img img-fluid' onClick={() => handleImgClick(Indio)} alt='Carlos "Indio" Solari' />
      <img src={Balta} className='artist-Img img-fluid' onClick={() => handleImgClick(Balta)} alt=' Baltasar Comotto' />
      <img src={Gaspar} className='artist-Img img-fluid' onClick={() => handleImgClick(Gaspar)} alt='Gaspar Benegas' />
      <img src={Titi} className='artist-Img img-fluid' onClick={() => handleImgClick(Titi)} alt='Cristian "Titi" Lapolla' />
      <img src={Bastos} className='artist-Img img-fluid' onClick={() => handleImgClick(Bastos)} alt='Broder Bastos' />
      <img src={Scaglione2} className='artist-Img img-fluid' onClick={() => handleImgClick(Scaglione)} alt='Luciano Scaglione' />
      <img src={Mariel} className='artist-Img img-fluid' onClick={() => handleImgClick(Mariel)} alt='Mariel Fuertes' />
      <img src={Sotelo} className='artist-Img img-fluid' onClick={() => handleImgClick(Sotelo)} alt='Marcos Sotelo' />

      {/* Modal */}
      {showModal && (
        <div className='modalArtist' data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">
          <div className='modalArtist2'>
            <h3 className='modalTitle'>{artists[selectedImg]}</h3>
            <img src={imgModal[selectedImg]} alt='' className='artist-Img2 img-fluid' alt='Imagel del modal'/>
            <ul><h6 className='titleTrayectory'>Trayectoria:</h6>
              <li className='band'>{trayectoryModal[selectedImg][0]}</li>
              <li className='band'>{trayectoryModal[selectedImg][1]}</li>
              <li className='band'>{trayectoryModal[selectedImg][2]}</li>
              <li className='band'>{trayectoryModal[selectedImg][3]}</li>
            </ul>
           	 <iframe className='ytVid' width="350" height="350" src={ytLinks[selectedImg]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <a onClick={() => setShowModal(false)}><i class="bi bi-x-circle"></i></a>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default SectionArtists;