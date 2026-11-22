import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import BookingPage from "./pages/BookingPage";
import Navbar from "./components/Navbar";
import MuseumsPage from "./pages/MuseumsPage";

function App() {
  // نص البحث بيتحفظ هنا عشان الـ Navbar وصفحة المتاحف يشتركوا فيه
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

  if (page === "signup") {
    return <SignupPage />;
  }

  if (page === "booking") {
    return <BookingPage />;
  }

  return <LoginPage />;
}

export default App;