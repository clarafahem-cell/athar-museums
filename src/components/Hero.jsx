
import "../styles/Hero.css";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  return (
    <section className="hero">
      <div className="hero__content">
        <p className="hero__tags">
          {isArabic ? (
            <>
              <span>استكشف</span> · <span>اكتشف</span> · <span>عِش التجربة</span>
            </>
          ) : (
            <>
              <span>EXPLORE</span> · <span>DISCOVER</span> · <span>EXPERIENCE</span>
            </>
          )}
        </p>

        <h1 className="hero__title">
          {isArabic ? (
            <>
              أشهر
              <br />
              <span>المتاحف في مصر</span>
            </>
          ) : (
            <>
              Egypt’s Most
              <br />
              <span>Famous Museums</span>
            </>
          )}
        </h1>

        <p className="hero__text">
          {isArabic
            ? "ادخل إلى عالم من التاريخ والثقافة والجمال الخالد. استكشف أشهر المتاحف المصرية واكتشف القصص وراء أعظم كنوزها."
            : "Step into a world of history, culture and timeless beauty. Explore Egypt’s most iconic museums and discover the stories behind its greatest treasures."}
        </p>
      </div>
    </section>
  );
}

export default Hero;
