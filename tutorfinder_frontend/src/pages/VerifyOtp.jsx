import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo/logo.png";
import Home from "./Home";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("forgotEmail");

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!otp || otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/verify-otp", {
        email,
        otp,
      });

      setMessage(res.data.message);
      setError("");

      // Optionally save auth flag for reset
      localStorage.setItem("otpVerified", "true");

      // Navigate to reset password
      navigate("/reset-password");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid OTP. Please try again.");
      setMessage("");
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
          <h2 className="text-xl font-bold mb-2 text-gray-800">Verify OTP</h2>
          <p className="text-sm text-gray-500 mb-6">Enter the OTP sent to your email</p>

          <form onSubmit={handleVerify} className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">OTP Code</label>
              <input
                type="text"
                maxLength={6}
                placeholder="6-digit OTP"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              {error && <p className="text-sm text-red-500 ml-2 mt-1">{error}</p>}
              {message && <p className="text-sm text-green-500 ml-2 mt-1">{message}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
            >
              Verify OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
