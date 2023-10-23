import React, { useState } from "react";
import "./ConfirmPayment.css";
import { useNavigate } from "react-router-dom";

export function ConfirmPayment() {
  const navigate = useNavigate();
  const [fade, setFade] = useState("fade-in");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePaymentConfirmation = () => {
    // Add validation logic here
    setFade("fade-out");
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
        <button className="edit-button">Edit</button>
      </div>

      <div className="payment-details-container">
        <div className="square">
          <div className="payment-details-container">
            <div className="input-grid">
              <div className="input-field">
                <label className="input-label">
                  Card Number
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="input"
                  />
                </label>
              </div>
              <div className="input-field">
                <label className="input-label">
                  CVV
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    maxLength={3}
                    className="input"
                  />
                </label>
              </div>
            </div>
            <div className="input-field">
              <label className="input-label">
                Expiry Date
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="input"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="button-container">
        <button className="confirm-button" onClick={handlePaymentConfirmation}>
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
