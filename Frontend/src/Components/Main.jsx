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

      <div className="projects">
        <h1 data-text="My Skills">My Skills</h1>
        <div className="skill-list">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            explicabo alias nulla culpa laudantium, aliquid aut debitis fugit
            animi exercitationem minus esse recusandae earum iste quos suscipit
            rem quisquam repudiandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            mollitia officiis eveniet neque reiciendis minima dicta voluptatibus
            eum ducimus. Illum incidunt, voluptatem reiciendis unde deleniti
            saepe minus et repellendus ullam!
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            expedita? Eum sapiente illum omnis nulla tempore neque id animi
            iusto, ipsam repellat atque minima. Harum aperiam molestiae
            exercitationem omnis vitae!
          </p>
        </div>
        <h2>Tools</h2>
        <div className="Tools">
          <div className="tool">
            <img src="" alt="HTML" />
            <p>HTML</p>
          </div>
          <div className="tool">
            <img src="" alt="SCSS" />
            <p>SCSS</p>
          </div>
          <div className="tool">
            <img src="" alt="JS" />
            <p>Js</p>
          </div>
          <div className="tool">
            <img src="" alt="ReactJS" />
            <p>ReactJS</p>
          </div>
          <div className="tool">
            <img src="" alt="Git" />
            <p>Git</p>
          </div>
          <div className="tool">
            <img src="" alt="MySql" />
            <p>MySQL</p>
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
