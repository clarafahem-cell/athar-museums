
import {
  CalendarDays,
  Clock,
  Ticket,
  Users,
  Languages,
  ChevronRight,
} from "lucide-react";
import { formatDate } from "../data/bookingData";
import "../styles/BookingSummary.css";

const EMPTY = "—";

export default function BookingSummary({
  date,
  time,
  ticketLabel,
  language,
  showLanguage,
  visitorsText,
  totalEgyptian,
  totalOther,
  missing = [],
  disabled,
  onContinue,
}) {
  const rows = [
    { icon: CalendarDays, label: "Date", value: date ? formatDate(date) : "" },
    { icon: Clock, label: "Time", value: time ? time.replace(":", " : ") : "" },
    { icon: Ticket, label: "Ticket Type", value: ticketLabel || "" },
    ...(showLanguage
      ? [{ icon: Languages, label: "Language", value: language || "" }]
      : []),
    { icon: Users, label: "Visitors", value: visitorsText || "" },
  ];

  return (
    <aside className="summary">
      <h2 className="summary__title">Booking Summary</h2>

      <ul className="summary__rows">
        {rows.map(({ icon: Icon, label, value }) => (
          <li className="summary__row" key={label}>
            <Icon className="summary__icon" strokeWidth={1.6} />
            <span className="summary__label">{label}</span>
            <span className={`summary__value ${value ? "" : "is-empty"}`}>
              {value || EMPTY}
            </span>
          </li>
        ))}
      </ul>

      <div className="summary__total">
        <span>Egyptian Total</span>
        <span>EGP {totalEgyptian}</span>
      </div>

      <div className="summary__total">
        <span>Other Nationality Total</span>
        <span>USD {totalOther}</span>
      </div>

      {missing.length > 0 && (
        <p className="summary__hint">
          Please select: {missing.join(", ")}
        </p>
      )}

      <button
        type="button"
        className="summary__btn"
        disabled={disabled}
        onClick={onContinue}
      >
        Continue to Booking
        <ChevronRight strokeWidth={2.5} />
      </button>
    </aside>
  );
}
