import React from 'react';
import '../styles/Instruments.css';
import Guitar6 from '../images/grasadepez.png';
import Guitar7 from '../images/guitar7.png';
import Guitar8 from '../images/guitarcomotto4.png';
import Ubass from '../images/ubass3.png';
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
      <Link to='/instruments/signature'><img src={Guitar8} alt="Guitarra"  className='guitar7'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Guitarra Acústica Baltazar Comotto</h2>
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
        <li className='features-list'>Escala: 578 m m</li>
        <li className='features-list'>Trastes holandeses: 2.2 mm</li>
        <li className='features-list'>Terminación: Laca Nitrocelulosa</li>
        <li className='features-list'>Diapasón radio: 12</li>
        <li className='features-list'>Pickguard cubre tensor: Ébano</li>
        <li className='features-list'>Cuerdas: Ernie Ball wood</li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="image">
      <Link to='/instruments/indiomini'><img src={Guitar7} alt="Guitarra"  className='guitar7'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Guitarra acústica IS Mini</h2>
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
        <li className='features-list'>Escala: 578 m m</li>
        <li className='features-list'>Trastes holandeses: 2.2 mm</li>
        <li className='features-list'>Terminación: Laca Nitrocelulosa</li>
        <li className='features-list'>Diapasón radio: 12</li>
        <li className='features-list'>Pickguard cubre tensor: Ébano</li>
        <li className='features-list'>Cuerdas: Ernie Ball wood</li>
      </ul>
    </div>
  </div>
  
  <div class="container">
    <div class="image">
      <Link to='/instruments/grasadepez'><img src={Guitar6} alt="Guitarra" className='guitar6'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Bajo Acústico Grasa de Pez</h2>
      <ul>
        <li className='features-list1'>Tapa: Caoba maciza</li>
        <li className='features-list1'>Aros: Caoba maciza</li>
        <li className='features-list1'>Fondo: Caoba maciza</li>
        <li className='features-list1'>Barras armonicas: Pino Abeto</li>
        <li className='features-list1'>Barras de estructura del fondo: Cedro Paraguay</li>
        <li className='features-list1'>Diente de perro: Cedro Paraguay</li>
        <li className='features-list1'>Mango: Cancharana</li>
        <li className='features-list1'>Diapason: Ébano</li>
        <li className='features-list1'>Tapa cabeza: Ébano</li>
        <li className='features-list1'>Puente: Ébano</li>
        <li className='features-list1'>Detalles debajo del mango (zoque) y atrás del cuerpo: Ébano</li>
        <li className='features-list1'>Incrustaciones en pala, diapasón y pickguard: Sicomoro</li>
        <li className='features-list1'>Pickguard: Ébano</li>
        <li className='features-list1'>Tensor: doble acción</li>
        <li className='features-list1'>Clavijas: Gotoh Japón negras</li>
        <li className='features-list1'>Cejilla: Nubone (Canadá)</li>
        <li className='features-list1'>Cejuela puente: Nubone (Canadá)</li>
        <li className='features-list1'>Escala: 578 mm</li>
        <li className='features-list1'>Trastes holandeses: 2.2 mm</li>
        <li className='features-list1'>Terminación: Laca Nitrocelulosa</li>
        <li className='features-list1'>Diapasón radio: 12</li>
        <li className='features-list1'>Pickguard cubre tensor: Ébano</li>
        <li className='features-list1'>Cuerdas: Ernie Ball wood</li>
      </ul>
    </div>
  </div>
  <div class="container">
    <div class="image">
      <Link to='/instruments/ubass'><img src={Ubass} alt="Guitarra"  className='guitar6'/></Link>
    </div>
    <div class="characteristics">
      <h2 className='instrumentsTitle'>Bajo Acústico U-Bass</h2>
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
        <li className='features-list'>Escala: 578 m m</li>
        <li className='features-list'>Trastes holandeses: 2.2 mm</li>
        <li className='features-list'>Terminación: Laca Nitrocelulosa</li>
        <li className='features-list'>Diapasón radio: 12</li>
        <li className='features-list'>Pickguard cubre tensor: Ébano</li>
        <li className='features-list'>Cuerdas: Ernie Ball wood</li>
      </ul>
    </div>
  </div>
  <hr width='100%' className='line'/>
</div>
</>
);
}
export default Instruments;