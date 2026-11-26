
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
import { TICKET_TYPES, VISITOR_TYPES } from "../data/bookingData";
import museums from "../data/museums";
import { useLanguage } from "../context/LanguageContext";
import "../styles/TripSummaryCard.css";

function TripSummaryCard({ bookingData = {} }) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const {
    museum,
    type,
    date,
    time,
    counts = {},
    total,
    currency = "EGP",
  } = bookingData;

  const selectedMuseum = museums.find((m) => m.name === museum);

  const selectedTicket = TICKET_TYPES.find(
    (t) => t.label === type
  );

  const visitorTypes = [
    {
      label: isArabic ? "البالغون" : "Adults",
      count: counts.adult || 0,
      Icon: UserRound,
    },
    {
      label: isArabic ? "الأطفال" : "Children",
      count: counts.child || 0,
      Icon: UserRound,
    },
    {
      label: isArabic ? "الطلاب" : "Students",
      count: counts.student || 0,
      Icon: GraduationCap,
    },
  ].filter((visitor) => visitor.count > 0);

  const totalVisitors = visitorTypes.reduce(
    (sum, visitor) => sum + visitor.count,
    0
  );

  const formattedDate = date
    ? new Date(date).toLocaleDateString(
        isArabic ? "ar-EG" : "en-GB",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
          timeZone: "UTC",
        }
      )
    : isArabic
      ? "غير متاح"
      : "Not available";

  const details = [
    {
      label: isArabic ? "المتحف" : "Museum",
      value: museum
        ? isArabic
          ? selectedMuseum?.nameAr || museum
          : museum
        : "",
      Icon: Landmark,
    },
    {
      label: isArabic ? "نوع التذكرة" : "Ticket Type",
      value: type
        ? isArabic
          ? selectedTicket?.labelAr || type
          : type
        : "",
      Icon: Ticket,
    },
    {
      label: isArabic ? "تاريخ الزيارة" : "Visit Date",
      value: formattedDate,
      Icon: CalendarDays,
    },
    {
      label: isArabic ? "وقت البدء" : "Start Time",
      value: time,
      Icon: Clock,
    },
  ];

  return (
    <section className="trip-summary">
      <div className="trip-summary__image">
        <img
          src={tripBanner}
          alt={
            isArabic
              ? "معبد وتمثال من مصر القديمة"
              : "Ancient Egyptian temple and statue"
          }
        />
      </div>

      <h2 className="trip-summary__title">
        {isArabic ? "ملخص رحلتك" : "Your Trip Summary"}
      </h2>

      <div className="trip-summary__details">
        {details.map(({ label, value, Icon }) => (
          <div className="trip-summary__detail" key={label}>
            <div className="trip-summary__icon">
              <Icon size={23} strokeWidth={2} />
            </div>

            <div className="trip-summary__text">
              <span>{label}</span>
              <strong>
                {value || (isArabic ? "غير متاح" : "Not available")}
              </strong>
            </div>
          </div>
        ))}
      </div>

      <div className="trip-summary__visitors">
        <h3>
          <Users size={22} fill="currentColor" />
          {isArabic ? "الزوار" : "Visitors"}
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
          <span>
            {isArabic ? "إجمالي الزوار" : "Total Visitors"}
          </span>
          <strong>{totalVisitors}</strong>
        </div>
      </div>

      <div className="trip-summary__total">
        <span>{isArabic ? "الإجمالي" : "Total"}</span>
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
