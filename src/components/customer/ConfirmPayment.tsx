import React, { useState } from "react";
import "./ConfirmPayment.css";
import { useNavigate } from "react-router-dom";
import sushiImage from "../../images/sushi.png";

export function ConfirmPayment() {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const products = [
    {
      image: sushiImage,
      title: "RIB-EYE AND SALMON STEAK",
      description: "Lorem ipsum dolor sit, amet consectetur...",
      price: "$50.40"
    },
    {
      image: sushiImage,
      title: "RIB-EYE AND SALMON STEAK",
      description: "Lorem ipsum dolor sit, amet consectetur...",
      price: "$50.40"
    }
  ];

  const handlePaymentConfirmation = () => {
    navigate("/payment-successful");
  };

  return (
    <div className="CM-container">
      <div className="CM-shopping-cart">
        <h2>SHOPPING CART</h2>
        {products.map((product, index) => (
          <div className="CM-product" key={index}>
            <img src={product.image} alt="product-image" />
            <div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <div className="product-controls">
                <span>{product.price}</span>
                <div className="quantity-controls">
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="subtotal">SUBTOTAL: $60.60</div>
      </div>

      <div className="CM-payment">
        <h2>Payment</h2>
        <form onSubmit={handlePaymentConfirmation}>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="cod" />  Cash On Delivery
              (COD)
            </label>
            <label>
              <input
                type="radio"
                name="payment"
                value="online"
                defaultChecked
              />    Online Payment
            </label>
          </div>
          <div className="card-details">
            <input type="text" placeholder="Cardholder Name" />
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="Exp Date"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            />
            <input
              type="text"
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <div className="CP-button-container">
          <button type="submit" className="CM-button">CHECKOUT</button>
          </div>
      
        </form>
      </div>
    </div>
  );
}
