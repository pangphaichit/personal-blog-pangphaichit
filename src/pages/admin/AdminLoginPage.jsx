import { useState } from "react";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export const AdminLoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const validateField = (field, value) => {
    if (!value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: true }));
      return false;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: false }));
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateField("email", formData.email);
    const isPasswordValid = validateField("password", formData.password);

    if (isEmailValid && isPasswordValid) {
      console.log("Logging in with:", formData);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex justify-center items-center p-4 my-4 flex-grow">
        <div className="w-full max-w-2xl bg-[#EFEEEB] rounded-sm shadow-md px-3 sm:px-20 py-14">
          <p className="text-xl font-semibold text-orange-300 text-center mb-4">Admin panel</p>
          <h2 className="text-4xl font-semibold text-center mb-6 text-foreground">Log in</h2>
          <form className="space-y-8" onSubmit={handleSubmit}>
            <InputField
              id="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              isError={errors.email}
              errorMessage="Please enter a valid email."
            />
            <InputField
              id="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              isError={errors.password}
              errorMessage="Please enter your password."
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-2 bg-foreground text-white rounded-full hover:bg-muted-foreground transition-colors"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

const InputField = ({ id, label, value, onChange, isError, errorMessage }) => (
  <div className="relative space-y-1">
    <label htmlFor={id} className="block text-sm font-medium text-muted-foreground">
      {label}
    </label>
    <Input
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={label}
      className={`mt-1 py-3 rounded-sm placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-muted-foreground ${isError ? "border-red-500" : ""}`}
    />
    {isError && (
      <p className="text-red-500 text-xs absolute">{errorMessage}</p>
    )}
  </div>
);


