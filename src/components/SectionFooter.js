import React from "react";
import haushLogo1 from "../images/haushlogo1.png";
import "../styles/SectionFooter.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

function SectionFooter() {
  return (
    <div className="footer-container container-fluid">
      <div className="logo-social-container">
          <LazyLoadImage
            src={haushLogo1}
            className="logoFooter"
            alt="Haush logo"
            width="100"
            height="70"
          />
        <div className="social-containerH">
          <Link to="https://www.instagram.com/haushguitars/" target="_BLANK">
            <i className="bi bi-instagram socialLogo"></i>
          </Link>
          <Link to="https://www.facebook.com/lokustas.sonido" target="_BLANK">
            <i className="bi bi-facebook socialLogo"></i>
          </Link>
          <Link
            to="https://api.whatsapp.com/send?phone=541537034641"
            target="_BLANK"
          >
            <i className="bi bi-whatsapp socialLogo"></i>
          </Link>
        </div>
      </div>
      <h6>Haush Guitars™ All Rights Reserved.</h6>
      <Link to="/contact">CONTACTO</Link>
      <a href="#">
        <i className="bi bi-arrow-up-circle"></i>
      </a>
      <p>
        <b>Web Design: </b>
        Copyright © 2023 Pablo Barrios • Posadas based Freelance Web Designer &
        Developer
      </p>
    </div>
  );
}

export default SectionFooter;
