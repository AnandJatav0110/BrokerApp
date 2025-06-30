import React from "react";
import Hero from "./Hero";
import Award from "./Awards";
import Education from "./Education";
import Price from "./Pricing";
import Stats from "./stats";
import OpenAccount from "../OpenAccount";
import Navbar from "../navbar";
import Footer from "../footer";

function HomePage() {
  return (
    <>
      <Hero />
      <Award />
      <Stats />
      <Price />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
