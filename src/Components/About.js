import React, { useState, useEffect } from "react";
import "./css/About.css";
import { accordionData } from "./accordionData";

export const About = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [timeLeft, setTimeLeft] = useState("");

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // Close the open accordion if clicked again
    } else {
      setActiveAccordion(index);
    }
  };

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

      setTimeLeft(`${newHoursLeft}h : ${newMinutesLeft}m : ${newSecondsLeft}s`);
    }, 1000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <div className="main">
        <div className="abttext">
          <h5>
            Description Smart Contracts? They're here. The Ethereum Blockchain?
            Covered. Solidity? Yep!
          </h5>
          <p>
            There can be no understating it: Ethereum and Blockchain technology
            is the most disruptive force in years. Companies cannot hire
            developers who understand blockchain technologies fast enough, but
            there are a tiny number of resources published to help you truly
            understand what blockchains are used for, let alone build apps with
            them. That's the purpose of this course: to be the best resource
            online for learning about Ethereum, blockchains, and how to build
            apps with this new technology.
          </p>
          <p>
            The development community is still figuring out the best way to use
            Ethereum in the creation of new and exciting apps. I spent a
            tremendous amount of time to research and create best practice for
            interfacing with Ethereum from Javascript. I can't overstate it
            enough; this course will show you the best and most easily
            repeatable patterns for creating production-ready apps with
            Ethereum.
          </p>
          <h5>What tools and libraries are used?</h5>
        </div>

        <div className="course-content">
          <h2>
            <u>Course content</u>
          </h2>
          {accordionData.map((accordion, index) => (
            <div key={index}>
              <button
                className={`accordion ${
                  activeAccordion === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveAccordion(index)}
                onMouseLeave={() => setActiveAccordion(null)}
              >
                {accordion.title}
              </button>
              <div
                className="content-list"
                style={{
                  display: activeAccordion === index ? "inline-block" : "none",
                }}
              >
                <ul>
                  {accordion.content.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.topic} - {item.time}
                    </li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
        </div>
        <div className="abttimer">
         <span className="bg"> Purchase today to get 50% off /-</span>
          <br /> <br />Deal lasts until <span className="time">{timeLeft}</span>
        </div>
      </div>
    </>
  );
};




















