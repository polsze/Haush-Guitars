import React from 'react';
import '../styles/Instruments.css';
import Guitar6 from '../images/grasadepez.png';
import Guitar7 from '../images/guitar7.png';
import Guitar8 from '../images/guitarcomotto4.png';
import Ubass from '../images/ubass6.png';
import { Link } from 'react-router-dom';

function Instruments() {
return (
<>
<div className='instrumentsBg-container' >
  <h2 className='title-ins' data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">HAUSH INSTRUMENTS</h2>
</div>
<div className='instruments-container container-fluid'>
   <div class="container">
    <div class="image">
      <Link to='/instruments/signature'><img src={Guitar8} alt="Guitarra Acustica Baltasar Comotto"  className='guitar7' /></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Guitarra Acústica Baltazar Comotto</h2>
      <p className='instruments-text'>La guitarra acústica Haush fue diseñada por Baltasar Comotto. La idea fue construir un modelo sobrio, cómodo para ejecutar con buenos graves, medios y agudos dandole estabilidad y cuerpo al sonido. <b>Haga click en la imagen para ver más...</b></p>
    </div>
  </div>
  <div class="container">
    <div class="image">
      <Link to='/instruments/ismini'><img src={Guitar7} alt="Guitarra Acustica IS MINI"  className='guitar7'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Guitarra acústica IS Mini</h2>
      <p className='instruments-text'>La guitarra acústica IS mini fue ideada junto con Gaspar Benegas. Buscamos reducir la escala y tamaño del cuerpo sin perder calidad sonora. Se hizo encapié en resaltar detalles en su construcción y es ideal para llevar de viaje por su tamaño de 83cm de largo total. <b>Haga click en la imagen para ver más...</b></p>
    </div>
  </div>
  
  <div class="container">
    <div class="image">
      <Link to='/instruments/grasadepez'><img src={Guitar6} alt="Bajo Acustico Grasa de Pez" className='guitar6'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Bajo Acústico Grasa de Pez</h2>
      <p className='instruments-text'>El Bajo acústico Grasa de Pez fue pensado para el bajista Cristian "Titi" Lapolla. Se pensó en reducir un poco el tamaño del cuerpo sin perder volumen y calidad sonora. Tiene un Mic en la boca para poder usarlo en estudios o shows en vivo. El cuteway favorece en la ejecución de las notas más agudas. Buenos graves y medios. <b>Haga click en la imagen para ver más...</b></p>
    </div>
  </div>
  <div class="container">
    <div class="image">
      <Link to='/instruments/ubass'><img src={Ubass} alt="Bajo Acustico U-Bass"  className='guitar6'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Bajo Acústico U-Bass</h2>
      <ul>
        <p className='instruments-text'>El Ukebass acústico fue diseñado junto con Broder Bastos. Se construyó con cuerdas de caucho que son más suave de tocar y brindan un sonido parecido a un contrabajo. Tiene un pre para poder usarlo tanto en salas de ensayos, estudios o shows en vivo. <b>Haga click en la imagen para ver más...</b></p>
      </ul>
    </div>
  </div>
  <hr width='100%' className='line'/>
</div>
</>
);
}
export default Instruments;