import React from "react";
import { Link } from "react-router-dom";
import "../styles/SectionImg.css";
import Guitar1 from "../images/is-carrusel1.webp";
import Guitar2 from "../images/comotto-carrusel1.webp";
import Guitar3 from "../images/grasa-carrusel1.webp";
import Guitar4 from "../images/ms12-carrusel.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Carousel from 'react-bootstrap/Carousel';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function SectionImg() {
  return (
    <>
    <Carousel prevIcon={<BsChevronLeft />} 
      nextIcon={<BsChevronRight />}>
      <Carousel.Item interval={3000}>
      <Link to='/instrumentos/ismini'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar1}
          alt="Guitarra IS MINI"
        />

      </Link>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <Link to='/instrumentos/baltasarcomotto'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar2}
          alt="Guitarra Baltasar Comotto"
        />
        </Link>
      </Carousel.Item>

      <Carousel.Item interval={3000}>
      <Link to='/instrumentos/grasadepez'>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar3}
          alt="Bajo acústico Grasa de Pez"
        />
        </Link>
      </Carousel.Item>

       <Carousel.Item interval={3000}>
        <LazyLoadImage
          className="d-block w-100"
          src={Guitar4}
          alt="Bajo eléctrico MS-12 Marcos Sotelo"
        />
      </Carousel.Item>

    </Carousel>
    <hr width="100%" className="line" />
    </>
  );
}

export default SectionImg;