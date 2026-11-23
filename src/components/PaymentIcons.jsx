const GOLD = "#b3974b";
const NAVY = "#203a59";
const CARD = "#faf9f4";

/* أيقونة الظرف اللي فيه QR */
export function QrEnvelope({ className }) {
  return (
    <svg className={className} viewBox="0 0 130 100" fill="none" aria-hidden="true">
      <rect x="4" y="34" width="122" height="62" rx="9" fill={CARD} stroke={GOLD} strokeWidth="2.6" />
      <path d="M5 44l60 36 60-36" stroke={GOLD} strokeWidth="2.6" strokeLinejoin="round" />
      <rect x="40" y="4" width="50" height="54" rx="7" fill={CARD} stroke={GOLD} strokeWidth="2.6" />
      <g stroke={NAVY} strokeWidth="2.6">
        <rect x="47" y="11" width="14" height="14" rx="2" />
        <rect x="69" y="11" width="14" height="14" rx="2" />
        <rect x="47" y="33" width="14" height="14" rx="2" />
      </g>
      <g fill={NAVY}>
        <rect x="51.5" y="15.5" width="5" height="5" />
        <rect x="73.5" y="15.5" width="5" height="5" />
        <rect x="51.5" y="37.5" width="5" height="5" />
        <rect x="69" y="33" width="5" height="5" />
        <rect x="78" y="33" width="5" height="5" />
        <rect x="73.5" y="42" width="5" height="5" />
      </g>
    </svg>
  );
}

/* الزخرفة الصغيرة (الجناحين) فوق عنوان Total Paid */
export function Ornament({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 36" fill="none" stroke={GOLD} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M52 20C42 20 30 16 16 8" />
      <path d="M52 23C41 24 28 22 12 18" />
      <path d="M52 26C42 28 30 28 18 28" />
      <path d="M52 17C44 15 36 10 28 4" />
      <path d="M68 20c10 0 22-4 36-12" />
      <path d="M68 23c11 1 24-1 40-5" />
      <path d="M68 26c10 2 22 2 34 2" />
      <path d="M68 17c8-2 16-7 24-13" />
      <path d="M60 10l7 9-7 10-7-10z" fill={GOLD} stroke="none" />
      <path d="M60 4v4" />
    </svg>
  );
}

/* رسمة الأهرامات والمباني تحت كارت Total Paid */
export function Skyline({ className }) {
  return (
    <svg className={className} viewBox="0 0 240 50" fill="none" stroke={GOLD} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M0 48H240" />
      <path d="M28 48L62 8l34 40" />
      <path d="M62 8v40" />
      <path d="M92 48l24-26 24 26" />
      <path d="M116 22v26" />
      <path d="M140 48V32M140 32c-6-1-9-5-10-8M140 32c6-1 9-5 10-8M140 32c-3-5-3-9 0-12M140 32c3-5 3-9 0-12" />
      <path d="M160 48V16h9v32M160 24h9" />
      <path d="M178 48V30h18v18" />
      <path d="M182 30v-5h10v5" />
      <path d="M200 48l14-17 14 17" />
      <path d="M214 31v17" />
      <path d="M8 48l12-14 12 14" />
    </svg>
  );
}