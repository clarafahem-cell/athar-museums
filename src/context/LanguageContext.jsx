
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

const translations = {
  EN: {
    home: "Home",
    museums: "Museums",
    about: "About",
    contact: "Contact",
    language: "Language",
    bookNow: "Book Now",
    backToHome: "Back to Home",
    search: "Search",
    searchMuseum: "Search for a museum...",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Select language",
  },

  AR: {
    home: "الرئيسية",
    museums: "المتاحف",
    about: "من نحن",
    contact: "تواصل معنا",
    language: "اللغة",
    bookNow: "احجز الآن",
    backToHome: "العودة للرئيسية",
    search: "بحث",
    searchMuseum: "ابحث عن متحف...",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    selectLanguage: "اختر اللغة",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("atharLanguage") || "EN";
  });

  useEffect(() => {
    localStorage.setItem("atharLanguage", language);

    document.documentElement.lang = language === "AR" ? "ar" : "en";
    document.documentElement.dir = language === "AR" ? "rtl" : "ltr";
  }, [language]);

  const t = (key) => {
    return translations[language]?.[key] || translations.EN[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
