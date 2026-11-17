import { useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";
import InputField from "../components/InputField";
import GoogleIcon from "../components/GoogleIcon";
import logo from "../assets/images/login/logo.png";
import hero from "../assets/images/login/hero.png";
import "../styles/LoginPage.css";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا هتربط بالـ API بتاعك بعدين
    console.log("Login data:", form);
  };

  return (
    <main className="login-page">
      <section className="login-page__panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <img className="login-form__logo" src={logo} alt="Athar" />

          <header className="login-form__header">
            <h1>Museum Management System</h1>
            <p>Your heritage Our technology</p>
          </header>

          <div className="login-form__fields">
            <InputField
              icon={Mail}
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
            />
            <InputField
              icon={LockKeyhole}
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <div className="login-form__row">
            <label className="login-form__remember">
              <input
                type="checkbox"
                name="remember"
                checked={form.remember}
                onChange={handleChange}
              />
              Remember me
            </label>
            <a href="#" className="login-form__link">
              Forget password?
            </a>
          </div>

          <button type="submit" className="login-btn login-btn--gold">
            Login
          </button>

          <div className="login-form__divider">
            <span>or</span>
          </div>

          <button type="button" className="login-btn login-btn--outline">
            <GoogleIcon />
            Login with Google
          </button>

          <p className="login-form__signup">
            Don’t have an account?{" "}
            <a href="#" className="login-form__link">
              Create one
            </a>
          </p>
        </form>
      </section>

      <section
        className="login-page__hero"
        style={{ backgroundImage: `url(${hero})` }}
        aria-hidden="true"
      />
    </main>
  );
}