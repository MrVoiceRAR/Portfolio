import "../SCSS/Home/Navbar.scss";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src="https://imgmasloportfolioaboba.blob.core.windows.net/images/Maslo1.png"
          alt="Maslo"
        />
        <h1 className="label">MASLO</h1>
      </div>
      <div className="buttons">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#contacts">Contacts</a>
      </div>
    </div>
  );
};
export default Navbar;
