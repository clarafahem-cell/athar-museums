
import { useState } from "react";
import { User, Mail, LockKeyhole, Check, Circle } from "lucide-react";
import InputField from "../components/InputField";
import GoogleIcon from "../components/GoogleIcon";
import { useLanguage } from "../context/LanguageContext";
import logo from "../assets/images/login/logo.png";
import hero from "../assets/images/login/hero.png";
import "../styles/LoginPage.css";
import "../styles/SignupPage.css";
import { saveUser, userExists } from "../data/users";

export default function SignupPage() {
  const { language } = useLanguage();
  const isArabic = language === "AR";

  const passwordRules = [
    {
      id: "length",
      label: isArabic ? "8 أحرف على الأقل" : "At least 8 characters",
      test: (p) => p.length >= 8,
    },
    {
      id: "upper",
      label: isArabic
        ? "حرف كبير واحد على الأقل (A-Z)"
        : "One uppercase letter (A-Z)",
      test: (p) => /[A-Z]/.test(p),
    },
    {
      id: "number",
      label: isArabic
        ? "رقم واحد على الأقل (0-9)"
        : "One number (0-9)",
      test: (p) => /\d/.test(p),
    },
    {
      id: "special",
      label: isArabic
        ? "رمز خاص واحد على الأقل (@ # ! $ ...)"
        : "One special character (@ # ! $ ...)",
      test: (p) => /[^A-Za-z0-9]/.test(p),
    },
  ];

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

  const allRulesPassed = passwordRules.every((rule) =>
    rule.test(form.password)
  );

  const errorMessages = {
    passwordRules: isArabic
      ? "كلمة المرور لا تستوفي جميع الشروط"
      : "Password does not meet all the requirements",

    passwordMismatch: isArabic
      ? "كلمتا المرور غير متطابقتين"
      : "Passwords do not match",

    emailExists: isArabic
      ? "يوجد حساب بالفعل بهذا البريد الإلكتروني"
      : "An account with this email already exists",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!allRulesPassed) {
      setError("passwordRules");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("passwordMismatch");
      return;
    }

    if (userExists(form.email)) {
      setError("emailExists");
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
            <h1>
              {isArabic ? "إنشاء حساب" : "Create Account"}
            </h1>

            <p>
              {isArabic
                ? "انضم إلى آثار وابدأ في إدارة المتحف وأسطول الروبوتات الخاص بك"
                : "Join ATHAR and start managing the museum and your robot fleet"}
            </p>
          </header>

          <div className="login-form__fields">
            <InputField
              icon={User}
              name="fullName"
              placeholder={isArabic ? "الاسم بالكامل" : "Full Name"}
              value={form.fullName}
              onChange={handleChange}
            />

            <InputField
              icon={Mail}
              type="email"
              name="email"
              placeholder={isArabic ? "البريد الإلكتروني" : "Email Address"}
              value={form.email}
              onChange={handleChange}
            />

            <div className="password-wrap">
              <InputField
                icon={LockKeyhole}
                type="password"
                name="password"
                placeholder={isArabic ? "كلمة المرور" : "Password"}
                value={form.password}
                onChange={handleChange}
              />

              {form.password.length > 0 && !allRulesPassed && (
                <ul className="password-rules">
                  {passwordRules.map((rule) => {
                    const passed = rule.test(form.password);

                    return (
                      <li key={rule.id} className={passed ? "is-valid" : ""}>
                        {passed ? <Check size={14} /> : <Circle size={14} />}
                        {rule.label}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <InputField
              icon={LockKeyhole}
              type="password"
              name="confirmPassword"
              placeholder={isArabic ? "تأكيد كلمة المرور" : "Confirm Password"}
              value={form.confirmPassword}
              onChange={handleChange}
            />
          </div>

          {error && (
            <p className="signup-error">
              {errorMessages[error]}
            </p>
          )}

          <button
            type="submit"
            className="login-btn login-btn--gold signup-submit"
          >
            {isArabic ? "إنشاء حساب" : "Sign Up"}
          </button>

          <div className="login-form__divider">
            <span>{isArabic ? "أو" : "or"}</span>
          </div>

          <button type="button" className="login-btn login-btn--outline">
            <GoogleIcon />
            {isArabic ? "تسجيل الدخول باستخدام Google" : "Login with Google"}
          </button>

          <p className="login-form__signup">
            {isArabic
              ? "لديك حساب بالفعل؟ "
              : "Already have an account? "}

            <a href={import.meta.env.BASE_URL} className="login-form__link">
              {isArabic ? "تسجيل الدخول" : "Login"}
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
