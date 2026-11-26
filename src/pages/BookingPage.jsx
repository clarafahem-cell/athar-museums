
import { useState } from "react";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DatePicker";
import TimeSlots from "../components/TimeSlots";
import LanguageSelect from "../components/LanguageSelect";
import MuseumSelect from "../components/MuseumSelect";
import TicketSelector from "../components/TicketSelector";
import BookingSummary from "../components/BookingSummary";
import { PRICES, TICKET_TYPES, VISITOR_TYPES } from "../data/bookingData";
import { useLanguage } from "../context/LanguageContext";
import "../styles/BookingPage.css";

const BASE = import.meta.env.BASE_URL;

const EMPTY_COUNTS = { adult: 0, child: 0, student: 0 };

export default function BookingPage() {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const [typeId, setTypeId] = useState("museum");
  const [museum, setMuseum] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [languageSelected, setLanguageSelected] = useState("");
  const [nationality, setNationality] = useState("egyptian");

  const [countsByNationality, setCountsByNationality] = useState({
    egyptian: { ...EMPTY_COUNTS },
    other: { ...EMPTY_COUNTS },
  });

  const type = TICKET_TYPES.find((t) => t.id === typeId);
  const counts = countsByNationality[nationality];

  const totalTickets = VISITOR_TYPES.reduce(
    (sum, v) => sum + counts[v.id],
    0
  );

  const totalEgyptian = VISITOR_TYPES.reduce(
    (sum, v) =>
      sum + countsByNationality.egyptian[v.id] * PRICES.egyptian[v.id],
    0
  );

  const totalOther = VISITOR_TYPES.reduce(
    (sum, v) =>
      sum + countsByNationality.other[v.id] * PRICES.other[v.id],
    0
  );

  const visitorsText = VISITOR_TYPES
    .filter((v) => counts[v.id] > 0)
    .map((v) => {
      const label = isArabic ? v.labelAr : v.label;
      return `${label} ${counts[v.id]}`;
    })
    .join(isArabic ? "، " : ", ");

  const missing = [
    !museum && (isArabic ? "المتحف" : "Museum"),
    !date && (isArabic ? "التاريخ" : "Date"),
    !time && (isArabic ? "الوقت" : "Time"),
    type.needsLanguage &&
      !languageSelected &&
      (isArabic ? "اللغة" : "Language"),
    totalTickets === 0 && (isArabic ? "التذاكر" : "Tickets"),
  ].filter(Boolean);

  const canContinue = missing.length === 0;

  const handleTypeChange = (id) => {
    setTypeId(id);

    if (!TICKET_TYPES.find((t) => t.id === id).needsLanguage) {
      setLanguageSelected("");
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
    if (!canContinue) return;

    const ticketPrice =
      nationality === "egyptian" ? totalEgyptian : totalOther;

    const serviceFee = Number((ticketPrice * 0.03).toFixed(2));

    const finalTotal = Number(
      (ticketPrice + serviceFee).toFixed(2)
    );

    const bookingData = {
      museum,
      type: type.label,
      date,
      time,
      nationality,
      language: type.needsLanguage ? languageSelected : null,
      counts: { ...counts },
      visitorsText: VISITOR_TYPES
        .filter((v) => counts[v.id] > 0)
        .map((v) => `${v.label} ${counts[v.id]}`)
        .join(", "),
      ticketPrice,
      serviceFee,
      total: finalTotal,
      currency: nationality === "egyptian" ? "EGP" : "USD",
    };

    sessionStorage.setItem(
      "atharBooking",
      JSON.stringify(bookingData)
    );

    window.location.href = `${BASE}?page=payment`;
  };

  return (
    <main className="booking">
      <Navbar variant="booking" />

      <div className="booking__inner">
        <h1 className="booking__page-title">
          {isArabic ? "احجز تذكرتك" : "Book Your Ticket"}
        </h1>

        <div className="booking__body">
          <section className="booking__card">
            <h2 className="booking__label">
              {isArabic ? "اختر نوع التذكرة" : "Select Ticket Type"}
            </h2>

            <div
              className="booking__types"
              role="radiogroup"
              aria-label={isArabic ? "نوع التذكرة" : "Ticket type"}
            >
              {TICKET_TYPES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  role="radio"
                  aria-checked={typeId === t.id}
                  className={`booking__type ${
                    typeId === t.id ? "is-selected" : ""
                  }`}
                  onClick={() => handleTypeChange(t.id)}
                >
                  <span className="booking__radio" />
                  {isArabic ? t.labelAr : t.label}
                </button>
              ))}
            </div>

            <div className="booking__grid">
              <div className="booking__col">
                <h2 className="booking__label">
                  {isArabic ? "اختر المتحف" : "Select Museum"}
                </h2>

                <div className="booking__field">
                  <MuseumSelect
                    value={museum}
                    onChange={setMuseum}
                  />
                </div>

                <h2
                  className="booking__label"
                  style={{ marginTop: "20px" }}
                >
                  {isArabic ? "اختر تاريخ الزيارة" : "Select Visit Date"}
                </h2>

                <div className="booking__field">
                  <DatePicker value={date} onChange={setDate} />
                </div>

                <div className="booking__time">
                  <h2 className="booking__label">
                    {isArabic ? "اختر الوقت" : "Select Time"}
                  </h2>
                  <TimeSlots value={time} onChange={setTime} />
                </div>
              </div>

              <div className="booking__col">
                {type.needsLanguage && (
                  <div className="booking__lang">
                    <h2 className="booking__label">
                      {isArabic ? "اختر اللغة" : "Select Language"}
                    </h2>

                    <div className="booking__field">
                      <LanguageSelect
                        value={languageSelected}
                        onChange={setLanguageSelected}
                      />
                    </div>
                  </div>
                )}

                <div className="booking__ticket">
                  <h2 className="booking__label">
                    {isArabic ? "اختر التذاكر" : "Select Ticket"}
                  </h2>

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
            museum={museum}
            date={date}
            time={time}
            ticketLabel={type.label}
            language={languageSelected}
            showLanguage={type.needsLanguage}
            visitorsText={visitorsText}
            totalEgyptian={totalEgyptian}
            totalOther={totalOther}
            nationality={nationality}
            missing={missing}
            disabled={!canContinue}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </main>
  );
}
