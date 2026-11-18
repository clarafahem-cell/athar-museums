import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import MuseumsPage from "./pages/MuseumsPage";

function App() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page");

  if (page === "museums") {
    return (
      <div>
        <Navbar />
        <MuseumsPage />
      </div>
    );
  }

  if (page === "signup") {
    return <SignupPage />;
  }

  return <LoginPage />;
}

export default App;
