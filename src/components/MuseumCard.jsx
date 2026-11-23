
import "../styles/MuseumCard.css";

function MuseumCard({ museum }) {
  return (
    <article className="museum-card">
      <div className="museum-card__image">
        <img
          src={museum.image}
          alt={museum.name}
          className="museum-card__photo"
        />

        <span className="museum-card__city">
          {museum.city}
        </span>

        <button
          className="museum-card__heart"
          aria-label="Add to favorites"
        >
          ♡
        </button>
      </div>

      <h3 className="museum-card__title">
        {museum.name}
      </h3>

      <p className="museum-card__desc">
        {museum.description}
      </p>

      <a href="#details" className="museum-card__link">
        View Details →
      </a>
    </article>
  );
}

export default MuseumCard;
