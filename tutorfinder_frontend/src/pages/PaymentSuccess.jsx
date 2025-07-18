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
    <div className="min-h-screen bg-green-50">
      <LoggedInNavbar />
      <div className="flex justify-center items-center pt-28 px-4">
        <div className="bg-white shadow-xl p-10 rounded-xl max-w-md text-center w-full">
          <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
          <h1 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h1>
          <p className="text-gray-600 mb-6">
            Thank you for your payment. Your booking has been confirmed.
          </p>
          <button
            onClick={handleGoBack}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
