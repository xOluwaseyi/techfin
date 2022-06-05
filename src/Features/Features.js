import React from "react";
import "./Features.css";
import laptop from "../images/laptop.png";

const Features = () => {
  return (
    <section className="feat">
      <div className="features">
        {/* div 1 */}
        <div className="feature-funds">
          <h1 className="send-funds">Send Funds</h1>
          <h1 className="recieve-funds">Receive Funds</h1>
        </div>

        {/* div 2 */}
        <div className="feature-main">
          {/* div text */}
          <div className="feature-text">
            <div className="ft-1">
              <h1>— 890m Transactions Completed</h1>
            </div>
            <div className="ft-2">
              <h1>Connect your Debit Card.</h1>
            </div>
            <div className="ft-3">
              <p>
                Our ACH Network has been continually advancing since its first
                release, adding new capabilities and transaction types,
                improving processing speeds.
              </p>
            </div>
            <div className="ft-4">
              <p>🚀 GET STARTED</p>
            </div>
          </div>

          {/* img div */}
          <div className="feat-image">
            <img src={laptop} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
