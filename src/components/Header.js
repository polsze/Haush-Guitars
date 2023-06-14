import React from "react";
import "../styles/Header.css";
import HaushLogo from "../images/haushlogo1.webp";
import Contact from "../pages/Contact";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Instagram from '../images/instagram.webp'
import Facebook from '../images/facebook.webp'
import Whatsapp from '../images/whatsapp.webp'


function Header(props) {

  return (
    <div className="header-container container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="logo-container">
          <a href="/" className="navbar-brand">
            <LazyLoadImage
              src={HaushLogo}
              className="logo img-fluid"
              alt="Logo de Haush Guitars"
              width="110"
              height="60"
            />
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/instrumentos">
                Instrumentos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sobrenosotros">
                Sobre Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacto">
                Contacto
              </Link>
            </li>
          </ul>
          <div className="social-containerH">
            <Link to="https://www.instagram.com/haushguitars/" target="_BLANK">
              <LazyLoadImage src={Instagram} className='red-logo img-fluid' alt='Instagram' />
            </Link>

            <Link to="https://www.facebook.com/lokustas.sonido" target="_BLANK">
              <LazyLoadImage src={Facebook} className='red-logo1 img-fluid' alt='Instagram' />
            </Link>
            <Link
              to="https://api.whatsapp.com/send?phone=541537034641"
              target="_BLANK"
            >
              <LazyLoadImage src={Whatsapp} className='red-logo2 img-fluid' alt='Instagram' />
            </Link>
          </div>
        </div>

      </nav>

    </div>
  );
}
export default Header;