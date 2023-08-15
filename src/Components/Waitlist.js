import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory
import "./css/Waitlist.css";

const Waitlist = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const history = useHistory(); // Initialize useHistory

  const handleJoinWaitlist = () => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (token) {
      // User is logged in
      // Perform API call to add user to the waitlist
      // You can implement the API call here

      // For example:
      fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token': token,
        },
        body: JSON.stringify({}),
      })
      .then(response => response.json())
      .then(data => {
        // Handle the response here
      });

      // Placeholder logic for demonstration
      alert('You have been added to the waitlist!');
    } else {
      // User is not logged in, redirect to login page
      setIsLoggedIn(true);
      history.push('/login'); // Redirect to the login page
    }
  };

  return (
    <div className="waitlist">
      <h3>Course instruction begins 25th of August <br />Registration begins 16th of August</h3>
      <h5>**Only those who join today can avail 50% discount while registering.</h5>
      <button className='waitlistbtn' onClick={handleJoinWaitlist}>
        Join the Waitlist
      </button>
      {isLoggedIn && (
        <p className="login-prompt">Please login to join the waitlist.</p>
      )}
    </div>
  );
};

export default Waitlist;