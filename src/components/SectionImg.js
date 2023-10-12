import React from "react";
import "../styles/SectionImg.css";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

function SectionImg() {
  const titulo = "HAUSH GUITARS"
  const subtitulo = "NUESTROS INSTRUMENTOS"

  const sentence = {
    hidden: {
      opacity: 1,

    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  }

  const letter = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <>
      <section className="heroCont">
        <div className="hero">
          <div className="heroh1">
            <motion.h1
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {titulo.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })
              }

            </motion.h1>
            <Link
              to='/instrumentos/' className="btn-hero"
            ><motion.h4 variants={sentence}
              initial="hidden"
              animate="visible">{subtitulo.split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                )
              })

                }</motion.h4></Link>
          </div>
        </div>
      </section>
      <hr width="100%" className="line" />
    </>
  );
}

export default SectionImg;