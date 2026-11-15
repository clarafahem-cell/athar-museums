import "../styles/Hero.css";
import heroBg from "../assets/images/hero-bg.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero__bg" src={heroBg} alt="" />
      <div className="hero__overlay"></div>

      <div className="hero__content">
        <p className="hero__tags">
          <span>EXPLORE</span> · <span>DISCOVER</span> · <span>EXPERIENCE</span>
        </p>

        <h1 className="hero__title">
          Egypt’s Most
          <br />
          <span>Famous Museums</span>
        </h1>

        <p className="hero__text">
          Step into a world of history, culture and timeless beauty. Explore
          Egypt’s most iconic museums and discover the stories behind its
          greatest treasures.
        </p>
      </div>
    </section>
  );
}

export default Hero;