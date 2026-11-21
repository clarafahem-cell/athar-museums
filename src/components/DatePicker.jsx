import { useState, useRef, useEffect } from "react";
import { CalendarDays, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { formatDate } from "../data/bookingData";
import "../styles/DatePicker.css";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

const sameDay = (a, b) =>
  !!a && !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export default function DatePicker({ value, onChange }) {
  const today = startOfDay(new Date());
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(
    new Date((value || today).getFullYear(), (value || today).getMonth(), 1)
  );
  const wrapRef = useRef(null);

  // قفل التقويم لما تدوس برّه
  useEffect(() => {
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const year = view.getFullYear();
  const month = view.getMonth();
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells = [
    ...Array(firstWeekday).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => new Date(year, month, i + 1)),
  ];

  // مينفعش نرجع لشهر قبل الشهر الحالي
  const canGoPrev =
    year > today.getFullYear() ||
    (year === today.getFullYear() && month > today.getMonth());

  const goMonth = (step) => setView(new Date(year, month + step, 1));

  const pick = (date) => {
    onChange(date);
    setOpen(false);
  };

  return (
    <div className="date-picker" ref={wrapRef}>
      <button
        type="button"
        className={`date-picker__field ${value ? "has-value" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <CalendarDays className="date-picker__icon" strokeWidth={1.8} />
        <span className="date-picker__text">
          {value ? formatDate(value) : "Select a Date"}
        </span>
        <ChevronDown
          className={`date-picker__chevron ${open ? "is-open" : ""}`}
          strokeWidth={2}
        />
      </button>

      {open && (
        <div className="date-picker__popup">
          <div className="date-picker__header">
            <button
              type="button"
              className="date-picker__nav"
              aria-label="Previous month"
              disabled={!canGoPrev}
              onClick={() => goMonth(-1)}
            >
              <ChevronLeft />
            </button>
            <span className="date-picker__title">
              {MONTHS[month]} {year}
            </span>
            <button
              type="button"
              className="date-picker__nav"
              aria-label="Next month"
              onClick={() => goMonth(1)}
            >
              <ChevronRight />
            </button>
          </div>

          <div className="date-picker__weekdays">
            {WEEKDAYS.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>

          <div className="date-picker__days">
            {cells.map((date, i) =>
              date ? (
                <button
                  key={i}
                  type="button"
                  className={`date-picker__day ${sameDay(date, value) ? "is-selected" : ""}`}
                  disabled={date < today}
                  onClick={() => pick(date)}
                >
                  {date.getDate()}
                </button>
              ) : (
                <span key={i} />
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}