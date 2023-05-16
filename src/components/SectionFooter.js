import React from 'react';
import haushLogo from '../images/haushlogo.png';
import '../styles/SectionFooter.css';
import { Link } from 'react-router-dom';

function SectionFooter() {
  return (
    <div className="footer-container container-fluid">
      <div className="logo-social-container">
        <a href="/">
          <img
            src={haushLogo}
            className="logoFooter"
            alt="Haush logo"
            width="100"
            height="70"
          />
        </a>
        <div className="social-container">
          <i class="bi bi-instagram socialLogo"></i>
          <i class="bi bi-facebook socialLogo"></i>
          <i class="bi bi-whatsapp socialLogo"></i>
        </div>
      </div>
      <h6>Haush Guitars™ All Rights Reserved.</h6>
      <Link to="/contact">CONTACTO</Link>
      <a href="#">
        <i class="bi bi-arrow-up-circle"></i>
      </a>
      <p>
        <b>Web Design: </b>
        Copyright © 2023 Pablo Barrios • Posadas based Freelance
        Web Designer & Developer
      </p>
    </div>
  );
}

export default SectionFooter;