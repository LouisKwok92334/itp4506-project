import React, { useState } from "react";
import "./ConfirmPayment.css";
import { useNavigate } from "react-router-dom";
import ginRestImage from "../../images/Gin-rest.png";

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
        <div className="square">
          <div className="content-container">
            <img
              src={ginRestImage}
              alt="Restaurant"
              className="img"
            />
            <div className="text-container">
              <h3 className="restaurant-name">Restaurant Name</h3>
              <ul className="food-list">
                <li>Food Item 1</li>
                <li>Food Item 2</li>
                <li>Food Item 3</li>
              </ul>
              <hr className="divider" />
              <p className="total-cost">Total cost: $XX.XX</p>
              <p className="delivery-fee">Delivery fee: $X.XX</p>
            </div>
          </div>
        </div>
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
