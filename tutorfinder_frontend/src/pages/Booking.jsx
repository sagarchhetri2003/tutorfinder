// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from "../context/AuthContext";
// import { createBookingApi, getTutorDetailsApi } from "../apis/api";

// const Booking = () => {
//   const navigate = useNavigate();
//   const { id } = useParams(); // tutorId
//   const { user } = useAuth();

//   const [selectedMode, setSelectedMode] = useState("online");
//   const [fromDate, setFromDate] = useState("");
//   const [toDate, setToDate] = useState("");
//   const [time, setTime] = useState("");
//   const [tutor, setTutor] = useState(null);
//   const [totalPrice, setTotalPrice] = useState(0);

//   // Fetch tutor details
//   useEffect(() => {
//     const fetchTutor = async () => {
//       try {
//         const response = await getTutorDetailsApi(id);
//         if (response.data.success) {
//           setTutor(response.data.tutor);
//         }
//       } catch (error) {
//         console.error("Failed to fetch tutor:", error);
//       }
//     };
//     fetchTutor();
//   }, [id]);

//   // Calculate total price based on time input
//   useEffect(() => {
//     if (time && tutor?.price) {
//       const [hours, minutes] = time.split(":").map(Number);
//       const totalHours = hours + minutes / 60;
//       const calculatedPrice = Math.ceil(totalHours * tutor.price);
//       setTotalPrice(calculatedPrice);
//     }
//   }, [time, tutor]);

//   const handleModeSelect = (mode) => {
//     if (selectedMode === mode) {
//       toast.warn(`You have already selected ${mode}`, {
//         position: "top-center",
//         autoClose: 2000,
//       });
//     } else {
//       setSelectedMode(mode);
//     }
//   };

//   const handleBooking = async (e) => {
//     e.preventDefault();

//     if (!fromDate || !toDate || !time) {
//       toast.error("Please fill in all fields", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//       return;
//     }

//     const bookingData = {
//       tutorId: id,
//       fromDate,
//       toDate,
//       time,
//       price: totalPrice,
//     };

//     try {
//       const response = await createBookingApi(bookingData);
//       if (response.data.success) {
//         toast.success("Booking request sent successfully!", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//         setTimeout(() => {
//           navigate("/payment", { state: bookingData });
//         }, 2000);
//       } else {
//         toast.error(response.data.message || "Failed to send booking request", {
//           position: "top-center",
//           autoClose: 2000,
//         });
//       }
//     } catch (error) {
//       toast.error("An unexpected error occurred", {
//         position: "top-center",
//         autoClose: 2000,
//       });
//       console.error("Booking API error:", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <LoggedInNavbar />
//       <ToastContainer />
//       <div className="flex items-center justify-center pt-24">
//         <div className="bg-white w-full max-w-lg rounded-xl shadow-xl p-8 relative">
//           <button
//             className="absolute top-4 right-4 text-gray-500 hover:text-black"
//             onClick={() => navigate(-1)}
//           >
//             ✕
//           </button>
//           <h3 className="text-lg font-semibold text-center mb-6">Schedule a booking</h3>
//           <form className="space-y-4" onSubmit={handleBooking}>
//             <div className="grid grid-cols-2 gap-4">
//               <input
//                 type="date"
//                 className="border p-2 rounded"
//                 value={fromDate}
//                 onChange={(e) => setFromDate(e.target.value)}
//               />
//               <input
//                 type="date"
//                 className="border p-2 rounded"
//                 value={toDate}
//                 onChange={(e) => setToDate(e.target.value)}
//               />
//             </div>
//             <input
//               type="time"
//               className="border p-2 rounded w-full"
//               value={time}
//               onChange={(e) => setTime(e.target.value)}
//             />
//             {tutor && (
//               <div className="text-sm text-gray-700 text-center">
//                 <p>Hourly Rate: Rs. {tutor.price}</p>
//                 {time && <p className="font-semibold">Total Amount: Rs. {totalPrice}</p>}
//               </div>
//             )}
//             <input
//               type="text"
//               value={user?.name || ""}
//               disabled
//               placeholder="Name"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="email"
//               value={user?.email || ""}
//               disabled
//               placeholder="Email"
//               className="border p-2 rounded w-full"
//             />
//             <input
//               type="text"
//               value={user?.number || ""}
//               disabled
//               placeholder="Phone Number"
//               className="border p-2 rounded w-full"
//             />
//             <button
//               type="submit"
//               className="bg-coral-500 hover:bg-coral-600 w-full text-white font-medium py-2 rounded-full"
//             >
//               Request Booking
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Booking;


import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { X, Calendar, Clock, User, Mail, Phone, CreditCard } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <LoggedInNavbar />
      <ToastContainer />
      
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative flex items-center justify-center pt-24 pb-12 px-4">
        <div className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl backdrop-blur-lg border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 relative">
            <button
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200"
              onClick={() => navigate(-1)}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">Schedule Your Session</h2>
              <p className="text-blue-100">Book a personalized learning session</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Tutor Info Card */}
            {tutor && (
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 mb-8 border border-gray-100">
                <div className="flex items-center space-x-4">
                  <img
                    src={
                      tutor.image
                        ? `http://localhost:5500/${tutor.image}`
                        : "/default-avatar.png"
                    }
                    alt="Tutor"
                    className="w-16 h-16 rounded-full object-cover border-3 border-white shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-800">{tutor.name}</h3>
                    <p className="text-gray-600 text-sm">{tutor.subjects?.join(", ") || "Subject Specialist"}</p>
                    <div className="flex items-center mt-2">
                      <CreditCard className="w-4 h-4 text-green-600 mr-1" />
                      <span className="font-semibold text-green-600">Rs. {tutor.price}/hour</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleBooking}>
              {/* Date Selection */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-blue-600" />
                  Select Dates
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">To Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Time Selection */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-600" />
                  Session Duration
                </h4>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration (HH:MM)</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
              </div>

              {/* Price Display */}
              {tutor && time && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-sm text-gray-600">Hourly Rate</p>
                      <p className="font-semibold text-gray-800">Rs. {tutor.price}/hour</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-2xl font-bold text-green-600">Rs. {totalPrice}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* User Information */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Your Information
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        value={user?.name || ""}
                        disabled
                        placeholder="Name"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="email"
                        value={user?.email || ""}
                        disabled
                        placeholder="Email"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        value={user?.number || ""}
                        disabled
                        placeholder="Phone Number"
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                disabled={!fromDate || !toDate || !time}
              >
                <span className="flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Request Booking
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;