
import { useState } from "react";
import { Mail, LockKeyhole } from "lucide-react";
import InputField from "../components/InputField";
import GoogleIcon from "../components/GoogleIcon";
import { login } from "../services/authService";
import logo from "../assets/images/login/logo.png";
import hero from "../assets/images/login/hero.png";
import "../styles/LoginPage.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [error, setError] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setError("");
    setNotFound(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailPattern.test(form.email.trim())) {
      setError("Please enter a valid email address");
      return;
    }

    if (!form.password.trim()) {
      setError("Please enter your password");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await login(
        form.email.trim(),
        form.password
      );

      if (!data.token) {
        setError("Login failed. Please try again.");
        return;
      }

      const storage = form.remember ? localStorage : sessionStorage;

      storage.setItem("token", data.token);

      if (data.user) {
        storage.setItem("user", JSON.stringify(data.user));
      }

      window.location.assign(
        `${import.meta.env.BASE_URL}?page=museums`
      );

    } catch (err) {
      const message = err.response?.data?.message;

      if (err.response) {
        setError(message || "Invalid email or password.");
        setNotFound(err.response.status === 404);
      } else {
        setError(
          "Unable to connect to the server. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-page__panel">
        <form
          className="login-form"
          onSubmit={handleSubmit}
          noValidate
        >
          <img
            className="login-form__logo"
            src={logo}
            alt="Athar"
          />

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

          {error && (
            <p className="login-error">
              {error}{" "}
              {notFound && (
                <a
                  href={`${import.meta.env.BASE_URL}?page=signup`}
                  className="login-form__link"
                >
                  Create one
                </a>
              )}
            </p>
          )}

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

          <button
            type="submit"
            className="login-btn login-btn--gold"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="login-form__divider">
            <span>or</span>
          </div>

          <button
            type="button"
            className="login-btn login-btn--outline"
          >
            <GoogleIcon />
            Login with Google
          </button>

          <p className="login-form__signup">
            Don’t have an account?{" "}
            <a
              href={`${import.meta.env.BASE_URL}?page=signup`}
              className="login-form__link"
            >
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
