import React from "react";
import "../../styles/Footer.css";

export function Footer() {
  return (
    <div className="copyright-container">
      © {new Date().getFullYear()} Yummy Restaurant Group Limited
    </div>
  );
}
