


import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import Home from "./Home";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email.includes("@")) newErrors.email = "Enter a valid email";
    if (password.length < 6) newErrors.password = "Minimum 6 characters";
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log({ email, password });
      // Perform login logic here
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Home as background */}
      <div className="absolute inset-0 z-0">
        <Home />
      </div>

      {/* Blur and dark overlay */}
      <div className="absolute inset-0 z-10 backdrop-blur-[3px] bg-black bg-opacity-25" />

      {/* Login Modal */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md text-center relative">
          <button className="absolute top-4 left-4" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>

          <img src={logo} alt="Tutor Finder Logo" className="w-24 mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-6 text-gray-800">LOG IN</h2>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            {/* Email Field */}
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="text-sm text-red-500 ml-2 mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 ml-2">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500 pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute top-9 right-4 text-gray-500"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
              {errors.password && <p className="text-sm text-red-500 ml-2 mt-1">{errors.password}</p>}
            </div>

      {/* Forgot Password */}
<div className="text-right text-sm font-medium">
  <Link to="/forgot-password" className="text-coral-500 hover:underline">
    Forgot password?
  </Link>
</div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
            >
              Login
            </button>
          </form>

          {/* Sign up */}
          <p className="mt-6 text-sm text-gray-600 text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-bold text-coral-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
