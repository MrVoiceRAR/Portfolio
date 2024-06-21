import React from "react";
import "../SCSS/Home/Main.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Intro */}
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
              I'm a passionate Front-End Developer with a keen eye for design
              and a drive for seamless user experiences. As a young
              professional, I bring a fresh perspective and experience with
              modern web technologies. Originally from Ukraine, now living in
              the USA, I am eager to grow my skills and contribute to exciting
              projects, leveraging my diverse background for innovative
              problem-solving.
            </p>
          </div>

          <img src="../../../public/Artem.jpg" alt="Photo" />
        </div>
      </div>
      {/*  */}
      {/* Projects */}
      <div className="projects">
        {/* Skills */}
        <h1 data-text="My Skills">My Skills</h1>
        <div className="skill-list">
          <p>
            <b>Communicable:</b> Effective at conveying ideas and collaborating
            across languages.
          </p>
          <p>
            <b>Multilingual:</b> Fluent in English, Ukrainian, Russian, and
            Polish, facilitating clear communication in diverse settings.
          </p>
          <p>
            <b>Creative:</b> Excels at generating and developing innovative
            ideas and solutions.
          </p>

          <p>
            <b>Team Player:</b> Strong collaborator who thrives in group
            environments, contributing positively to team dynamics and achieving
            collective goals.
          </p>
          <p>
            <b>Receptive to Criticism:</b> Values feedback as an opportunity for
            growth and improvement, actively listening and incorporating
            constructive input.
          </p>
          <p>
            <b>Goal-Oriented:</b> Driven by a passion for achieving objectives
            and overcoming challenges with determination.
          </p>
          <p>
            <b>Assertive:</b> Capable of confidently defending positions and
            advocating for ideas with clarity and conviction.
          </p>
        </div>

        {/* Tools */}
        <h2>Tools</h2>
        <div className="Tools">
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h2 class="html">HTML</h2>

                <p class="html">
                  HTML (HyperText Markup Language) is the standard language used
                  to create and structure webpages.
                </p>
              </div>
            </div>
            <div class="face face2">
              <img className="lnglogo" src="../../public/html.svg" alt="Html" />
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h2 class="scss">SCSS</h2>

                <p class="scss">
                  Sass is a CSS preprocessor that adds features like variables,
                  nested rules, and mixins for more efficient styling.
                </p>
              </div>
            </div>
            <div class="face face2">
              <img src="../public/ScssLogo.svg" alt="Scss" />
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h2 class="js">JS</h2>

                <p class="js">
                  JavaScript (JS) is a programming language used to create
                  interactive and dynamic content on webpages.
                </p>
              </div>
            </div>
            <div class="face face2">
              <img src="./../public/jsLogo.svg" alt="JS" />
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h2 class="react">React</h2>

                <p class="react">
                  React is a JavaScript library for building user interfaces,
                  especially single-page applications, with a component-based
                  architecture.
                </p>
              </div>
            </div>

            <div class="face face2">
              <img src="./../public/react-2.svg" alt="React" />
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h2 class="mysql">MySQl</h2>

                <p class="mysql">
                  MySQL is a relational database management system used for
                  storing and managing data.
                </p>
              </div>
            </div>
            <div class="face face2">
              <img
                className="mysqllogo"
                src="../public/MysqlLogo.svg"
                alt="MySQL"
              />
            </div>
          </div>
          <div class="card">
            <div class="face face1">
              <div class="content">
                <h2 class="git">GIT</h2>

                <p class="git">
                  Git is a version control system for tracking changes in code
                  and collaborating on software development.
                </p>
              </div>
            </div>
            <div class="face face2">
              <img src="../public/gitLogo.svg" alt="GIT" />
            </div>
          </div>
        </div>
      </div>

      <section className="contact">
        <h1>Contact Me</h1>
        <p>Email: yourname@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </div>
  );
};

export default HomePage;
