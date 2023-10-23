import React from "react";
import "./ConfirmPayment.css";
import { useNavigate } from "react-router-dom";

export function ConfirmPayment() {
  const navigate = useNavigate();

  const handlePaymentConfirmation = () => {
    navigate("/confirm-order");
  };

  return (
    <div className="ConfirmPayment">
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
