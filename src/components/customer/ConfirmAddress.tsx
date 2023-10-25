import React, { useState } from "react";
import "./ConfirmAddress.css";
import locationImage from "../../images/Location.png";
import { useNavigate } from "react-router-dom";

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
        <h2 className="bold-text">Edit your delivery address</h2>
        <img src={locationImage} alt="Location" className="stretch-image" />
        <div className="address-container">
          <div className="search">
            <input type="text" placeholder="Delivery address" />
            <button className="loc-edit-button">Edit</button>
          </div>
        </div>
        <div className="personal-details-container">
          <h2 className="bold-text">Personal details</h2>
          <button className="edit-button">Edit</button>
        </div>
        <div className="square-details">
          <p className="detail-text">Bosco Chuen</p>
          <p className="detail-text">bosco.chuen@gmail.com</p>
          <p className="detail-text">+852 53300440</p>
        </div>

        <div className="box"></div>
        <div className="button-container">
          <button className="confirm-button" onClick={handleButtonClick}>
            Confirm Address
          </button>
        </div>
      </div>
    </div>
  );
}
