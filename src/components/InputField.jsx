
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../styles/InputField.css";

export default function InputField({
  icon: Icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <label className="input-field">
      {Icon && <Icon className="input-field__icon" size={26} strokeWidth={1.8} />}

      <input
        className="input-field__input"
        name={name}
        type={isPassword && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />

      {isPassword && (
        <button
          type="button"
          className="input-field__toggle"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <EyeOff size={22} strokeWidth={1.8} />
          ) : (
            <Eye size={22} strokeWidth={1.8} />
          )}
        </button>
      )}
    </label>
  );
}
