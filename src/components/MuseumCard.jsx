
import "../styles/MuseumCard.css";
import { useLanguage } from "../context/LanguageContext";

function MuseumCard({ museum }) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  return (
    <article className="museum-card">
      <div className="museum-card__image">
        <img
          src={museum.image}
          alt={isArabic ? museum.nameAr : museum.name}
          className="museum-card__photo"
        />

        <span className="museum-card__city">
          {isArabic ? museum.cityAr : museum.city}
        </span>

        <button
          className="museum-card__heart"
          aria-label={isArabic ? "أضف إلى المفضلة" : "Add to favorites"}
        >
          ♡
        </button>
      </div>

      <h3 className="museum-card__title">
        {isArabic ? museum.nameAr : museum.name}
      </h3>

      <p className="museum-card__desc">
        {isArabic ? museum.descriptionAr : museum.description}
      </p>

      <a href="#details" className="museum-card__link">
        {isArabic ? "عرض التفاصيل ←" : "View Details →"}
      </a>
    </article>
  );
}

export default MuseumCard;
