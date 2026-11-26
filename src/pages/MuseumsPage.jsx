
import "../styles/MuseumsPage.css";
import heroBg from "../assets/images/hero-bg.png";
import Hero from "../components/Hero";
import MuseumList from "../components/MuseumList";
import museums from "../data/museums";
import { useLanguage } from "../context/LanguageContext";

function MuseumsPage({ query = "" }) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const q = query.trim().toLowerCase();

  const filteredMuseums = museums
    .filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        (m.city && m.city.toLowerCase().includes(q))
    )
    .sort((a, b) => b.popularity - a.popularity);

  return (
    <main className="museums-page">
      <div className="museums-page__bg">
        <img src={heroBg} alt="" />
      </div>

      <Hero />

      <section className="museums-page__body">
        {filteredMuseums.length > 0 ? (
          <MuseumList museums={filteredMuseums} />
        ) : (
          <p
            style={{
              width: "100%",
              padding: "48px 16px",
              textAlign: "center",
              fontSize: "18px",
              color: "var(--color-muted)",
            }}
          >
            {isArabic
              ? `لم يتم العثور على متاحف تطابق "${query}"`
              : `No museums found for "${query}"`}
          </p>
        )}
      </section>
    </main>
  );
}

export default MuseumsPage;
