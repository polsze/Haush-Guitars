import React from "react";
import "../styles/SectionCredits.css";
import { Link } from "react-router-dom";
import Gys from "../images/logo-gys1.webp"
import Kvk from "../images/kvk-logo.webp"
import Vecc from "../images/logo-vecc1.webp"
import Myn from "../images/logo-moyano.webp"
import { LazyLoadImage } from "react-lazy-load-image-component";


const SectionCredits = () => {
  return (
    <>
      <section className="creditsCont">
        <p className='graceful'>
          Agradecimientos:
        </p>
        <div className='logos-cont'>

          <Link to='http://www.gysbross.com/' target='_BLANK'>
            <LazyLoadImage src={Gys} className='logos1 img-fluid' alt='G&S Logo' />
          </Link>
          <Link to='https://www.instagram.com/kvkfotos/' target='_BLANK'>
            <LazyLoadImage src={Kvk} className='logos1 img-fluid' alt='Vecc Logo' />
          </Link>
          <Link to='https://www.instagram.com/veccphotography/' target='_BLANK'>
            <LazyLoadImage src={Vecc} className='logos1 img-fluid' alt='KVK Logo' />
          </Link>
          <Link to='https://www.instagram.com/mtsrey10/' target='_BLANK'>
            <LazyLoadImage src={Myn} className='logos1 img-fluid' alt='Matías Moyano Logo' />
          </Link>
        </div>
      </section>
      <hr width="100%" className="line" />
    </>
  )
}

export default SectionCredits