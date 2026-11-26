
import {
  Landmark,
  Ticket,
  CalendarDays,
  Clock,
  Users,
  UserRound,
  GraduationCap,
} from "lucide-react";

import tripBanner from "../assets/images/trip-summary-banner.png";
import "../styles/TripSummaryCard.css";

function TripSummaryCard({ bookingData = {} }) {
  const {
    museum,
    type,
    date,
    time,
    counts = {},
    total,
    currency = "EGP",
  } = bookingData;

  const visitorTypes = [
    { label: "Adults", count: counts.adult || 0, Icon: UserRound },
    { label: "Children", count: counts.child || 0, Icon: UserRound },
    { label: "Students", count: counts.student || 0, Icon: GraduationCap },
  ].filter((visitor) => visitor.count > 0);

  const totalVisitors = visitorTypes.reduce(
    (sum, visitor) => sum + visitor.count,
    0
  );

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      })
    : "Not available";

  const details = [
    { label: "Museum", value: museum, Icon: Landmark },
    { label: "Ticket Type", value: type, Icon: Ticket },
    { label: "Visit Date", value: formattedDate, Icon: CalendarDays },
    { label: "Start Time", value: time, Icon: Clock },
  ];

  return (
    <section className="trip-summary">
      <div className="trip-summary__image">
        <img src={tripBanner} alt="Ancient Egyptian temple and statue" />
      </div>

      <h2 className="trip-summary__title">
        Your Trip Summary
      </h2>

      <div className="trip-summary__details">
        {details.map(({ label, value, Icon }) => (
          <div className="trip-summary__detail" key={label}>
            <div className="trip-summary__icon">
              <Icon size={23} strokeWidth={2} />
            </div>

            <div className="trip-summary__text">
              <span>{label}</span>
              <strong>{value || "Not available"}</strong>
            </div>
          </div>
        ))}
      </div>

      <div className="trip-summary__visitors">
        <h3>
          <Users size={22} fill="currentColor" />
          Visitors
        </h3>

        {visitorTypes.map(({ label, count, Icon }) => (
          <div className="trip-summary__visitor" key={label}>
            <Icon size={17} />
            <span>{label}</span>
            <strong>{count}</strong>
          </div>
        ))}

        <div className="trip-summary__visitors-total">
          <Users size={21} fill="currentColor" />
          <span>Total Visitors</span>
          <strong>{totalVisitors}</strong>
        </div>
      </div>

      <div className="trip-summary__total">
        <span>Total</span>
        <strong>
          {currency} {Number(total || 0).toFixed(2)}
        </strong>
      </div>

      <div className="trip-summary__decoration">
        <span />
        <span className="trip-summary__lotus">♧</span>
        <span />
      </div>
    </section>
  );
}

export default TripSummaryCard;

