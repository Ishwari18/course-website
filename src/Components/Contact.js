import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Contact.css";

export const Contact = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [showAlert, setShowAlert] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      setShowAlert(true);

      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      navigate("/login");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="Contact">
        {showAlert && (
          <div className="alert alert-success" role="alert">
            Login was successful!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
          <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="name"
              aria-describedby="emailHelp"
            />
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={credentials.email}
              onChange={onChange}
              id="email"
              name="email"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Query
            </label>
            <input
              type="password"
              className="form-control custom-input"
              value={credentials.password}
              onChange={onChange}
              name="password"
              id="password"
            />
          </div>

          <button type="submit" className="contact-submitbtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};


