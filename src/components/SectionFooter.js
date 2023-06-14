import React from "react";
import "../styles/SectionFooter.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import haushLogo1 from "../images/haushlogo1.webp";
import Gys from "../images/logo-gys1.webp"
import Kvk from "../images/kvk-logo.webp"
import Vecc from "../images/logo-vecc1.webp"
import Myn from "../images/logo-moyano.webp"

function SectionFooter() {
  return (
    <>
    <div className="footer-container container-fluid">
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
        <h6>Haush Guitars™ All Rights Reserved.</h6>
      </div>
      
      <Link to="/contacto">CONTACTO</Link>
      <a href="#">
        <i className="bi bi-arrow-up-circle"></i>
      </a>

      

       
      <p className='graceful'>
      Agradecimientos:
      </p>
      <div className='logos-cont'>
      
      <Link to='http://www.gysbross.com/' target='_BLANK'>
      <img src={Gys} className='logos1 img-fluid' alt='G&S Logo' />
      </Link>
      <Link to='https://www.instagram.com/kvkfotos/' target='_BLANK'>
      <img src={Kvk} className='logos1 img-fluid' alt='Vecc Logo' />
      </Link>
      <Link to='https://www.instagram.com/veccphotography/' target='_BLANK'>
      <img src={Vecc} className='logos1 img-fluid' alt='KVK Logo' />
      </Link>
      <Link to='https://www.instagram.com/mtsrey10/' target='_BLANK'>
      <img src={Myn} className='logos1 img-fluid' alt='Matías Moyano Logo' />
      </Link>
      </div>
      
    </div>
   
    <div className='credit'>
      <p>
        <b>Web Design: </b>
        <br/>
        Copyright © 2023 <Link
            to="https://api.whatsapp.com/send?phone=543765252582"
            target="_BLANK"
          >PBX</Link> • Posadas based Freelance Web Designer &
        Developer
      </p>
    </div>
    </>
  );
}

export default SectionFooter;
