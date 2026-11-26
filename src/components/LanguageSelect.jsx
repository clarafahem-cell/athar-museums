
import { useState, useRef, useEffect } from "react";
import { Languages, ChevronDown } from "lucide-react";
import { LANGUAGES } from "../data/bookingData";
import { useLanguage } from "../context/LanguageContext";
import "../styles/LanguageSelect.css";

export default function LanguageSelect({ value, onChange }) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

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

  const pick = (lang) => {
    onChange(lang.id);
    setOpen(false);
  };

  const selectedLanguage = LANGUAGES.find(
    (lang) => lang.id === value
  );

  return (
    <div className="lang-select" ref={wrapRef}>
      <button
        type="button"
        className={`lang-select__field ${value ? "has-value" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <Languages className="lang-select__icon" strokeWidth={1.8} />

        <span className="lang-select__text">
          {selectedLanguage
            ? isArabic
              ? selectedLanguage.labelAr
              : selectedLanguage.label
            : isArabic
              ? "اختر اللغة"
              : "Select a Language"}
        </span>

        <ChevronDown
          className={`lang-select__chevron ${open ? "is-open" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <ul className="lang-select__list" role="listbox">
          {LANGUAGES.map((lang) => (
            <li
              key={lang.id}
              role="option"
              aria-selected={value === lang.id}
            >
              <button
                type="button"
                className={`lang-select__option ${
                  value === lang.id ? "is-selected" : ""
                }`}
                onClick={() => pick(lang)}
              >
                {isArabic ? lang.labelAr : lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
