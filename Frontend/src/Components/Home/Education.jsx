import "../../SCSS/Home/Education.scss";
import ProgressBar from "./ProgressBar";
const Education = () => {
  return (
    <div className="education" id="education">
      <div className="EducationLabel">
        <h1 data-text="EDUCATION"></h1>
      </div>
      <div className="LvivPhoto">
        <img
          src="https://imgmasloportfolioaboba.blob.core.windows.net/images/LvivPoli.jpg"
          alt="Uni"
        />
        <div className="mainInfo">
          <h2>Lviv Polytechnic</h2>
          <h2>National University</h2>
          <p>
            Founded in 1816, Lviv Polytechnic National University is Ukraine's
            oldest technical university and, with a student population of around
            30,000, is also among the country's largest polytechnic
            institutions. The university became a centre of scientific and
            technological research during the nineteenth century.
          </p>
        </div>
      </div>
      <div className="universityinfo">
        <div className="Propilites">
          <div className="text">
            <p>
              <b>Major:</b> Computer Science
            </p>
            <p>
              <b>Degree:</b> Junior Bechlor Specialst{" "}
            </p>
            <p>
              <b>Period of study:</b> 4 Years
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
