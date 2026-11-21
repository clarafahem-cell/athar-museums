
export const TICKET_TYPES = [
  { id: "museum", label: "Museum Ticket", needsLanguage: false },
  { id: "robot", label: "Robot Tour", needsLanguage: true },
  { id: "self", label: "Self Guid Tour", needsLanguage: true },
];

export const TIME_SLOTS = [
  "09:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];


export const LANGUAGES = ["English", "Arabic", "French", "German", "Spanish", "Italian"];

export const NATIONALITIES = [
  { id: "egyptian", label: "Egyptian" },
  { id: "other", label: "Other Nationality" },
];


export const PRICES = {
  egyptian: { adult: 220, child: 110, student: 110 },
  other: { adult: 220, child: 110, student: 110 },
};

export const VISITOR_TYPES = [
  { id: "adult", label: "Adult", hint: "Ages 18 and above" },
  { id: "child", label: "Child", hint: "Ages 6 to 17" },
  { id: "student", label: "Student", hint: "Valid student ID required" },
];
const WEEK_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTH_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// بيرجّع التاريخ بالشكل ده: Sat, 28 Nov, 2026
export function formatDate(date) {
  return `${WEEK_SHORT[date.getDay()]}, ${date.getDate()} ${MONTH_SHORT[date.getMonth()]}, ${date.getFullYear()}`;
}