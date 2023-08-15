import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Waitlist.css";

export const Waitlist = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();

  const handleJoinWaitlist = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // User is logged in, proceed with adding to waitlist
      fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
        body: JSON.stringify({ name, number }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          alert("You have been added to the waitlist!");
        })
        .catch((error) => {
          console.error(error);
          alert("Failed to add to waitlist. Please try again.");
        });
    } else {
      // User is not logged in, prompt to login
      setIsLoggedIn(true);
      history.push("/login"); // Redirect to the login page
    }
  };

  return (
    <div className="waitlist">
      <h3>
        Course instruction begins 25th of August <br />
        Registration begins 16th of August
      </h3>
      <h5>
        **Only those who join today can avail 50% discount while registering.
      </h5>
      <form className="waitlist-form" action="">
        <label htmlFor="email" className="form-label">
          Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control"
        />
        <label htmlFor="email" className="form-label">
          Number
        </label>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="form-control"
        />
        <button className="waitlistbtn" onClick={handleJoinWaitlist}>
          Join the Waitlist
        </button>
      </form>
      {isLoggedIn && (
        <p className="login-prompt">Please login to join the waitlist.</p>
      )}
    </div>
  );
};
