import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Athar logo" />
      </div>

      <nav className="navbar__links">
        <a href="#home">Home</a>
        <a href="#museums" className="active">Museums</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar__actions">
        <button className="navbar__lang">EN ⌄</button>
        <button className="navbar__book">Book Now</button>
      </div>
    </header>
  );
}

export default Navbar;