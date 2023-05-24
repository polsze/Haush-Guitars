import React from "react";
import { Link } from "react-router-dom";
import "../styles/SectionImg.css";
import Guitar1 from "../images/is-carrusel.png";
import Guitar2 from "../images/comotto-carrusel.png";
import Guitar3 from "../images/grasa-carrusel.png";
import Guitar4 from "../images/bass-m12-carrusel.png";
import Guitar5 from "../images/ubass-carrusel.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Carousel from 'react-bootstrap/Carousel';

function SectionImg() {
  return (
    <>
    <Carousel>
      <Carousel.Item interval={4000}>
      <Link to='/instruments/ismini'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar1}
          alt="First slide"
        />
      </Link>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <Link to='/instruments/baltasarcomotto'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar2}
          alt="Second slide"
        />
        </Link>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <Link to='/instruments/grasadepez'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar3}
          alt="Third slide"
        />
        </Link>
      </Carousel.Item>

       <Carousel.Item interval={4000}>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar4}
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <Link to='/instruments/ubass'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar5}
          alt="Second slide"
        />
        </Link>
      </Carousel.Item>

    </Carousel>
    <hr width="100%" className="line" />
    </>
  );
}

export default SectionImg;