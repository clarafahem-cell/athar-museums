
import { TIME_SLOTS } from "../data/bookingData";
import { useLanguage } from "../context/LanguageContext";
import "../styles/TimeSlots.css";

// "09:00 AM" تظهر "09 : 00 AM" زي الفيجما
const display = (t) => t.replace(":", " : ");

export default function TimeSlots({ value, onChange }) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  return (
    <div
      className="time-slots"
      role="radiogroup"
      aria-label={isArabic ? "اختر الوقت" : "Select time"}
    >
      {TIME_SLOTS.map((slot) => (
        <button
          key={slot}
          type="button"
          role="radio"
          aria-checked={value === slot}
          className={`time-slots__btn ${
            value === slot ? "is-selected" : ""
          }`}
          onClick={() => onChange(slot)}
        >
          {display(slot)}
        </button>
      ))}
    </div>
  );
}
