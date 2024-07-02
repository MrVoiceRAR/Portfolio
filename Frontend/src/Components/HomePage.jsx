import React from "react";
import "../SCSS/Home/HomePage.scss";
import Intro from "./Home/Intro";
import Skills from "./Home/Skills";
import Education from "./Home/Education";
import Projects from "./Home/Projects";
import Contact from "./Home/Contact";
const HomePage = () => {
  return (
    <div className="home-page">
      <Intro />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default HomePage;
