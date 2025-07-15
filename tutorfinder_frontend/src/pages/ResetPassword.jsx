import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo/logo.png";
import Home from "./Home";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const email = localStorage.getItem("forgotEmail");
  const isVerified = localStorage.getItem("otpVerified") === "true";

  useEffect(() => {
    if (!email || !isVerified) {
      navigate("/login");
    }
  }, [email, isVerified, navigate]);

  const handleReset = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/reset-password", {
        email,
        newPassword: password,
      });

      setMessage(res.data.message || "Password reset successful");
      setError("");

      // Clear local storage & redirect
      localStorage.removeItem("forgotEmail");
      localStorage.removeItem("otpVerified");

      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Reset failed. Try again.");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Home />
      </div>
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black bg-opacity-30" />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center relative">

          <button className="absolute top-4 left-4" onClick={() => navigate("/login")}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>

          <img src={logo} alt="Tutor Finder Logo" className="w-24 mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Reset Password</h2>
          <p className="text-sm text-gray-500 mb-6">Set a new password for your account</p>

          <form onSubmit={handleReset} className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter new password"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            {error && <p className="text-sm text-red-500 ml-2 mt-1">{error}</p>}
            {message && <p className="text-sm text-green-500 ml-2 mt-1">{message}</p>}

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
