
import { useLanguage } from "../context/LanguageContext";
import "../styles/PaymentSuccessCard.css";
import { QrEnvelope } from "./PaymentIcons";

function PaymentSuccessCard({
  email = "yo***@example.com",
  reference = "ATH-2025-10248",
  onResend,
  onHome,
}) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  return (
    <section className="pay-card">
      <div className="pay-card__check">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12.5l4.5 4.5L19 7" />
        </svg>
      </div>

      <h2 className="pay-card__title">
        {isArabic ? "تم الحجز بنجاح" : "Booking Successful"}
      </h2>

      <p className="pay-card__sub">
        {isArabic
          ? "تم تأكيد حجزك بنجاح."
          : "Your booking is confirmed."}
      </p>

      <QrEnvelope className="pay-card__envelope" />

      <p className="pay-card__sent">
        {isArabic
          ? "تم إرسال تذكرتك التي تحتوي على رمز QR إلى بريدك الإلكتروني"
          : "Your QR ticket has been sent to your email"}
      </p>

      <p className="pay-card__email">{email}</p>

      <p className="pay-card__hint">
        {isArabic ? (
          <>
            يرجى التحقق من صندوق الوارد (ومجلد الرسائل غير المرغوب فيها)،
            <br />
            ثم إظهار رمز QR عند مدخل المتحف.
          </>
        ) : (
          <>
            Please check your inbox (and your spam folder),
            <br />
            then show the QR code at the museum entrance.
          </>
        )}
      </p>

      <div className="pay-card__ref">
        <span className="pay-card__ref-label">
          {isArabic ? "رقم مرجع الحجز" : "Booking Reference"}
        </span>

        <span className="pay-card__ref-code">{reference}</span>
      </div>

      <div className="pay-card__actions">
        <button
          type="button"
          className="pay-btn pay-btn--outline"
          onClick={onResend}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3.5 7l8.5 6 8.5-6" />
          </svg>

          {isArabic ? "إعادة إرسال البريد" : "Resend Email"}
        </button>

        <button
          type="button"
          className="pay-btn pay-btn--gold"
          onClick={onHome}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 11l8-7 8 7" />
            <path d="M6 10v10h12V10" />
            <path d="M10 20v-6h4v6" />
          </svg>

          {isArabic ? "العودة للرئيسية" : "Back to Home"}
        </button>
      </div>
    </section>
  );
}

export default PaymentSuccessCard;
