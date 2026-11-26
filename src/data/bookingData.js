
export const TICKET_TYPES = [
  {
    id: "museum",
    label: "Museum Ticket",
    labelAr: "تذكرة المتحف",
    needsLanguage: false,
  },
  {
    id: "robot",
    label: "Robot Tour",
    labelAr: "جولة بالروبوت",
    needsLanguage: true,
  },
  {
    id: "self",
    label: "Self Guid Tour",
    labelAr: "جولة ذاتية",
    needsLanguage: true,
  },
];

export const TIME_SLOTS = [
  "09:00 AM",
  "11:00 AM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

export const LANGUAGES = [
  { id: "English", label: "English", labelAr: "الإنجليزية" },
  { id: "Arabic", label: "Arabic", labelAr: "العربية" },
  { id: "Spanish", label: "Spanish", labelAr: "الإسبانية" },
  { id: "Italian", label: "Italian", labelAr: "الإيطالية" },
];

export const NATIONALITIES = [
  { id: "egyptian", label: "Egyptian", labelAr: "مصري" },
  { id: "other", label: "Other Nationality", labelAr: "جنسيات أخرى" },
];

export const PRICES = {
  egyptian: { adult: 220, child: 110, student: 110 },
  other: { adult: 50, child: 30, student: 25 },
};

export const VISITOR_TYPES = [
  {
    id: "adult",
    label: "Adult",
    labelAr: "بالغ",
    hint: "Ages 18 and above",
    hintAr: "18 سنة فأكثر",
  },
  {
    id: "child",
    label: "Child",
    labelAr: "طفل",
    hint: "Ages 6 to 17",
    hintAr: "من 6 إلى 17 سنة",
  },
  {
    id: "student",
    label: "Student",
    labelAr: "طالب",
    hint: "Valid student ID required",
    hintAr: "يشترط تقديم بطاقة طالب سارية",
  },
];

const WEEK_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const WEEK_AR = [
  "الأحد",
  "الإثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];

const MONTH_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MONTH_AR = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

export function formatDate(date, language = "EN") {
  const isArabic = language === "AR";

  const day = isArabic
    ? WEEK_AR[date.getDay()]
    : WEEK_SHORT[date.getDay()];

  const month = isArabic
    ? MONTH_AR[date.getMonth()]
    : MONTH_SHORT[date.getMonth()];

  return `${day}, ${date.getDate()} ${month}, ${date.getFullYear()}`;
}
