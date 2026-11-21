import { useState, useEffect } from "react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // قفل السايد بار بزرار Esc، ومنع سكرول الصفحة وهو مفتوح
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar__brand">
        <button
          className="navbar__menu"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <div className="navbar__logo">
          <img src={logo} alt="Athar logo" />
        </div>
      </div>

      {/* خلفية معتمة بتقفل السايد بار لما تدوس عليها (موبايل بس) */}
      <div
        className={`navbar__overlay ${open ? "open" : ""}`}
        onClick={closeMenu}
      />

      <nav className={`navbar__links ${open ? "open" : ""}`}>
        <button
          className="navbar__close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#museums" className="active" onClick={closeMenu}>Museums</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
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

        <button className="navbar__book"
          onClick={() => {
            window.location.href = `${window.location.pathname}?page=booking`;
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Book Now
        </button>
      </div>
    </header>
  );
}

export default Navbar;