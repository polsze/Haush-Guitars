import React from 'react';
import haushLogo1 from '../images/logohaushtransparente.png';
import '../styles/SectionFooter.css';
import { Link } from 'react-router-dom';

function SectionFooter() {
  return (
    <div className="footer-container container-fluid">
      <div className="logo-social-container">
        <a href="/">
          <img
            src={haushLogo1}
            className="logoFooter"
            alt="Haush logo"
            width="100"
            height="70"
          />
        </a>
        <div className="social-container">
          <Link to='https://www.instagram.com/haushguitars/' target='_BLANK' ><i class="bi bi-instagram socialLogo"></i></Link>
          <Link to='https://www.facebook.com/lokustas.sonido' target='_BLANK'><i class="bi bi-facebook socialLogo"></i></Link>
          <Link to='https://api.whatsapp.com/send?phone=541537034641' target='_BLANK'><i class="bi bi-whatsapp socialLogo"></i></Link>
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