import React from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    alert(`Payment successful with ${method}`);
    navigate("/products");
  };

  return (
    <div className="payment-container">
      <h2>Choose Payment Method</h2>
      <button onClick={() => handlePayment("Credit Card")}>Credit Card</button>
      <button onClick={() => handlePayment("UPI")}>UPI</button>
      <button onClick={() => handlePayment("Bank Transfer")}>Bank Transfer</button>
    </div>
  );
};

export default Payment;