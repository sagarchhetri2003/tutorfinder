import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const navigate = useNavigate();
  const [selectedMode, setSelectedMode] = useState("online");

  const handleModeSelect = (mode) => {
    if (selectedMode === mode) {
      toast.warn(`You have already selected ${mode}`, {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      setSelectedMode(mode);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <LoggedInNavbar />
      <ToastContainer />

      <div className="flex items-center justify-center pt-24">
        <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-8 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
            onClick={() => navigate(-1)}
          >
            ✕
          </button>

          <h3 className="text-lg font-semibold text-center mb-6">
            Schedule a lesson location
          </h3>

          {/* Mode Buttons */}
          <div className="flex justify-center gap-4 mb-4 text-sm font-medium">
            <button
              className={`px-4 py-2 border rounded-full ${
                selectedMode === "offline"
                  ? "bg-coral-500 text-white border-coral-500"
                  : "text-gray-700"
              }`}
              onClick={() => handleModeSelect("offline")}
              type="button"
            >
              Offline
            </button>
            <button
              className={`px-4 py-2 border rounded-full ${
                selectedMode === "online"
                  ? "bg-coral-500 text-white border-coral-500"
                  : "text-gray-700"
              }`}
              onClick={() => handleModeSelect("online")}
              type="button"
            >
              Online
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="border p-2 rounded" />
              <input type="date" className="border p-2 rounded" />
            </div>
            <select className="border p-2 rounded w-full">
              <option>11:00 AM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
            </select>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="border p-2 rounded w-full"
            />
            <button
              type="submit"
              className="bg-coral-500 hover:bg-coral-600 w-full text-white font-medium py-2 rounded-full"
            >
              Proceed to Payment
            </button>
          </form>

          <p className="text-xs text-center mt-4 text-gray-400">
            This site is protected by reCAPTCHA and the Google Privacy Policy and
            Terms of Service apply.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
