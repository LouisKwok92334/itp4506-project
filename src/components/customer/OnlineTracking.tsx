import React, { useState, useEffect } from "react";
import "./OnlineTracking.css";
import locationImage from "../../images/Location.png";
import DoneAllAltRoundIcon from "../../svg/done-all-alt-round.svg";
import NotAllAltRoundIcon from "../../svg/Not_done.svg";

export function OnlineTracking() {
  const [orderStatuses, setOrderStatuses] = useState([
    { name: "Restaurant received order", isCompleted: true, time: new Date() },
    { name: "food is cooked", isCompleted: false, time: null },
    { name: "food is picked up", isCompleted: false, time: null },
    { name: "food has been delivered", isCompleted: false, time: null },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setOrderStatuses((prevStatuses) =>
        prevStatuses.map((status, index) => {
          if (
            !status.isCompleted &&
            (index === 0 || prevStatuses[index - 1].isCompleted)
          ) {
            return { ...status, isCompleted: true, time: new Date() };
          }
          return status;
        })
      );
    }, 10 * 1000); // 10 seconds // 15 * 60 * 1000); // 15 minutes

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="OnlineTracking">
      <div className="title">
        <h3 >
          <span className="bold-text">Track Order</span>
          <span>ID: </span>
        </h3>
      </div>
      <img src={locationImage} alt="Location" className="locationImage" />
    
      <div className="box">
    
        <div className="status-box">
          {orderStatuses.map((status, index) => (
            <div className="status" key={status.name}>
              <img
                src={
                  status.isCompleted ? DoneAllAltRoundIcon : NotAllAltRoundIcon
                }
                alt={status.isCompleted ? "Done icon" : "Not Done icon"}
                style={{ width: "110px", height: "70px" }}
              />
              <div className="status-content">
                <span>{status.name}</span>
                <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>
                  {status.isCompleted && status.time
                    ? status.time.toLocaleString()
                    : "-"}
                </span>
              </div>
            </div>
          
          ))}
        </div>
        <div className="text-box">
          <div className="tracking-square">
               <h3 className="bold-text">Delivery Staff Information</h3>
            <div className="tracking-input">
              <div className="info-input">
                <label htmlFor="nameField">Name: </label>
                <input
                  type="info-text"
                  id="nameField"
                  placeholder="Name"
                  value={"Jane Doe"}
                />
              </div>
              <div className="info-input">
                <label htmlFor="phoneField">Phone: </label>
                <input
                  type="info-text"
                  id="phoneField"
                  placeholder="Phone"
                  value={"123-456-7890"}
                />
              </div>
            </div>
          </div>
          <button className="tracking-button">View Order</button>
        </div>
      </div>
    </div>
  );
}
