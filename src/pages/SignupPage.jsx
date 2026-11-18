import { useState } from "react";
import { User, Mail, LockKeyhole, Check, Circle } from "lucide-react";
import InputField from "../components/InputField";
import GoogleIcon from "../components/GoogleIcon";
import logo from "../assets/images/login/logo.png";
import hero from "../assets/images/login/hero.png";
import "../styles/LoginPage.css";
import "../styles/SignupPage.css";
import { saveUser, userExists } from "../data/users";

const passwordRules = [
  { id: "length", label: "At least 8 characters", test: (p) => p.length >= 8 },
  { id: "upper", label: "One uppercase letter (A-Z)", test: (p) => /[A-Z]/.test(p) },
  { id: "number", label: "One number (0-9)", test: (p) => /\d/.test(p) },
  {
    id: "special",
    label: "One special character (@ # ! $ ...)",
    test: (p) => /[^A-Za-z0-9]/.test(p),
  },
];

export default function SignupPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allRulesPassed = passwordRules.every((rule) =>
      rule.test(form.password)
    );

    if (!allRulesPassed) {
      setError("Password does not meet all the requirements");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
        if (userExists(form.email)) {
      setError("An account with this email already exists");
      return;
    }

    saveUser({ fullName: form.fullName, email: form.email });

    window.location.assign(`${import.meta.env.BASE_URL}?page=museums`);
  };

  return (
    <main className="login-page signup-page">
      <section className="login-page__panel">
        <form className="login-form" onSubmit={handleSubmit}>
          <img className="login-form__logo" src={logo} alt="Athar" />

          <header className="login-form__header">
            <h1>Create Account</h1>
            <p>
              Join ATHAR and start managing the museum and your robot fleet
            </p>
          </header>

          <div className="login-form__fields">
            <InputField
              icon={User}
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
            />
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
            <InputField
              icon={LockKeyhole}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {form.password.length > 0 && (
            <ul className="password-rules">
              {passwordRules.map((rule) => {
                const passed = rule.test(form.password);
                return (
                  <li key={rule.id} className={passed ? "is-valid" : ""}>
                    {passed ? <Check size={16} /> : <Circle size={16} />}
                    {rule.label}
                  </li>
                );
              })}
            </ul>
          )}

          {error && <p className="signup-error">{error}</p>}

          <button
            type="submit"
            className="login-btn login-btn--gold signup-submit"
          >
            Sign Up
          </button>

          <div className="login-form__divider">
            <span>or</span>
          </div>

          <button type="button" className="login-btn login-btn--outline">
            <GoogleIcon />
            Login with Google
          </button>

          <p className="login-form__signup">
            Already have an account?{" "}
            <a href={import.meta.env.BASE_URL} className="login-form__link">
              Login
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