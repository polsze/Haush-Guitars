import React from "react";
import "../styles/SectionFooter.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import haushLogo1 from "../images/haushlogo1.webp";


function SectionFooter() {
  return (
    <>
      <footer className="footer-container">
        <div className="logo-social-container">
          <a href="/" className="navbar-brand">
            <LazyLoadImage
              src={haushLogo1}
              className="logoFooter"
              alt="Haush logo"
              width="100"
              height="50"
            />
          </a>
          <div className="social-containerF">
            <a href="https://www.instagram.com/haushguitars/" target="_BLANK" rel="noreferrer">
              <i className="bi bi-instagram socialLogo"></i>
            </a>
            <a href="https://www.facebook.com/lokustas.sonido" target="_BLANK" rel="noreferrer">
              <i className="bi bi-facebook socialLogo"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=541537034641"
              target="_BLANK"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp socialLogo"></i>
            </a>
            <a
              href="https://www.youtube.com/@Haush.guitars"
              target="_BLANK"
              rel="noreferrer"
            >
              <i className="bi bi-youtube socialLogo"></i>
            </a>
          </div>
          <h6>Haush Guitars™ All Rights Reserved.</h6>
        </div>
        <a href="#top">
          <i className="bi bi-arrow-up-circle"></i>
        </a>
        <Link to="/contacto" className="contactFooterPath">CONTACTO</Link>
        <div className='credit'>
          <p>
            <b>Web Design: </b>
            <a
              href="https://pbx-six.vercel.app/"
              target="_BLANK"
              rel="noreferrer"
            > PBX </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default SectionFooter;
