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
        <DropDown 
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
          options={[
            {value: "2023-10-26", label: "October 26, 2023"},
            {value: "2023-10-27", label: "October 27, 2023"},
          ]}
        />
        <DropDown 
          value={deliveryTime}
          onChange={(e) => setDeliveryTime(e.target.value)}
          options={[
            {value: "09:00", label: "09:00 AM"},
            {value: "13:00", label: "01:00 PM"},
          ]}
        />
      </div>
    </div>
  );
}

interface DropDownProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string, label: string }[];
}

function DropDown({value, onChange, options}: DropDownProps) {
  return (
    <label className="delivery-label">
      <select
        className="delivery-select"
        value={value}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}


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
        
        <AddressInput />
        <DeliveryTimeSelector />
        <PersonalDetails />

        <div className="CA-button-container">
          <button className="CA-confirm-button" onClick={handleButtonClick}>
            Confirm Address
          </button>
        </div>
      </div>
    </div>
  );
}

function AddressInput() {
  return (
    <div className="address-container">
      <div className="search">
        <input type="text" placeholder="Delivery address" />
        <button className="loc-edit-button">Edit</button>
      </div>
    </div>
  );
}

function PersonalDetails() {
  return (
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
  );
}

