import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import FotoGrasa1 from '../images/grasa1.png'
import FotoGrasa2 from '../images/grasa2.png'
import FotoGrasa3 from  '../images/grasa3.png'
import FotoGrasa4 from  '../images/grasa4.png'
import '../styles/Grasa.css';

function Grasa() {

  const [showModal, setShowModal] = useState(false);
    const [selectedImg, setSelectedImg] = useState('');
    

      const imgModalGrasa = {
    [FotoGrasa1]: FotoGrasa1,
    [FotoGrasa2]: FotoGrasa2,
    [FotoGrasa3]: FotoGrasa3,
    [FotoGrasa4]: FotoGrasa4
  }
  const handleImgClick = (imgSrc) => {
    setShowModal(true);
    setSelectedImg(imgSrc);

  }

return (
<>
<div className='grasaBg-container container-fluid'>
  <h2 className='title-ins' data-aos="fade-up"
     data-aos-duration="3000">Bajo acústico Grasa de Pez</h2>
</div>
<div className='grasa-container container-fluid'>
  <div class="container">
    <div class="characteristics">
      <h3>Especificaciones:</h3>
      <ul>
        <li className='features-list'>Tapa: Caoba maciza</li>
        <li className='features-list'>Aros: Caoba maciza</li>
        <li className='features-list'>Fondo: Caoba maciza</li>
        <li className='features-list'>Barras armonicas: Pino Abeto</li>
        <li className='features-list'>Barras de estructura del fondo: Cedro Paraguay</li>
        <li className='features-list'>Diente de perro: Cedro Paraguay</li>
        <li className='features-list'>Mango: Cancharana</li>
        <li className='features-list'>Diapason: Ébano</li>
        <li className='features-list'>Tapa cabeza: Ébano</li>
        <li className='features-list'>Puente: Ébano</li>
        <li className='features-list'>Detalles debajo del mango (zoque) y atrás del cuerpo: Ébano</li>
        <li className='features-list'>Incrustaciones en pala, diapasón y pickguard: Sicomoro</li>
        <li className='features-list'>Pickguard: Ébano</li>
        <li className='features-list'>Tensor: doble acción</li>
        <li className='features-list'>Clavijas: Gotoh Japón negras</li>
        <li className='features-list'>Cejilla: Nubone (Canadá)</li>
        <li className='features-list'>Cejuela puente: Nubone (Canadá)</li>
        <li className='features-list'>Escala: 578 mm</li>
        <li className='features-list'>Trastes holandeses: 2.2 mm</li>
        <li className='features-list'>Terminación: Laca Nitrocelulosa</li>
        <li className='features-list'>Diapasón radio: 12</li>
        <li className='features-list'>Pickguard cubre tensor: Ébano</li>
        <li className='features-list'>Cuerdas: Ernie Ball wood</li>
      </ul>
    </div>
    <div class="images-grasa-container">
            <img src={FotoGrasa1} className='img-grasa img-fluid' onClick={() => handleImgClick(FotoGrasa1)} alt='Bajo Haush Grasa de Pez' />
            <img src={FotoGrasa2} className='img-grasa img-fluid' onClick={() => handleImgClick(FotoGrasa2)} alt='Bajo Haush Grasa de Pez' />
            <img src={FotoGrasa3} className='img-grasa img-fluid' onClick={() => handleImgClick(FotoGrasa3)} alt='Bajo Haush Grasa de Pez' />
            <img src={FotoGrasa4} className='img-grasa img-fluid' onClick={() => handleImgClick(FotoGrasa4)} alt='Bajo Haush Grasa de Pez' />
            {/* Modal */}
      {showModal && (
        <div className='modalGrasa' data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">
          <div className='modalGrasa2'>
            
            <img src={imgModalGrasa[selectedImg]} alt='' className='grasa-Img2 img-fluid'  alt='Bajo Haush Grasa de Pez' />
            
            <a onClick={() => setShowModal(false)}><i class="bi bi-x-circle"></i></a>
          </div>
        </div>
      )}
          </div>

        </div>

      </div>
      <Link to='/instruments' className='back-button'><p>ATRÁS</p></Link>
    <hr width='100%' className='line' />
    </>
  );
}

export default Grasa;