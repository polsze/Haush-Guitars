import React from "react";
import { Link } from "react-router-dom";
import "../styles/SectionImg.css";
import Guitar1 from "../images/baltasarcomottoaS.png";
import Guitar2 from "../images/grasa.png";
import Guitar3 from "../images/guitar-mariel.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Carousel from 'react-bootstrap/Carousel';

function SectionImg() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={4000}>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar1}
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='text-carousel'>
         
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div className='text-carousel'>
         
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar3}
          alt="Third slide"
        />

        <Carousel.Caption>
<div className='text-carousel'>

         
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr width="100%" className="line" />
    </>
  );
}

export default SectionImg;