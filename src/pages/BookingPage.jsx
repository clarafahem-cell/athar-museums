
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import DatePicker from "../components/DatePicker";
import TimeSlots from "../components/TimeSlots";
import LanguageSelect from "../components/LanguageSelect";
import TicketSelector from "../components/TicketSelector";
import BookingSummary from "../components/BookingSummary";
import { PRICES, TICKET_TYPES, VISITOR_TYPES } from "../data/bookingData";
import logo from "../assets/images/logo.png";
import "../styles/BookingPage.css";

const BASE = import.meta.env.BASE_URL;

const EMPTY_COUNTS = { adult: 0, child: 0, student: 0 };

export default function BookingPage() {
  const [typeId, setTypeId] = useState("museum");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [language, setLanguage] = useState("");
  const [nationality, setNationality] = useState("egyptian");

  // كل جنسية لها عدادات مستقلة
  const [countsByNationality, setCountsByNationality] = useState({
    egyptian: { ...EMPTY_COUNTS },
    other: { ...EMPTY_COUNTS },
  });

  const type = TICKET_TYPES.find((t) => t.id === typeId);

  // العدادات الخاصة بالجنسية المختارة حاليًا
  const counts = countsByNationality[nationality];

  const egyptianCounts = countsByNationality.egyptian;
  const otherCounts = countsByNationality.other;

  // عدد التذاكر لكل جنسية
  const getTicketCount = (nationalityCounts) =>
    VISITOR_TYPES.reduce(
      (sum, v) => sum + nationalityCounts[v.id],
      0
    );

  const egyptianTicketCount = getTicketCount(egyptianCounts);
  const otherTicketCount = getTicketCount(otherCounts);

  const totalTickets = egyptianTicketCount + otherTicketCount;

  // حساب إجمالي المصريين بالجنيه
  const totalEgyptian = VISITOR_TYPES.reduce(
    (sum, v) => sum + egyptianCounts[v.id] * PRICES.egyptian[v.id],
    0
  );

  // حساب إجمالي الأجانب بالدولار
  const totalOther = VISITOR_TYPES.reduce(
    (sum, v) => sum + otherCounts[v.id] * PRICES.other[v.id],
    0
  );

  // عرض أعداد الزوار من الجنسيتين
  const getVisitorsText = (nationalityCounts, label) => {
    const selectedVisitors = VISITOR_TYPES
      .filter((v) => nationalityCounts[v.id] > 0)
      .map((v) => `${v.label} ${nationalityCounts[v.id]}`);

    return selectedVisitors.length
      ? `${label}: ${selectedVisitors.join(", ")}`
      : "";
  };

  const visitorsText = [
    getVisitorsText(egyptianCounts, "Egyptian"),
    getVisitorsText(otherCounts, "Other Nationality"),
  ]
    .filter(Boolean)
    .join(" | ");

  const missing = [
    !date && "Date",
    !time && "Time",
    type.needsLanguage && !language && "Language",
    totalTickets === 0 && "Tickets",
  ].filter(Boolean);

  const canContinue = missing.length === 0;

  const handleTypeChange = (id) => {
    setTypeId(id);

    if (!TICKET_TYPES.find((t) => t.id === id).needsLanguage) {
      setLanguage("");
    }
  };

  const handleCountChange = (id, value) => {
    setCountsByNationality((prev) => ({
      ...prev,
      [nationality]: {
        ...prev[nationality],
        [id]: value,
      },
    }));
  };

  const handleContinue = () => {
    console.log("Booking:", {
      type: type.label,
      date,
      time,
      language: type.needsLanguage ? language : null,
      countsByNationality,
      totalEgyptian,
      totalOther,
    });
  };

  return (
    <main className="booking">
      <div className="booking__inner">
        <header className="booking__header">
          <img className="booking__logo" src={logo} alt="Athar" />
          <h1 className="booking__title">Book Your Ticket</h1>
          <a className="booking__back" href={`${BASE}?page=museums`}>
            <ArrowLeft strokeWidth={2.2} />
            Back to Home
          </a>
        </header>

        <div className="booking__body">
          <section className="booking__card">
            <h2 className="booking__label">Select Ticket Type</h2>

            <div className="booking__types" role="radiogroup" aria-label="Ticket type">
              {TICKET_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={typeId === t.id}
                  className={`booking__type ${typeId === t.id ? "is-selected" : ""}`}
                  onClick={() => handleTypeChange(t.id)}
                >
                  <span className="booking__radio" />
                  {t.label}
                </button>
              ))}
            </div>

            <div className="booking__grid">
              <div className="booking__col">
                <h2 className="booking__label">Select Visit Date</h2>
                <div className="booking__field">
                  <DatePicker value={date} onChange={setDate} />
                </div>

                <div className="booking__time">
                  <h2 className="booking__label">Select Time</h2>
                  <TimeSlots value={time} onChange={setTime} />
                </div>
              </div>

              <div className="booking__col">
                {type.needsLanguage && (
                  <div className="booking__lang">
                    <h2 className="booking__label">Select Language</h2>
                    <div className="booking__field">
                      <LanguageSelect value={language} onChange={setLanguage} />
                    </div>
                  </div>
                )}

                <div className="booking__ticket">
                  <h2 className="booking__label">Select Ticket</h2>
                  <div className="booking__field booking__field--tickets">
                    <TicketSelector
                      nationality={nationality}
                      onNationalityChange={setNationality}
                      counts={counts}
                      onCountChange={handleCountChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <BookingSummary
            date={date}
            time={time}
            ticketLabel={type.label}
            language={language}
            showLanguage={type.needsLanguage}
            visitorsText={visitorsText}
            totalEgyptian={totalEgyptian}
            totalOther={totalOther}
            missing={missing}
            disabled={!canContinue}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </main>
  );
}
