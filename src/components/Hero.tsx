import React from "react";
import styles from "../style";
import { heroImage } from "../assets";

const Hero = () => (
  <section id="home" className="w-full h-screen">
    <img
      src={heroImage}
      className="object-cover w-full h-full"
      alt="Hero Image"
    />
  </section>
);

export default Hero;
