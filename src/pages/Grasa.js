import React from 'react';
import Guitar6 from '../images/guitar7.png';
import Grasa1 from '../images/grasaImg3.jpg'
import Lapolla from '../images/titi.png';
import Grasa2 from '../images/grasaImg2.jpg';
import '../styles/Grasa.css';
function Grasa() {
return (
<>
<div className='grasaBg-container container-fluid'>
  <h2 className='title-ins' data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">Bajo acústico Grasa de Pez</h2>
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
    <div class="image">
      <img src={Grasa1} className='grasa1 img-fluid'/>
    </div>
  </div>
  <div className='video-container-grasa'>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/rxX9mHL3WGw?fs=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
<hr width='100%' className='line'/>
</>
);
}
export default Grasa;