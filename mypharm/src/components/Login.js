import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";   // ✅ Import js-cookie
import "../Style/login.css";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/login", formData)
      .then((response) => {
        if (response.data === "Login Successful!") {
          alert("Login Successful!");

          // ✅ Set cookie (for 1 day)
          Cookies.set("userEmail", formData.email, { expires: 1 });

          // ✅ Example: If you had a token from backend
          // Cookies.set("authToken", response.data.token, { expires: 1 });

          navigate("/");
        } else {
          alert("Invalid Email or Password!");
        }
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert("Something went wrong!");
      });
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <button type="button" className="close-btn" onClick={handleClose}>
          ✕
        </button>

        <h2 className="login-title">Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>

        <p className="signup-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
