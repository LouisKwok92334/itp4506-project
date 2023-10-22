import React, { useState, useEffect } from "react";
import "./OnlineTracking.css";
import locationImage from "../../images/Location.png";
import DoneAllAltRoundIcon from "../../done-all-alt-round.svg";
import NotAllAltRoundIcon from "../../Not_done.svg";

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
          if (!status.isCompleted && (index === 0 || prevStatuses[index - 1].isCompleted)) {
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
      {/*...*/}
      <div>
        <h3 style={{ display: "flex", justifyContent: "space-between" }}>
          <span className="bold-text">Track Order</span>
          <span>ID: </span>
        </h3>
        <img src={locationImage} alt="Location" className="locationImage" />
        <div className="box">
        <div className="status-box">
        {orderStatuses.map((status, index) => (
          <div className="status" key={status.name}>
            <img
              src={status.isCompleted ? DoneAllAltRoundIcon : NotAllAltRoundIcon}
              alt={status.isCompleted ? "Done icon" : "Not Done icon"}
              style={{ width: "110px", height: "70px" }}
            />
            <div className="status-content">
              <span>{status.name}</span>
              <span style={{ color: "rgba(0, 0, 0, 0.3)" }}>
              {status.isCompleted && status.time ? status.time.toLocaleString() : "-"}
              </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-box">
            <span className="bold-text">Delivery Staff Information</span>
            <div className="square-container">
              <div className="square">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
              </div>
              <button className="button">View Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
