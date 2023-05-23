import React from "react";
import SectionImg from "../components/SectionImg";
import SectionArtists from "../components/SectionArtists";
import SectionAbout from "../components/SectionAbout";
import SectionIndio from "../components/SectionIndio";
import SectionRepairs from "../components/SectionRepairs";
import "../styles/Header.css";

function Home() {
  return (
    <div>
      <SectionImg />
      <SectionArtists />
      <SectionIndio />
      <SectionAbout />
      <SectionRepairs />
    </div>
  );
}

export default Home;