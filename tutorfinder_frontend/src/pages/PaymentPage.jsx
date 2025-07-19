// import React, { useRef } from "react";
// import { useLocation } from "react-router-dom";
// import LoggedInNavbar from "../components/LoggedInNavbar";
// import { v4 as uuidv4 } from "uuid";
// import CryptoJS from "crypto-js";

// const generateEsewaSignature = ({ total_amount, transaction_uuid, product_code }) => {
//   const signedFieldNames = "total_amount,transaction_uuid,product_code";
//   const secret = "8gBm/:&EnhH.1/q"; // Use your sandbox/production secret here
//   const signatureString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
//   const signature = CryptoJS.HmacSHA256(signatureString, secret).toString(CryptoJS.enc.Base64);
//   return { signedFieldNames, signature };
// };

// const PaymentPage = () => {
//   const location = useLocation();
//   const bookingData = location.state;
//   const esewaFormRef = useRef(null);

//   if (!bookingData) {
//     return <p className="text-center mt-20">Missing booking data</p>;
//   }

//   const { price } = bookingData;
//   const total_amount = Math.round(price);
//   const tax_amount = 0;
//   const product_delivery_charge = 0;
//   const product_service_charge = 0;
//   const transaction_uuid = uuidv4();
//   const product_code = "EPAYTEST";

//   const { signedFieldNames, signature } = generateEsewaSignature({
//     total_amount,
//     transaction_uuid,
//     product_code,
//   });

//   const handleEsewaPayment = () => {
//     esewaFormRef.current?.submit();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <LoggedInNavbar />
//       <div className="pt-24 flex justify-center">
//         <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md">
//           <h2 className="text-xl font-semibold mb-4 text-center">Payment Page</h2>
//           <p className="mb-2"><strong>Booking For:</strong> {bookingData?.tutorId}</p>
//           <p className="mb-2"><strong>Date:</strong> {bookingData?.fromDate} to {bookingData?.toDate}</p>
//           <p className="mb-2"><strong>Time:</strong> {bookingData?.time}</p>
//           <p className="mb-4 font-semibold text-lg text-coral-500">
//             Total Price: Rs. {total_amount}
//           </p>

//           <form
//             ref={esewaFormRef}
//             action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
//             method="POST"
//           >
//             <input type="hidden" name="amount" value={total_amount} />
//             <input type="hidden" name="tax_amount" value={tax_amount} />
//             <input type="hidden" name="total_amount" value={total_amount} />
//             <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
//             <input type="hidden" name="product_code" value={product_code} />
//             <input type="hidden" name="product_service_charge" value={product_service_charge} />
//             <input type="hidden" name="product_delivery_charge" value={product_delivery_charge} />
//             <input type="hidden" name="success_url" value="http://localhost:3000/paymentsuccess" />
//             <input type="hidden" name="failure_url" value="http://localhost:3000/paymentfailure" />
//             <input type="hidden" name="signed_field_names" value={signedFieldNames} />
//             <input type="hidden" name="signature" value={signature} />
//             <button
//               type="submit"
//               className="w-full bg-green-600 text-white py-3 rounded-lg"
//             >
//               Pay with eSewa
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PaymentPage;


import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import LoggedInNavbar from "../components/LoggedInNavbar";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";

const generateEsewaSignature = ({ total_amount, transaction_uuid, product_code }) => {
  const signedFieldNames = "total_amount,transaction_uuid,product_code";
  const secret = "8gBm/:&EnhH.1/q"; // Use your sandbox/production secret here
  const signatureString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;
  const signature = CryptoJS.HmacSHA256(signatureString, secret).toString(CryptoJS.enc.Base64);
  return { signedFieldNames, signature };
};

const PaymentPage = () => {
  const location = useLocation();
  const bookingData = location.state;
  const esewaFormRef = useRef(null);

  if (!bookingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white shadow-2xl p-12 rounded-2xl text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Missing Booking Data</h2>
          <p className="text-gray-600">Please go back and try again.</p>
        </div>
      </div>
    );
  }

  const { price } = bookingData;
  const total_amount = Math.round(price);
  const tax_amount = 0;
  const product_delivery_charge = 0;
  const product_service_charge = 0;
  const transaction_uuid = uuidv4();
  const product_code = "EPAYTEST";

  const { signedFieldNames, signature } = generateEsewaSignature({
    total_amount,
    transaction_uuid,
    product_code,
  });

  const handleEsewaPayment = () => {
    esewaFormRef.current?.submit();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <LoggedInNavbar />
      
      <div className="pt-24 px-4 flex justify-center">
        <div className="w-full max-w-lg">
          {/* Payment Card */}
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-6">
              <div className="flex items-center justify-center mb-2">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center">Secure Payment</h2>
              <p className="text-indigo-100 text-center text-sm mt-1">Complete your booking payment</p>
            </div>

            {/* Booking Details Section */}
            <div className="px-8 py-6 bg-gray-50">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Booking Details
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Tutor ID:</span>
                  <span className="text-gray-800 font-semibold">{bookingData?.tutorId}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Duration:</span>
                  <span className="text-gray-800 font-semibold">
                    {bookingData?.fromDate} to {bookingData?.toDate}
                  </span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-600 font-medium">Time:</span>
                  <span className="text-gray-800 font-semibold">{bookingData?.time}</span>
                </div>
              </div>
            </div>

            {/* Price Section */}
            <div className="px-8 py-6 bg-gradient-to-r from-green-50 to-emerald-50">
              <div className="text-center">
                <p className="text-gray-600 text-sm font-medium mb-2">Total Amount</p>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  Rs. {total_amount.toLocaleString()}
                </div>
                <div className="inline-flex items-center bg-green-100 px-3 py-1 rounded-full">
                  <svg className="w-4 h-4 text-green-600 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-green-700 text-xs font-semibold">Secure Payment</span>
                </div>
              </div>
            </div>

            {/* Payment Form Section */}
            <div className="px-8 py-6">
              <form
                ref={esewaFormRef}
                action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
                method="POST"
              >
                <input type="hidden" name="amount" value={total_amount} />
                <input type="hidden" name="tax_amount" value={tax_amount} />
                <input type="hidden" name="total_amount" value={total_amount} />
                <input type="hidden" name="transaction_uuid" value={transaction_uuid} />
                <input type="hidden" name="product_code" value={product_code} />
                <input type="hidden" name="product_service_charge" value={product_service_charge} />
                <input type="hidden" name="product_delivery_charge" value={product_delivery_charge} />
                <input type="hidden" name="success_url" value="http://localhost:3000/paymentsuccess" />
                <input type="hidden" name="failure_url" value="http://localhost:3000/paymentfailure" />
                <input type="hidden" name="signed_field_names" value={signedFieldNames} />
                <input type="hidden" name="signature" value={signature} />
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300 flex items-center justify-center space-x-3"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span>Pay with eSewa</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>

              {/* Security Badge */}
              <div className="mt-6 text-center">
                <div className="inline-flex items-center text-gray-500 text-sm">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Your payment is secured with 256-bit SSL encryption</span>
                </div>
              </div>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-6 bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center">
            <p className="text-gray-600 text-sm mb-3">Need help with your payment?</p>
            <div className="flex justify-center space-x-4 text-sm">
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Contact Support</a>
              <span className="text-gray-300">|</span>
              <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Payment FAQ</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;