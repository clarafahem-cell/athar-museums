
import { useState, useEffect, useRef } from "react";
import {
  Search,
  X,
  Globe,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import "../styles/Navbar.css";
import logo from "../assets/images/logo.png";

const BASE = import.meta.env.BASE_URL;

function Navbar({
  query = "",
  onQueryChange = () => {},
  variant = "default",
}) {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const inputRef = useRef(null);

  const closeMenu = () => setOpen(false);
  const isBooking = variant === "booking";

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        setSearchOpen(false);
      }
    };

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  // Navbar الخاص بصفحة الحجز
  if (isBooking) {
    return (
      <header className="navbar navbar--booking">
        <div className="navbar__brand">
          <div className="navbar__logo">
            <img src={logo} alt="Athar logo" />
          </div>
        </div>

        <a
          className="navbar__back"
          href={`${BASE}?page=museums`}
        >
          <ArrowLeft size={18} strokeWidth={2.2} />
          <span>Back to Home</span>
        </a>
      </header>
    );
  }

  // Navbar العادي لباقي الصفحات
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <button
          className="navbar__menu"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>

        <div className="navbar__logo">
          <img src={logo} alt="Athar logo" />
        </div>
      </div>

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
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#museums" className="active" onClick={closeMenu}>Museums</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>

        <div className="navbar__language">
          <Globe size={18} />
          <span>Language</span>
          <ChevronDown size={16} />

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            aria-label="Select language"
          >
            <option value="EN">English</option>
            <option value="AR">العربية</option>
          </select>
        </div>
      </nav>

      <div className="navbar__actions">
        <button
          type="button"
          className={`navbar__search-btn ${query ? "has-query" : ""}`}
          aria-label="Search"
          aria-expanded={searchOpen}
          onClick={() => setSearchOpen((s) => !s)}
        >
          <Search size={18} strokeWidth={2} />
        </button>

        <button
          type="button"
          className="navbar__book"
          onClick={() => {
            window.location.href = `${BASE}?page=booking`;
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          Book Now
        </button>
      </div>

      <div className={`navbar__search ${searchOpen ? "open" : ""}`}>
        <Search
          className="navbar__search-icon"
          size={18}
          strokeWidth={2}
        />

        <input
          ref={inputRef}
          type="search"
          placeholder="Search for a museum..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />

        {query && (
          <button
            type="button"
            className="navbar__search-clear"
            aria-label="Clear search"
            onClick={() => onQueryChange("")}
          >
            <X size={16} strokeWidth={2.2} />
          </button>
        )}
      </div>
    </header>
  );
}

export default Navbar;
