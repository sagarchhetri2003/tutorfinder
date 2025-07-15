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
    return <p className="text-center mt-20">Missing booking data</p>;
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
    <div className="min-h-screen bg-gray-50">
      <LoggedInNavbar />
      <div className="pt-24 flex justify-center">
        <div className="bg-white shadow-xl p-8 rounded-xl w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4 text-center">Payment Page</h2>
          <p className="mb-2"><strong>Booking For:</strong> {bookingData?.tutorId}</p>
          <p className="mb-2"><strong>Date:</strong> {bookingData?.fromDate} to {bookingData?.toDate}</p>
          <p className="mb-2"><strong>Time:</strong> {bookingData?.time}</p>
          <p className="mb-4 font-semibold text-lg text-coral-500">
            Total Price: Rs. {total_amount}
          </p>

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
              className="w-full bg-green-600 text-white py-3 rounded-lg"
            >
              Pay with eSewa
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
