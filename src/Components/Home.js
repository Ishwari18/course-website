import React, { useState } from "react";
import "./css/Home.css"; // Import the CSS file
import { accordionData } from "./accordionData";

export const Home = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null); // Close the open accordion if clicked again
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <>
      {/* firt section */}
      <section className="section first">
        <h2>
          Ethereum and Solidity: The Complete Developer's Guide Use Ethereum,
          Solidity, and Smart Contracts
        </h2>
        <h3>
          Use Ethereum, Solidity, and Smart Contracts to build production-ready
          apps based on the blockchain
        </h3>
      </section>

      {/* second section */}
      <section className=" section second">
        <div className="box-1">
          <h3>What you'll learn</h3>
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
        <div className="box-2">
          <h3>What you'll get</h3>
          <ul>
            <li>
              <b> Comprehensive Blockchain Insights:</b> Benefit from expert
              lectures on blockchain, delivered by professors from IIT Bombay.
            </li>
            <li>
              <b>Hands-on Industry Projects:</b> Engage in cutting-edge projects
              using the latest technology, enhancing your practical skills.
            </li>
            <li>
              <b>Real-world Internship Opportunities: </b> Unlock pathways to
              blockchain internships, gaining industry experience while you
              learn.
            </li>
          </ul>
        </div>
      </section>

      {/* Third section */}
      <section className="section third">
        <div className="third-content">
        <h3>This course includes:</h3>
        <ul>
          <li>23.5 hours on-demand video</li>
          <li>38 articles</li>
          <li>133 downloadable resources</li>
          <li>Access on mobile and TV</li>
          <li>Certificate of completion</li>
        </ul>
        <h3>Requirements</h3>
        <ul>
          <li>Basic Knowledge of Javascript and NPM</li>
          <li>A Mac, PC, or Linux Machine</li>
        </ul>
        <h3>Course content</h3>
        {accordionData.map((accordion, index) => (
          <div key={index}>
            <button
              className={`accordion ${
                activeAccordion === index ? "active" : ""
              }`}
              onClick={() => toggleAccordion(index)}
            >
              {accordion.title}
            </button>
            <div
              className="panel"
              style={{
                display: activeAccordion === index ? "block" : "none",
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
      </section>
    </>
  );
};
