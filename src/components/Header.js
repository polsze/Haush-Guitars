import React from "react";
import "../styles/Header.css";
import HaushLogo from "../images/haushlogo1.webp";
import { Link } from "react-router-dom";
import Instagram from '../images/instagram.webp'
import Facebook from '../images/facebook.webp'
import Whatsapp from '../images/whatsapp.webp'
import Youtube from '../images/youtube.webp'
import { motion } from 'framer-motion'


function Header(props) {

  return (
    <header className="header-container" id="top">
      <nav className="navbar navbar-expand-lg">
        <div className="logo-container">
          <Link to="/" className="navbar-brand">
            <img
              src={HaushLogo}
              className="logo img-fluid"
              alt="Logo de Haush Guitars"
              width="110"
              height="60"
            />
          </Link>
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
            <motion.a href="https://www.instagram.com/haushguitars/" target="_BLANK" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <img src={Instagram} className='red-logo img-fluid' alt='Instagram' />
            </motion.a>

            <motion.a href="https://www.facebook.com/lokustas.sonido" target="_BLANK" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}>
              <img src={Facebook} className='red-logo1 img-fluid' alt='Instagram' />
            </motion.a>
            <motion.a
              href="https://api.whatsapp.com/send?phone=541537034641"
              target="_BLANK" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
            >
              <img src={Whatsapp} className='red-logo2 img-fluid' alt='Instagram' />
            </motion.a>
            <motion.a
              href="https://www.youtube.com/@Haush.guitars"
              target="_BLANK" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }}
            >
              <img src={Youtube} className='red-logo2 img-fluid' alt='Instagram' />
            </motion.a>
          </div>
        </div>

      </nav>

    </header>
  );
}
export default Header;