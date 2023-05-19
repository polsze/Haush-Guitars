import React from "react";
import { Link } from "react-router-dom";
import Guitar1 from "../images/baltasarcomotto.jpeg";
import "../styles/SectionImg.css";
import Guitar2 from "../images/grasa.png";
import Guitar3 from "../images/indio6.png";
import Guitar4 from "../images/haushhuracan.jpeg";
import Guitar5 from "../images/apai3.png";

function SectionImg() {
  return (
    <>
      <div className="sectionImg-container">
        <img
          src={Guitar1}
          className="guitar img-fluid "
          alt="Baltasar Comotto en vivo"
        />
        <div className="guitar-container">
          <img
            src={Guitar2}
            className="guitars img-fluid"
            alt="Bajo Haush Grasa de Pez"
          />
          <img
            src={Guitar3}
            className="guitars img-fluid"
            alt="Guitarra Haush IS MINI"
          />
          <img
            src={Guitar4}
            className="guitars img-fluid"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="2000"
            alt="Haush estadio Huracán"
          />
          <img
            src={Guitar5}
            className="guitars img-fluid"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="2000"
            alt="Gaspar Benegas Haush"
          />
        </div>
      </div>
      <hr width="100%" className="line" />
    </>
  );
}

export default SectionImg;
