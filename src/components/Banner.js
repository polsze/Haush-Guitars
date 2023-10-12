import React from 'react'
import Indio from '../images/guitarra-clasica-haush.webp'
import Indio1 from '../images/bajo-acustico-haush.webp'
import Indio2 from '../images/intrumentos-personalizados-haush.webp'
import { Image } from 'react-bootstrap'
import "../styles/Banner.css";
import { Link } from "react-router-dom";



const Banner = () => {
  return (
    <>
      <section className='banner-cont'>
        <div className='imgbanner-cont'>
          <div className='titleBanner-cont'>
            <Image src={Indio} className='img-fluid imgbanner' alt="Haush Guitars, Guitarras acústicas y clásicas" />
            <Link to='/instrumentos' className='tituloBanner'>Guitarras criollas y acústicas</Link >
          </div>
          <div className='titleBanner-cont'>
            <Image src={Indio1} className='img-fluid imgbanner' alt="Haush Guitars, Bajos acústicos y clásicos" />
            <Link to='/instrumentos' className='tituloBanner'>Bajos clásicos y acústicos</Link >
          </div>
          <div className='titleBanner-cont'>
            <Image src={Indio2} className='img-fluid imgbanner' alt="Haush Guitars, instrumentos personalizados" />
            <Link to='/contacto' className='tituloBanner'>Instrumentos personalizados</Link >
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner