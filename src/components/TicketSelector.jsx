
import { Info, Minus, Plus } from "lucide-react";
import {
  NATIONALITIES,
  PRICES,
  VISITOR_TYPES,
} from "../data/bookingData";
import { useLanguage } from "../context/LanguageContext";
import "../styles/TicketSelector.css";

const MAX_PER_TYPE = 10;

export default function TicketSelector({
  nationality,
  onNationalityChange,
  counts,
  onCountChange,
}) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const prices = PRICES[nationality];
  const currency = nationality === "other" ? "USD" : "EGP";

  return (
    <div className="ticket-select">
      <div
        className="ticket-select__nat"
        role="radiogroup"
        aria-label={isArabic ? "الجنسية" : "Nationality"}
      >
        {NATIONALITIES.map((n) => (
          <button
            key={n.id}
            type="button"
            role="radio"
            aria-checked={nationality === n.id}
            className={`ticket-select__pill ${
              nationality === n.id ? "is-selected" : ""
            }`}
            onClick={() => onNationalityChange(n.id)}
          >
            {isArabic ? n.labelAr : n.label}
          </button>
        ))}
      </div>

      <div className="ticket-select__rows">
        {VISITOR_TYPES.map((v) => {
          const count = counts[v.id];

          const visitorLabel = isArabic ? v.labelAr : v.label;
          const visitorHint = isArabic ? v.hintAr : v.hint;

          return (
            <div className="ticket-row" key={v.id}>
              <div className="ticket-row__label">
                <span>{visitorLabel}</span>

                <span
                  className="ticket-row__info"
                  tabIndex={0}
                  aria-label={visitorHint}
                >
                  <Info strokeWidth={1.8} />
                  <span className="ticket-row__tip">
                    {visitorHint}
                  </span>
                </span>
              </div>

              <span className="ticket-row__price">
                {currency} {prices[v.id]}
              </span>

              <div className="ticket-row__counter">
                <button
                  type="button"
                  className="ticket-row__btn"
                  aria-label={
                    isArabic
                      ? `إزالة تذكرة ${visitorLabel}`
                      : `Remove one ${v.label}`
                  }
                  disabled={count === 0}
                  onClick={() => onCountChange(v.id, count - 1)}
                >
                  <Minus strokeWidth={3} />
                </button>

                <span
                  className={`ticket-row__count ${
                    count > 0 ? "is-active" : ""
                  }`}
                >
                  {count}
                </span>

                <button
                  type="button"
                  className="ticket-row__btn"
                  aria-label={
                    isArabic
                      ? `إضافة تذكرة ${visitorLabel}`
                      : `Add one ${v.label}`
                  }
                  disabled={count === MAX_PER_TYPE}
                  onClick={() => onCountChange(v.id, count + 1)}
                >
                  <Plus strokeWidth={3} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
