import React from 'react';
import '../styles/SectionAbout.css';
import guitarAbout from '../images/reparacion.png';
import guitars from '../images/claybass.png'

function SectionAbout() {
	return (
		<div className='about-container container-fluid' id="AboutUs">
			<hr width='100%' className='line'/>
			<div className='about-container2'>
				<div className='left-about'>
				<img src={guitars} className='guitar-about img-fluid' alt='Guitarra Haush' />
				</div>
				<div className='right-about'>
					<h1 className='aboutTitle'>Sobre Haush Guitars</h1>
					<p className='aboutText'>Haush Guitars tiene su origen en el año 2016,  Luthier Nicolás Barrios, tras largos años de capacitación, formación e infinito aprendizaje en la Asociación Argentina de Luthiers. Todo comenzó con la creación de un bajo para uso personal, lo que derivó en la motivación para seguir proyectando la empresa. Hoy en día, Haush Guitars trabaja con artistas de primer nivel que usan sus guitarras en shows masivos, grabaciones y ensayos, garantizando un verdadero prestigio a la marca. Los instrumentos son construidos a mano con total y entera dedicación en cada uno de ellos, con maderas macizas de excelentes prestaciones sonoras que influyen positivamente en el sonido resultante final.</p>
				</div>
			</div>
			<hr width='100%' className='line'/>
		</div>
	);
}

export default SectionAbout;

