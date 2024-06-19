import React from "react";
import "../../../SCSS/Home/Main.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="about">
        <h1>About Me</h1>
        <p>
          Hi, I'm a web developer with a passion for creating amazing web
          experiences.
        </p>
      </section>

      <section className="projects">
        <h1>My Projects</h1>
        <div className="project-list">
          <div className="project-item">Project 1</div>
          <div className="project-item">Project 2</div>
          <div className="project-item">Project 3</div>
        </div>
      </section>

      <section className="contact">
        <h1>Contact Me</h1>
        <p>Email: yourname@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default HomePage;
