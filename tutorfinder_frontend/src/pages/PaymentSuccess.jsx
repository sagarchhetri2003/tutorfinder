// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { CheckCircle } from "lucide-react";
// import LoggedInNavbar from "../components/LoggedInNavbar";

// const PaymentSuccess = () => {
//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate("/"); // You can change this to "/dashboard" or "/my-bookings"
//   };

//   return (
//     <div className="min-h-screen bg-green-50">
//       <LoggedInNavbar />
//       <div className="flex justify-center items-center pt-28 px-4">
//         <div className="bg-white shadow-xl p-10 rounded-xl max-w-md text-center w-full">
//           <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
//           <h1 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h1>
//           <p className="text-gray-600 mb-6">
//             Thank you for your payment. Your booking has been confirmed.
//           </p>
//           <button
//             onClick={handleGoBack}
//             className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
//           >
//             Go to Dashboard
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentSuccess;


import React from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import LoggedInNavbar from "../components/LoggedInNavbar";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate("/"); // You can change this to "/dashboard" or "/my-bookings"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <LoggedInNavbar />
      
      <div className="flex justify-center items-center pt-28 px-4">
        <div className="relative w-full max-w-lg">
          {/* Celebration Background Elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-green-200/30 rounded-full animate-pulse"></div>
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-emerald-200/30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute -bottom-8 -left-6 w-12 h-12 bg-teal-200/30 rounded-full animate-pulse delay-700"></div>
          
          {/* Main Success Card */}
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
            {/* Header Section with Success Animation */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-10 py-8 text-center relative overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                <div className="absolute bottom-6 right-6 w-6 h-6 border-2 border-white/30 rounded-full"></div>
                <div className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                {/* Animated Success Icon */}
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                  <div className="relative bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <CheckCircle className="text-white mx-auto animate-bounce" size={72} />
                  </div>
                </div>
                
                <h1 className="text-3xl font-bold text-white mb-2">Payment Successful!</h1>
                <div className="w-24 h-1 bg-white/30 rounded-full mx-auto"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="px-10 py-8 text-center">
              {/* Success Message */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-green-100 px-4 py-2 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-green-700 font-semibold text-sm">Transaction Completed</span>
                </div>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Thank you for your payment. Your booking has been confirmed and you will receive a confirmation email shortly.
                </p>

                {/* Features/Benefits */}
                <div className="grid grid-cols-1 gap-4 mb-8">
                  <div className="flex items-center justify-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Booking Confirmed</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">Email Confirmation Sent</span>
                  </div>
                  
                  <div className="flex items-center justify-center text-gray-600">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="font-medium">Secure Transaction</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleGoBack}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center space-x-3"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <span>Go to Dashboard</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              {/* Additional Actions */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <p className="text-gray-500 text-sm mb-4">What would you like to do next?</p>
                <div className="flex justify-center space-x-4 text-sm">
                  <button className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200">
                    View Booking Details
                  </button>
                  <span className="text-gray-300">|</span>
                  <button className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200">
                    Download Receipt
                  </button>
                  <span className="text-gray-300">|</span>
                  <button className="text-green-600 hover:text-green-800 font-medium transition-colors duration-200">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Success Indicators */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-3 h-3 bg-teal-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;