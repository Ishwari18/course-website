import React, { useState, useEffect } from "react";
import "./css/Home.css"; // Import the CSS file

export const Home = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    // Calculate time left until the end of the day in India (IST)
    const now = new Date();
    const endOfDay = new Date(now);
    endOfDay.setHours(23, 59, 59, 999); // Set to the end of the day
    const timeDifference = endOfDay - now;

    const hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesLeft = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

    setTimeLeft(`${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`);

    // Update the time left every second
    const interval = setInterval(() => {
      const newNow = new Date();
      const newTimeDifference = endOfDay - newNow;

      const newHoursLeft = Math.floor(newTimeDifference / (1000 * 60 * 60));
      const newMinutesLeft = Math.floor(
        (newTimeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const newSecondsLeft = Math.floor(
        (newTimeDifference % (1000 * 60)) / 1000
      );

      setTimeLeft(`${newHoursLeft}h ${newMinutesLeft}m ${newSecondsLeft}s`);
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* firt section */}
      <section className="section first">
        <div className="first-content">
          <h2>
            Blockchain Development Course from{" "}
            <span className="iitname">IIT Bombay </span>
          </h2>
          <h4>
            The Complete beggingers's Guide to blockchain and web3 development.
          </h4>
          <div className="timer">
            50% off , valid for <span className="time">{timeLeft}</span>
          </div>
          <h4 className="heading12">
            <span className="iitname">Limited Seats,</span>{" "}
            <a href="/waitlist">Join the Waitlist to avail discount.</a>{" "}
          </h4>
        </div>
      </section>

      {/* second section */}
      <section className=" section second">
        <h4 className="heading2">
          Learn EVM-developemnt, Solidity, and Smart Contracts technology to
          build production-ready apps based on the blockchain
        </h4>
        <div className="second-boxes">
          <div className="box">
            <h3 className="heading3">What you'll learn</h3>
            <ul>
              <li>
                Understand the why engineers would want to create an app with
                Ethereum
              </li>
              <li>Design, test, and deploy secure Smart Contracts</li>
              <li>
                Use the latest version of Ethereum development tools (Web3 v1.0)
              </li>
              <li>
                Build compelling blockchain applications using the Ethereum
                Blockchain
              </li>
              <li>
                Learn the true purpose and capabilities of Ethereum and Solidity
              </li>
              <li>
                See practical examples to comprehend what the blockchain and
                mining are
              </li>
            </ul>
          </div>
          <div className=" box-2">
            <h3 className="heading3">What you'll get</h3>
            <div className="box-2-list">
              <div>
                <b> Comprehensive Blockchain Insights:</b> Benefit from expert
                lectures on blockchain, delivered by professors from IIT Bombay.
              </div>
              <div>
                <b>Hands-on Industry Projects:</b> Engage in cutting-edge
                projects using the latest technology, enhancing your practical
                skills.
              </div>
              <div>
                <b>Real-world Internship Opportunities: </b> Unlock pathways to
                blockchain internships, gaining industry experience while you
                learn.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="section third">
        <div className="third-content">
          <div className="third-boxes">
            <div>
              <h3 className="heading3">This course includes:</h3>
              <ul>
                <li>23.5 hours on-demand video</li>
                <li>38 articles</li>
                <li>133 downloadable resources</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
              </ul>
            </div>
            <div>
              <h3 className="heading3">Requirements</h3>
              <ul>
                <li>Basic Knowledge of Javascript and NPM</li>
                <li>A Mac, PC, or Linux Machine</li>
              </ul>
            </div>
          </div>
          <div className="course-content">
            <h2>
              <a href="/about">Check out the Course content <span>&#8599;</span></a>
              
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};
