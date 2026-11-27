
import { ArrowLeft, MapPin } from "lucide-react";
import museums from "../data/museums";
import { useLanguage } from "../context/LanguageContext";
import "../styles/MuseumDetailsPage.css";
import "../styles/MuseumDetailsContent.css";

const BASE = import.meta.env.BASE_URL;

function getMuseumId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id")) || 1;
}

function splitTitle(name) {
  const words = name.trim().split(" ");
  const last = words.pop();
  return { first: words.join(" "), last };
}

function MuseumDetailsPage() {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const museum = museums.find((m) => m.id === getMuseumId());

  if (!museum) {
    return (
      <div className={`museum-details-page ${isArabic ? "rtl" : ""}`}>
        <main className="museum-details-content md-content">
          <a href={`${BASE}?page=museums`} className="md-back">
            <ArrowLeft size={16} strokeWidth={2.2} />
            <span>
              {isArabic ? "العودة إلى المتاحف" : "Back to Museums"}
            </span>
          </a>
          <p>{isArabic ? "المتحف غير موجود." : "Museum not found."}</p>
        </main>
      </div>
    );
  }

  const name = isArabic ? museum.nameAr : museum.name;
  const city = isArabic ? museum.cityAr : museum.city;
  const type = isArabic ? museum.typeAr : museum.type;

  const description = isArabic
    ? museum.longDescriptionAr ?? museum.descriptionAr
    : museum.longDescription ?? museum.description;

  const hours = isArabic ? "08:00 صباحًا" : "08:00 AM";
  const price = isArabic ? "السعر" : "Price";

  const images = (museum.images ?? [museum.image]).slice(0, 3);
  const { first, last } = splitTitle(name);

  const rows = [
    {
      label: isArabic ? "مواعيد الزيارة" : "Opening hours",
      value: hours,
    },
    {
      label: isArabic ? "سعر التذكرة" : "Ticket price",
      value: price,
    },
    {
      label: isArabic ? "نوع المتحف" : "Museum type",
      value: type,
    },
    {
      label: isArabic ? "المدينة" : "City",
      value: city,
    },
  ];

  return (
    <div className={`museum-details-page ${isArabic ? "rtl" : ""}`}>
      <main
        className="museum-details-content md-content"
        dir={isArabic ? "rtl" : "ltr"}
      >
        <a href={`${BASE}?page=museums`} className="md-back">
          <ArrowLeft size={16} strokeWidth={2.2} className="md-arrow" />
          <span>
            {isArabic ? "العودة إلى المتاحف" : "Back to Museums"}
          </span>
        </a>

        <div className="md-meta">
          <span className="md-city-pill">
            <MapPin size={12} />
            {city}
          </span>
          <span className="md-type-label">{type}</span>
        </div>

        <h1 className="md-title">
          {first} <span className="md-title-accent">{last}</span>
        </h1>

        <div className="md-layout">
          <div className="md-left">
            <div className={`md-gallery md-gallery--${images.length}`}>
              {images.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`${name} ${i + 1}`}
                  className={`md-img md-img--${i}`}
                />
              ))}
            </div>

            <section className="md-about">
              <h2>{isArabic ? "عن المتحف" : "About the Museum"}</h2>
              <p>{description}</p>
            </section>
          </div>

          <aside className="md-info">
            <h2>{isArabic ? "معلومات الزيارة" : "Visitor Info"}</h2>

            <dl className="md-rows">
              {rows.map((r) => (
                <div className="md-row" key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </dl>

            <a href={`${BASE}?page=booking`} className="md-book">
              {isArabic ? "احجز زيارتك" : "Book Your Visit"}
            </a>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default MuseumDetailsPage;
