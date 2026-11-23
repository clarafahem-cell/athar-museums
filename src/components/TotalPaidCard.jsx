
import "../styles/TotalPaidCard.css";
import { Ornament, Skyline } from "./PaymentIcons";

function TotalPaidCard({
  ticketPrice = 0,
  serviceFee = 0,
  total = 0,
  currency = "EGP",
}) {
  const formatPrice = (amount) =>
    Number(amount).toFixed(2);

  return (
    <aside className="total-paid">
      <h2 className="total-paid__title">Total Paid</h2>

      <Ornament className="total-paid__ornament" />

      <div className="total-paid__amount">
        <span className="total-paid__currency">{currency}</span>
        <span>{formatPrice(total)}</span>
      </div>

      <div className="total-paid__details">
        <div className="total-paid__row">
          <span>Ticket Price</span>
          <span>{currency} {formatPrice(ticketPrice)}</span>
        </div>

        <div className="total-paid__row">
          <span>Service Fee (3%)</span>
          <span>{currency} {formatPrice(serviceFee)}</span>
        </div>
      </div>

      <div className="total-paid__divider" />

      <div className="total-paid__row total-paid__final">
        <strong>Total</strong>
        <strong>{currency} {formatPrice(total)}</strong>
      </div>

      <p className="total-paid__status">
        <span className="total-paid__status-icon">✓</span>
        Payment is secure
      </p>

      <Skyline className="total-paid__skyline" />
    </aside>
  );
}

export default TotalPaidCard;
