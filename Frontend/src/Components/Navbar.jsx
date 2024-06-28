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
        <button>Home</button>
        <button>Skills</button>
        <button>Projects</button>
        <button>Contact</button>
      </div>
    </div>
  );
};
export default Navbar;
