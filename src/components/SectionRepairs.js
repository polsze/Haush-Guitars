import React from "react";
import "../styles/SectionRepairs.css";
import { Link } from "react-router-dom";



function SectionRepairs() {
  return (
    <>
      <div className="repairsBg">
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
              <Link to="/contact">CONTACTO</Link>, WhatsApp, o Redes Sociales.
            </p>
          </div>
        </div>
      </div>
      <hr width="100%" className="line" />
      
    </>
  );
}

export default SectionRepairs;