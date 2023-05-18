import React from 'react';
import '../styles/SectionAbout.css';
import guitars from '../images/claybass.png';

function SectionAbout() {
	return (
		<div className='about-container container-fluid' id="AboutUs">
			<hr width='100%' className='line'/>
			<div className='about-container2'>
				<div className='left-about' data-aos="fade-up"
     data-aos-duration="3000">
				<img src={guitars} className='guitar-about img-fluid' alt='Bajo de Haush Guitars' />
				</div>
				<div className='right-about'>
					<h1 className='aboutTitle'>Sobre Haush Guitars</h1>
					<p className='aboutText'>Haush Guitars tiene su origen en el año 2015. El lutier Nicolás Barrios tras años de capacitación y formación, desarrolló sus habilidades calibrando instrumentos de cuerda frotada para orquestas juveniles, asimismo estudió construcción de guitarras en la Asociación Argentina de Lutiers, y por último, trabajó en la fábrica de Guitarras Zagert (La Alpujarra, Fonseca) donde pegaba puentes y calibraba 25000 guitarras al año. Después de esta experiencia, armó su propio taller y comienza a construir instrumentos. Hoy en día, Haush Guitars trabaja con artistas de primer nivel que usan sus guitarras en shows masivos, grabaciones y ensayos, garantizando un verdadero prestigio a la marca. Los instrumentos son construidos a mano con total y entera dedicación en cada uno de ellos, con maderas macizas de excelentes prestaciones sonoras que influyen positivamente en el sonido final.</p>
				</div>
			</div>
			<hr width='100%' className='line'/>
		</div>
	);
}

export default SectionAbout;

