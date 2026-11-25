
import { useState } from "react";
import Navbar from "../components/Navbar";
import PaymentSuccessCard from "../components/PaymentSuccessCard";
import TotalPaidCard from "../components/TotalPaidCard";
import "../styles/PaymentPage.css";

function PaymentPage() {
  const [query, setQuery] = useState("");

  // استرجاع بيانات الحجز
  const bookingData = JSON.parse(
    sessionStorage.getItem("atharBooking") || "{}"
  );

  // استرجاع بيانات المستخدم الحالي
  const currentUser = JSON.parse(
    sessionStorage.getItem("user") ||
    localStorage.getItem("user") ||
    "{}"
  );

  const handleResend = () => {
    alert("Your confirmation email will be resent.");
  };

  const handleHome = () => {
    window.location.href = `${import.meta.env.BASE_URL}?page=museums`;
  };

  return (
    <div className="payment-page">
      <Navbar query={query} onQueryChange={setQuery} />

      <main className="payment-page__content">
        <div className="payment-page__cards">
          <PaymentSuccessCard
            email={currentUser.email || "Email not available"}
            reference="ATH-2025-10248"
            onResend={handleResend}
            onHome={handleHome}
          />

          <TotalPaidCard
            ticketPrice={bookingData.ticketPrice || 0}
            serviceFee={bookingData.serviceFee || 0}
            total={bookingData.total || 0}
            currency={bookingData.currency || "EGP"}
          />
        </div>
      </main>
    </div>
  );
}

export default PaymentPage;
