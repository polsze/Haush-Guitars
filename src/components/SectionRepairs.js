import React from "react";
import "../styles/SectionRepairs.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import asd1 from '../images/guitar-repair.webp'



function SectionRepairs() {
  return (
    <>
      <div className="repairsBg">
      <LazyLoadImage src={asd1} alt="" className="guitar-repair img-fluid" />
        <div className="repairs-container container-fluid">
          <div className="listRepairs">
            
            <h5>Mantenimiento y puesta a punto de instrumentos musicales</h5>
            <ul>
              <li>Reparaciones </li>
              <li>Calibraciones </li>
              <li>Rectificados </li>
              <li>Restauraciones </li>
              <li>Reentrastados </li>
            </ul>
            <p className="textRepairs-container">
              Para contactarse utilice el Formulario de{" "}
              <Link to="/contacto">CONTACTO</Link>, WhatsApp, o Redes Sociales.
            </p>
          </div>
        </div>
      </div>
      <hr width="100%" className="line" />
      
    </>
  );
}

export default SectionRepairs;