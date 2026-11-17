import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="Athar logo" />
      </div>

      <nav className={`navbar__links ${open ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#museums" className="active">Museums</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="navbar__actions">
        <button className="navbar__lang">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20z" />
          </svg>
          EN ▾
        </button>

        <button className="navbar__book">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Book Now
        </button>

        <button
          className="navbar__menu"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;