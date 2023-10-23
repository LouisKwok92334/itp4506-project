import React from "react";
import './PaymentSuccessful.css';
import { useNavigate } from "react-router-dom";
import ginRestImage from "../../images/Gin-rest.png";
import confirm from "../../images/confirm.png";

export function PaymentSuccessful() {
  const navigate = useNavigate();

  const handleTrackOrder = () => {
    navigate("/online-tracking");
  };

  return (
    <div className="PaymentSuccessful">
      <div className="order-details-container">
      <div className="header">
          <h2 className="bold-text">Payment Successful</h2>
          <span className="orderId">ID: XXXXXXX</span>
        </div>
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
        <div className="confirm-container">
          <img
            src={confirm}
            alt="Confirm"
            className="confirm-img"
          />
          <button className="Track-button" onClick={handleTrackOrder}>Track Order</button>
        </div>
      </div>
    </div>
  );
}