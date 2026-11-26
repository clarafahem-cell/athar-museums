
import {
  CalendarDays,
  Clock,
  Ticket,
  Users,
  Languages,
  ChevronRight,
  Landmark,
} from "lucide-react";
import {
  formatDate,
  TICKET_TYPES,
  LANGUAGES,
  VISITOR_TYPES,
} from "../data/bookingData";
import museums from "../data/museums";
import { useLanguage } from "../context/LanguageContext";
import "../styles/BookingSummary.css";

const EMPTY = "—";

export default function BookingSummary({
  museum,
  date,
  time,
  ticketLabel,
  language,
  showLanguage,
  visitorsText,
  totalEgyptian,
  totalOther,
  nationality,
  missing = [],
  disabled,
  onContinue,
}) {
  const { language: siteLanguage } = useLanguage();
  const isArabic = siteLanguage === "AR";

  const selectedMuseum = museums.find((m) => m.name === museum);

  const selectedTicket = TICKET_TYPES.find(
    (t) => t.label === ticketLabel
  );

  const selectedTourLanguage = LANGUAGES.find(
    (lang) => lang.id === language
  );

  const rows = [
    {
      icon: Landmark,
      label: isArabic ? "المتحف" : "Museum",
      value: museum
        ? isArabic
          ? selectedMuseum?.nameAr || museum
          : museum
        : "",
    },
    {
      icon: CalendarDays,
      label: isArabic ? "التاريخ" : "Date",
      value: date ? formatDate(date, siteLanguage) : "",
    },
    {
      icon: Clock,
      label: isArabic ? "الوقت" : "Time",
      value: time ? time.replace(":", " : ") : "",
    },
    {
      icon: Ticket,
      label: isArabic ? "نوع التذكرة" : "Ticket Type",
      value: ticketLabel
        ? isArabic
          ? selectedTicket?.labelAr || ticketLabel
          : ticketLabel
        : "",
    },
    ...(showLanguage
      ? [
          {
            icon: Languages,
            label: isArabic ? "اللغة" : "Language",
            value: language
              ? isArabic
                ? selectedTourLanguage?.labelAr || language
                : language
              : "",
          },
        ]
      : []),
    {
      icon: Users,
      label: isArabic ? "الزوار" : "Visitors",
      value: visitorsText || "",
    },
  ];

  const translatedMissing = missing.map((item) => {
    if (!isArabic) return item;

    const translations = {
      Museum: "المتحف",
      Date: "التاريخ",
      Time: "الوقت",
      Language: "اللغة",
      Tickets: "التذاكر",
    };

    return translations[item] || item;
  });

  return (
    <aside className="summary">
      <h2 className="summary__title">
        {isArabic ? "ملخص الحجز" : "Booking Summary"}
      </h2>

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

      {nationality === "egyptian" ? (
        <div className="summary__total">
          <span>
            {isArabic ? "الإجمالي للمصريين" : "Egyptian Total"}
          </span>
          <span>EGP {totalEgyptian}</span>
        </div>
      ) : (
        <div className="summary__total">
          <span>
            {isArabic
              ? "الإجمالي للجنسيات الأخرى"
              : "Other Nationality Total"}
          </span>
          <span>USD {totalOther}</span>
        </div>
      )}

      {missing.length > 0 && (
        <p className="summary__hint">
          {isArabic ? "من فضلك اختر: " : "Please select: "}
          {translatedMissing.join("، ")}
        </p>
      )}

      <button
        type="button"
        className="summary__btn"
        disabled={disabled}
        onClick={onContinue}
      >
        {isArabic ? "متابعة الحجز" : "Continue to Booking"}
        <ChevronRight strokeWidth={2.5} />
      </button>
    </aside>
  );
}
