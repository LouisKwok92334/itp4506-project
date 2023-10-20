import React from "react";
import Logo from "../../images/Logo.png";
import "../../styles/LoginPage.css";

export function LoginPage() {
  return (
    <div className="LoginPage">
      <div className="restaurant-bg"></div>
      <img src={Logo} className="logo" alt="Logo" />
      <div className="login-form">
        <form method="post">
          <div className="login-display">
            <div>
              <div className="title">
                Yummy <span className="highlight">Restaurant</span> Group
              </div>
            </div>
            <div>
              <div className="subtitle">Please log in for an account</div>
              <label htmlFor="username" className="label-blue">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="rounded-input"
                required
              />
              <label htmlFor="password" className="label-blue">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="rounded-input"
                required
              />
              <div className="remember-display">
                <input type="checkbox" name="remember" className="remember" />
                <span className="remember">Remember me</span>
                <span className="forgot">Forgot password?</span>
              </div>
              <div id="login_message">
                {/* Handle the error and success messages here using React and JavaScript */}
              </div>
              <div>
                <input type="submit" className="login" value="Login" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
