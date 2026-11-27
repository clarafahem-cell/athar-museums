import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BookingPage from "./pages/BookingPage";
import PaymentPage from "./pages/PaymentPage";
import Navbar from "./components/Navbar";
import MuseumsPage from "./pages/MuseumsPage";
import MuseumDetailsPage from "./pages/MuseumDetailsPage";
import { LanguageProvider } from "./context/LanguageContext";

function AppContent() {
  const [query, setQuery] = useState("");

  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page === "museums") {
    return (
      <div>
        <Navbar query={query} onQueryChange={setQuery} />
        <MuseumsPage query={query} />
      </div>
    );
  }

if (page === "museum-details") {
  return (
    <div>
      <Navbar query={query} onQueryChange={setQuery} />
      <MuseumDetailsPage />
    </div>
  );
}
  if (page === "signup") {
    return <SignupPage />;
  }

  if (page === "booking") {
    return <BookingPage />;
  }

  if (page === "payment") {
    return <PaymentPage />;
  }

  return <LoginPage />;
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;