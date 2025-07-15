import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../context/AuthContext";
import { createBookingApi, getTutorDetailsApi } from "../apis/api";

const Booking = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // tutorId
  const { user } = useAuth();

  const [selectedMode, setSelectedMode] = useState("online");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [time, setTime] = useState("");
  const [tutor, setTutor] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch tutor details
  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const response = await getTutorDetailsApi(id);
        if (response.data.success) {
          setTutor(response.data.tutor);
        }
      } catch (error) {
        console.error("Failed to fetch tutor:", error);
      }
    };
    fetchTutor();
  }, [id]);

  // Calculate total price based on time input
  useEffect(() => {
    if (time && tutor?.price) {
      const [hours, minutes] = time.split(":").map(Number);
      const totalHours = hours + minutes / 60;
      const calculatedPrice = Math.ceil(totalHours * tutor.price);
      setTotalPrice(calculatedPrice);
    }
  }, [time, tutor]);

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

  const handleBooking = async (e) => {
    e.preventDefault();

    if (!fromDate || !toDate || !time) {
      toast.error("Please fill in all fields", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }

    const bookingData = {
      tutorId: id,
      fromDate,
      toDate,
      time,
      price: totalPrice,
    };

    try {
      const response = await createBookingApi(bookingData);
      if (response.data.success) {
        toast.success("Booking request sent successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
        setTimeout(() => {
          navigate("/payment", { state: bookingData });
        }, 2000);
      } else {
        toast.error(response.data.message || "Failed to send booking request", {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("An unexpected error occurred", {
        position: "top-center",
        autoClose: 2000,
      });
      console.error("Booking API error:", error);
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
          <h3 className="text-lg font-semibold text-center mb-6">Schedule a booking</h3>
          <form className="space-y-4" onSubmit={handleBooking}>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="date"
                className="border p-2 rounded"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
              />
              <input
                type="date"
                className="border p-2 rounded"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
              />
            </div>
            <input
              type="time"
              className="border p-2 rounded w-full"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
            {tutor && (
              <div className="text-sm text-gray-700 text-center">
                <p>Hourly Rate: Rs. {tutor.price}</p>
                {time && <p className="font-semibold">Total Amount: Rs. {totalPrice}</p>}
              </div>
            )}
            <input
              type="text"
              value={user?.name || ""}
              disabled
              placeholder="Name"
              className="border p-2 rounded w-full"
            />
            <input
              type="email"
              value={user?.email || ""}
              disabled
              placeholder="Email"
              className="border p-2 rounded w-full"
            />
            <input
              type="text"
              value={user?.number || ""}
              disabled
              placeholder="Phone Number"
              className="border p-2 rounded w-full"
            />
            <button
              type="submit"
              className="bg-coral-500 hover:bg-coral-600 w-full text-white font-medium py-2 rounded-full"
            >
              Request Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
