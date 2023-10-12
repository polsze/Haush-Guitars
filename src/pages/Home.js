import React from "react";
import SectionImg from "../components/SectionImg";
import SectionArtists from "../components/SectionArtists";
import SectionIndio from "../components/SectionIndio";
import "../styles/Header.css";
import SectionRepairs from "../components/SectionRepairs";
import Banner from "../components/Banner";
import SectionCredits from "../components/SectionCredits";

function Home() {
  return (
    <div>
      <SectionImg />
      <SectionIndio />
      <Banner />
      <SectionArtists />
      <SectionRepairs />
      <SectionCredits />
    </div>
  );
}

export default Home;