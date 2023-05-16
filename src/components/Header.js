import React from 'react';
import '../styles/Header.css';
import haushLogo from '../images/haushlogo.png';
import Contact from '../pages/Contact';
import { Link } from 'react-router-dom';

function Header(props) {

  return (

    <div className='header-container container-fluid'>
      <nav className="navbar navbar-expand-lg">
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/instruments">Instrumentos</Link>
                </li>              
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contacto</Link>
                </li>
              </ul>
              <div className='social-containerH'>
                <i class="bi bi-instagram socialLogo"></i>
                <i class="bi bi-facebook socialLogo"></i>
                <i class="bi bi-whatsapp socialLogo"></i>
              </div>
           
        </div>
      </nav>
    </div>
  );
}
export default Header;