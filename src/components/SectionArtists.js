import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SectionArtists.css';
import Titi from '../images/titi.png';
import Balta from '../images/baltasarcomottovivo.jpg';
import Gaspar from '../images/gasparbenegas.png';
import Indio from '../images/carlossolari.png';
import Bastos from '../images/bastos.jpg'
import Scaglione from '../images/scaglione.png'
import Mariel from '../images/marielfuertes.png'
import Sotelo from '../images/marcossotelo.jpeg'
import haushLogo from '../images/haushlogo.png';
import Sotelo2 from '../images/sotelo.jpeg'
import Timido from '../images/indio.jpeg'
import Balta2 from '../images/comottovivo2.png'
import Titi2 from '../images/titi6.png'
import Gaspar2 from '../images/apai2.png'
import Bastos2 from '../images/bastos2.png'
import Scaglione2 from '../images/scaglione2.jpg'
import Kubero from '../images/Kubero.jpg'

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
    [Kubero]: 'Kubero Díaz',
    [Sotelo]: 'Marcos Sotelo'
  };

  const textArtists = {
    [Indio]: 'En 1995 recibió un Premio Konex, «Diploma al Mérito» como uno de los mejores cantantes de la década de su país, y nuevamente en 2015 el «Konex de Platino» al «Mejor Cantante de Rock de la década».',
    [Balta]: 'Actualmente guitarrista en Los Fundamentalistas del Aire Acondicionado. Pero a finales de la década del 80, Baltasar Comotto era un adolescente introvertido que pasaba las tardes mirando recitales de Jimi Hendrix en VHS.',
    [Gaspar]: 'Debutó a la edad de doce años, cuando fue invitado por Pappo, para una presentación en vivo. Desde 2019 hasta la actualidad es una de las principales voces dentro de Los Fundamentalistas desde la ausencia de Solari, y también considerado "la cabeza principal" de la banda. ',
    [Titi]: ['Titi se empieza a interesar por la música bajo la influencia de Duran Duran y su bajista e ídolo, John Taylor. Sin saberlo, años más tarde Titi sería integrante de la banda de Nü Metal argentina más grande de todos los tiempos.'],
    [Bastos]: ['Broder Bastos nació en Rio Grande do Sul, Brazil. Desde niño evidenció su vocación por la música, desplegando su gran talento. Actualmente es el bajista de Ciro y Los Persas.'],
    [Scaglione]: ['Bajista, cantante y compositor de rock argentino. Es reconocido por ser el bajista y vocalista de la banda punk rock bonaerense Attaque 77, desde 1992, tras el alejamiento del anterior bajista Adrián Vera. Además de su trabajo como músico, Scaglione es cocinero profesional.'],
    [Kubero]: ['Kubero Díaz'],
    [Sotelo]: ['Marcos Sotelo']
  }

  const ytLinks = {
    [Balta]: 'https://www.youtube.com/embed/MAGWtuJDJgE',
  	[Gaspar]: 'https://www.youtube.com/embed/ONvgGORQj8k',
  	[Titi]: 'https://www.youtube.com/embed/rxX9mHL3WGw',
  	[Bastos]: 'https://www.youtube.com/embed/cEPXxXSHUfI',
    [Scaglione]: 'https://www.youtube.com/embed/ThwWcDh9wWA',
    [Mariel]: 'https://www.youtube.com/embed/k5nnlqEHA3k'
  }

  const imgModal = {
    [Indio]: Timido,
    [Balta]: Balta2,
    [Gaspar]: Gaspar2,
    [Titi]: Titi2,
    [Bastos]: Bastos2,
    [Scaglione]: Scaglione,
    [Kubero]: Kubero,
    [Sotelo]: Sotelo2
  }

  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);
  }

  return (
  	<>
    <div className='artists-container container-fluid'>
     	<img src={Indio} className='artist-Img img-fluid' onClick={() => handleImgClick(Indio)} />
      <img src={Balta} className='artist-Img img-fluid' onClick={() => handleImgClick(Balta)} />
      <img src={Gaspar} className='artist-Img img-fluid' onClick={() => handleImgClick(Gaspar)} />
      <img src={Titi} className='artist-Img img-fluid' onClick={() => handleImgClick(Titi)} />
      <img src={Bastos} className='artist-Img img-fluid' onClick={() => handleImgClick(Bastos)} />
      <img src={Scaglione2} className='artist-Img img-fluid' onClick={() => handleImgClick(Scaglione)} />
      <img src={Kubero} className='artist-Img img-fluid' onClick={() => handleImgClick(Kubero)} />
      <img src={Sotelo} className='artist-Img img-fluid' onClick={() => handleImgClick(Sotelo)} />

      {/* Modal */}
      {showModal && (
        <div className='modalArtist' data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">
          <div className='modalArtist2'>
            <h3 className='modalTitle'>{artists[selectedImg]}</h3>
            <img src={imgModal[selectedImg]} alt='' className='artist-Img2 img-fluid' />
            <p className='modalText'>{textArtists[selectedImg ]}</p>
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