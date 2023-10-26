import React, { useState } from "react";
import "./ConfirmAddress.css";
import locationImage from "../../images/Location.png";
import { useNavigate } from "react-router-dom";

function DeliveryTimeSelector() {
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");

  return (
    <div className="delivery-container">

      <div className="date-time">
      <h2 className="CA-text">Delivery time</h2>
        <label className="delivery-label">
          <select
            className="delivery-select"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
          >
            <option value="2023-10-26">October 26, 2023</option>
            <option value="2023-10-27">October 27, 2023</option>
          </select>
        </label>

        <label className="delivery-label">
          <select
            className="delivery-select"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
          >
            <option value="09:00">09:00 AM</option>
            <option value="13:00">01:00 PM</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default DeliveryTimeSelector;
export function ConfirmAddress() {
  const navigate = useNavigate();
  const [slided, setSlided] = useState(false);

  const handleButtonClick = () => {
    setSlided(true);
    setTimeout(() => {
      navigate("/confirm-payment");
      window.scrollTo(0, 0);
    }, 500);
  };
  return (
    <div className={`Address ${slided ? "slided" : ""}`}>
      <div className="ConfirmAddress">
        <h1 className="CA-bold-text">Edit your delivery address</h1>
        <img src={locationImage} alt="Location" className="stretch-image" />
        <div className="address-container">
          <div className="search">
            <input type="text" placeholder="Delivery address" />
            <button className="loc-edit-button">Edit</button>
          </div>
        </div>

        <DeliveryTimeSelector />

        <div className="delivery-container">

            <div className="head">
              <h2 className="CA-text">Personal details</h2>
              <div>
              <button className="edit-button">Edit</button>
              </div>
    
            </div>

            <p className="detail-text">Bosco Chuen</p>
            <p className="detail-text">bosco.chuen@gmail.com</p>
            <p className="detail-text">+852 53300440</p>
          </div>
    

        <div className="CA-button-container">
          <button className="CA-confirm-button" onClick={handleButtonClick}>
            Confirm Address
          </button>
        </div>
      </div>
    </div>
  );
}
