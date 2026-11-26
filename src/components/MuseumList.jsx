
import "../styles/MuseumList.css";
import MuseumCard from "./MuseumCard";
import { useLanguage } from "../context/LanguageContext";

function MuseumList({ museums }) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  if (museums.length === 0) {
    return (
      <p className="museum-list__empty">
        {isArabic ? "لا توجد متاحف." : "No museums found."}
      </p>
    );
  }

  return (
    <div className="museum-list">
      {museums.map((museum) => (
        <MuseumCard key={museum.id} museum={museum} />
      ))}
    </div>
  );
}

export default MuseumList;
