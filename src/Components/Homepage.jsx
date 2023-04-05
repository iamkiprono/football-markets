import React from "react";
import "../Components/Homepage.css";

const Homepage = () => {
  return (
    <div>
      <div className="homepage-wrapper">
        <div className="home-text">
          <h3>
            <i>💯100% GUARANTEED WIN💯</i>
          </h3>
        </div>
        <div className="till-no-banner">
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/lipa-na-mpesa-till-design-template-7e8629b22fcf3bbedd824d1dd2ce958c_screen.jpg?ts=1667292701"
            alt=""
          />
        </div>
        <div className="till-text">
          <h2>TILL NUMBER: XXXXXX</h2>
          <p>
            SUBSCRIBE for Analyzed Sure Matches & correct scores.
            <a target="_blank" href="https://wa.me/+254700000000">Buy</a> our TICKETS now and stand a chance to WIN BIG!!!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
