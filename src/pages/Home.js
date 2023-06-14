import React from "react";
import SectionImg from "../components/SectionImg";
import SectionArtists from "../components/SectionArtists";
import SectionIndio from "../components/SectionIndio";
import "../styles/Header.css";
import SectionRepairs from "../components/SectionRepairs";

function Home() {
  return (
    <div>
      <SectionImg />
      <SectionArtists />
      <SectionIndio />
      <SectionRepairs />
    </div>
  );
}

export default Home;