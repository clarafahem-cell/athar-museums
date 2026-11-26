
import { useLanguage } from "../context/LanguageContext";
import "../styles/TotalPaidCard.css";
import { Ornament, Skyline } from "./PaymentIcons";

function TotalPaidCard({
  ticketPrice = 0,
  serviceFee = 0,
  total = 0,
  currency = "EGP",
}) {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const formatPrice = (amount) =>
    Number(amount).toFixed(2);

  return (
    <aside className="total-paid">
      <h2 className="total-paid__title">
        {isArabic ? "إجمالي المدفوعات" : "Total Paid"}
      </h2>

      <Ornament className="total-paid__ornament" />

      <div className="total-paid__amount">
        <span className="total-paid__currency">{currency}</span>
        <span>{formatPrice(total)}</span>
      </div>

      <div className="total-paid__details">
        <div className="total-paid__row">
          <span>{isArabic ? "سعر التذاكر" : "Ticket Price"}</span>
          <span>{currency} {formatPrice(ticketPrice)}</span>
        </div>

        <div className="total-paid__row">
          <span>
            {isArabic ? "رسوم الخدمة (3%)" : "Service Fee (3%)"}
          </span>
          <span>{currency} {formatPrice(serviceFee)}</span>
        </div>
      </div>

      {/* Temporary QR Code Preview */}
      <div className="total-paid__qr">
        <svg
          viewBox="0 0 21 21"
          width="112"
          height="112"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label={isArabic ? "معاينة رمز QR" : "Sample QR code preview"}
          shapeRendering="crispEdges"
        >
          <rect width="21" height="21" fill="white" />
          {[
            [1, 1], [2, 1], [3, 1], [4, 1], [5, 1],
            [1, 2], [5, 2], [1, 3], [3, 3], [5, 3],
            [1, 4], [5, 4], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
            [15, 1], [16, 1], [17, 1], [18, 1], [19, 1],
            [15, 2], [19, 2], [15, 3], [17, 3], [19, 3],
            [15, 4], [19, 4], [15, 5], [16, 5], [17, 5], [18, 5], [19, 5],
            [1, 15], [2, 15], [3, 15], [4, 15], [5, 15],
            [1, 16], [5, 16], [1, 17], [3, 17], [5, 17],
            [1, 18], [5, 18], [1, 19], [2, 19], [3, 19], [4, 19], [5, 19],
            [8, 1], [10, 1], [12, 1], [8, 3], [9, 4], [11, 4],
            [7, 7], [8, 7], [10, 7], [12, 7], [14, 7],
            [7, 9], [9, 9], [11, 9], [13, 9], [15, 9],
            [8, 11], [10, 11], [12, 11], [14, 11],
            [7, 13], [9, 13], [10, 14], [12, 13], [14, 14],
            [8, 15], [10, 15], [12, 16], [14, 17],
            [8, 18], [10, 18], [12, 19], [14, 19],
            [17, 8], [19, 8], [17, 10], [18, 11], [20, 12],
            [16, 13], [18, 14], [20, 15], [17, 17], [19, 19]
          ].map(([x, y], index) => (
            <rect
              key={index}
              x={x}
              y={y}
              width="1"
              height="1"
              fill="#17251f"
            />
          ))}
        </svg>

        <span>
          {isArabic ? "معاينة رمز QR" : "QR CODE PREVIEW"}
        </span>
      </div>

      <div className="total-paid__divider" />

      <div className="total-paid__row total-paid__final">
        <strong>{isArabic ? "الإجمالي" : "Total"}</strong>
        <strong>{currency} {formatPrice(total)}</strong>
      </div>

      <Skyline className="total-paid__skyline" />
    </aside>
  );
}

export default TotalPaidCard;
