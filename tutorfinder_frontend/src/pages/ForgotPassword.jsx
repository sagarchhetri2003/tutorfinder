import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
import logo from "../assets/logo/logo.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
    } else {
      setError("");
      console.log("Reset link sent to:", email);
      // Handle reset link logic
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background and blur */}
      <div className="absolute inset-0 z-0">
        <Home />
      </div>
      <div className="absolute inset-0 z-10 backdrop-blur-sm bg-black bg-opacity-30" />

      {/* Forgot Password Card */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md text-center relative">

          {/* Back button */}
          <button className="absolute top-4 left-4" onClick={() => navigate("/login")}>
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Logo and title */}
          <img src={logo} alt="Tutor Finder Logo" className="w-24 mx-auto mb-6" />
          <h2 className="text-xl font-bold mb-2 text-gray-800">Forgot Password</h2>
          <p className="text-sm text-gray-500 mb-6">We'll send you a link to reset your password</p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <div>
              <label className="text-sm font-medium text-gray-700 ml-2">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 mt-1 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-coral-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && <p className="text-sm text-red-500 ml-2 mt-1">{error}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-coral-500 text-white rounded-full hover:bg-coral-600 font-bold text-sm"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
