import React, { useState } from "react";
import "./ConfirmPayment.css";
import { useNavigate } from "react-router-dom";

export function ConfirmPayment() {
  const navigate = useNavigate();
  const [fade, setFade] = useState('fade-in');

  const handlePaymentConfirmation = () => {
    setFade('fade-out');
    setTimeout(() => navigate("/payment-successful"), 300); // navigate after animation ends
  };

  return (
    <div className={`ConfirmPayment ${fade}`}>
      <div>
        <h2 className="bold-text">Confirm Order</h2>
      </div>
      <div className="order-details-container">
        <div className="square"></div>
      </div>
      <div className="payment-header">
        <h2 className="bold-text">Confirm Payment</h2>
        <button className="edit-button" >
          Edit
        </button>
      </div>

      <div className="payment-details-container">
        <div className="square"></div>
      </div>
      <div className="button-container">
        <button className="confirm-button" onClick={handlePaymentConfirmation}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}