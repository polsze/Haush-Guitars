import React from 'react';
import SignatureImg from '../images/signatureImg.jpg'
import '../styles/Signature.css';

function Signature() {
	return (
		 <>
      <div className='signatureBg-container container-fluid'>
        <h2 className='title-ins' data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">Guitarra acústica Baltazar Comotto</h2>
      </div>
      <div className='signature-container container-fluid'>
      
      
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
           <div class="image">
            <img src={SignatureImg} className='signatureCollage img-fluid'/>
          </div>
        </div>
      </div>

    <hr width='100%' className='line'/>
    </>
	);
}

export default Signature;