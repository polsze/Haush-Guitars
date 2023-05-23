import React from 'react';
import { Link } from "react-router-dom";
import "../styles/SectionIndio.css";
import Indio from '../images/indio.png'
import { LazyLoadImage } from "react-lazy-load-image-component";




function SectionIndio() {
	return (
		<>
		<div className='sectionIndio-container container-fluid'>
			<div className='imagen-indio-cont'>
			<Link to='/instruments/ismini'>
				<LazyLoadImage src={Indio} className='img-indio img-fluid' alt='Indio Solari' />
			</Link>
			</div>
			<div className='textIndio-container'>
			<h2>Guitarra Acústica Signature <br/>Indio Solari</h2>
			<p>El diseño de esta guitarra fue ideado junto con Gaspar Benegas para hacerle un regalo al Indio. En el proyecto colaboró la colega Camila Luna haciendo un trabajo fino en partes del proceso.
				 Se tuvo en cuenta reducir tamaño, escala y agregarle detalles para crear un modelo único.</p>
			</div>
		</div>
		</>
	)
}

export default SectionIndio;