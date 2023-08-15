// Contact.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Contact.css";

export const Contact = (props) => {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [showAlert, setShowAlert] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
//http://localhost:5000/api/contact
    // Simulate sending the form data to a backend API
    const response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send the formData object
    });

    if (response.ok) {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
      }, 3000);

      navigate("/contact");
    } else {
      alert("Error submitting the form");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="Contact">
        {showAlert && (
          <div className="alert alert-success" role="alert">
            Form submitted successfully!
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              id="name"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              id="email"
              name="email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="query" className="form-label">
              Query
            </label>
            <textarea
              className="form-control"
              value={formData.query}
              onChange={handleChange}
              id="query"
              name="query"
              rows="5"
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
