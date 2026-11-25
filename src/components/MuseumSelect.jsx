
import { useState, useRef, useEffect } from "react";
import { Landmark, ChevronDown } from "lucide-react";
import museums from "../data/museums";
import "../styles/LanguageSelect.css";

export default function MuseumSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  // قفل القائمة لما تدوس برّه أو تضغط Esc
  useEffect(() => {
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const pick = (museum) => {
    onChange(museum.name);
    setOpen(false);
  };

  return (
    <div className="lang-select" ref={wrapRef}>
      <button
        type="button"
        className={`lang-select__field ${value ? "has-value" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Landmark className="lang-select__icon" strokeWidth={1.8} />
        <span className="lang-select__text">
          {value || "Select a Museum"}
        </span>
        <ChevronDown
          className={`lang-select__chevron ${open ? "is-open" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <ul className="lang-select__list" role="listbox">
          {museums.map((museum) => (
            <li
              key={museum.id}
              role="option"
              aria-selected={value === museum.name}
            >
              <button
                type="button"
                className={`lang-select__option ${
                  value === museum.name ? "is-selected" : ""
                }`}
                onClick={() => pick(museum)}
              >
                {museum.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
