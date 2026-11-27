import { Home, Landmark, Info, Mail, Globe } from "lucide-react";
import "../styles/MuseumDetailsSidebar.css";
import logo from "../assets/images/logo.png";
import { useLanguage } from "../context/LanguageContext";

const BASE = import.meta.env.BASE_URL;

function MuseumDetailsSidebar() {
  const { language, setLanguage, t } = useLanguage();
  const isArabic = language === "AR";

  const links = [
    { key: "home", icon: Home, href: `${BASE}?page=museums` },
    { key: "museums", icon: Landmark, href: `${BASE}?page=museums`, active: true },
    { key: "about", icon: Info, href: `${BASE}?page=museums#about` },
    { key: "contact", icon: Mail, href: `${BASE}?page=museums#contact` },
  ];

  return (
    <aside className={`details-sidebar ${isArabic ? "rtl" : ""}`}>
      <div className="details-sidebar__logo">
        <img src={logo} alt="Athar logo" />
      </div>

      <nav className="details-sidebar__nav">
        {links.map(({ key, icon: Icon, href, active }) => (
          <a
            key={key}
            href={href}
            className={`details-sidebar__link ${active ? "active" : ""}`}
            aria-label={t(key)}
            title={t(key)}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={18} />
            <span>{t(key)}</span>
          </a>
        ))}
      </nav>

      <div className="details-sidebar__language">
        <Globe size={18} />
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label={t("selectLanguage")}
        >
          <option value="EN">English</option>
          <option value="AR">العربية</option>
        </select>
      </div>
    </aside>
  );
}

export default MuseumDetailsSidebar;