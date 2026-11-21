import { Info, Minus, Plus } from "lucide-react";
import { NATIONALITIES, PRICES, VISITOR_TYPES } from "../data/bookingData";
import "../styles/TicketSelector.css";

const MAX_PER_TYPE = 10;

export default function TicketSelector({
  nationality,
  onNationalityChange,
  counts,
  onCountChange,
}) {
  const prices = PRICES[nationality];

  return (
    <div className="ticket-select">
      <div className="ticket-select__nat" role="radiogroup" aria-label="Nationality">
        {NATIONALITIES.map((n) => (
          <button
            key={n.id}
            type="button"
            role="radio"
            aria-checked={nationality === n.id}
            className={`ticket-select__pill ${nationality === n.id ? "is-selected" : ""}`}
            onClick={() => onNationalityChange(n.id)}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="ticket-select__rows">
        {VISITOR_TYPES.map((v) => {
          const count = counts[v.id];
          return (
            <div className="ticket-row" key={v.id}>
              <div className="ticket-row__label">
                <span>{v.label}</span>
                <span className="ticket-row__info" tabIndex={0} aria-label={v.hint}>
                  <Info strokeWidth={1.8} />
                  <span className="ticket-row__tip">{v.hint}</span>
                </span>
              </div>

              <span className="ticket-row__price">EGP {prices[v.id]}</span>

              <div className="ticket-row__counter">
                <button
                  type="button"
                  className="ticket-row__btn"
                  aria-label={`Remove one ${v.label}`}
                  disabled={count === 0}
                  onClick={() => onCountChange(v.id, count - 1)}
                >
                  <Minus strokeWidth={3} />
                </button>

                <span className={`ticket-row__count ${count > 0 ? "is-active" : ""}`}>
                  {count}
                </span>

                <button
                  type="button"
                  className="ticket-row__btn"
                  aria-label={`Add one ${v.label}`}
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