import React from 'react';
import Guitar1 from '../images/baltasarcomotto.jpeg'	
import '../styles/SectionImg.css'
import Guitar2 from '../images/guitar4.png'
import Guitar3 from '../images/indio6.png'
import Guitar4 from '../images/instrumentsBg.jpeg'
import Guitar5 from '../images/guitar3.jpg'

function SectionImg() {

	return (
		<>
		<div className='sectionImg-container'>
				<img src={Guitar1} className='guitar img-fluid ' alt='Haush Logo' />
				<div className="guitar-container">
				<img src={Guitar2} className='guitars img-fluid' data-aos="fade-up" data-aos-offset="300"
     			 data-aos-duration="2000" alt='Haush Logo'/>
				<img src={Guitar3} className='guitars img-fluid' data-aos="fade-up" data-aos-offset="300"
     			 data-aos-duration="2000" alt='Haush Logo'/>
				<img src={Guitar4} className='guitars img-fluid' data-aos="fade-up" data-aos-offset="300"
     			 data-aos-duration="2000" alt='Haush Logo'/>
				<img src={Guitar5} className='guitars img-fluid' data-aos="fade-up" data-aos-offset="300"
     			 data-aos-duration="2000" alt='Haush Logo'/>
     			</div>
		</div>
		<hr width='100%' className='line'/>
		</>
	);
}

export default SectionImg;
