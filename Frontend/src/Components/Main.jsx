import React from "react";
import "../SCSS/Home/Main.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="Introdaction">
        <div className="about">
          <div className="text">
            <h1>
              The Art of Front-End Development: Explore My Skills for this
              buisness
            </h1>
            <h1>
              The Art of Front-End Development: Explore My Skills for this
              buisness
            </h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              debitis ad amet error suscipit consectetur repudiandae ut
              aspernatur, incidunt dicta labore dolores tenetur laboriosam, odit
              dolor rerum aliquam, consequuntur nulla.
            </p>
          </div>
          <div className="ProfilePicture">
            <image src="../Assets/Artem.jpg" alt="Photo" />
          </div>
        </div>
      </div>

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
