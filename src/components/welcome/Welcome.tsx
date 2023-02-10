import React from "react";
import "./Welcome.scss";
import CompanyLogo from "../../assets/logos/logo.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="content">
        <img alt="company logo" src={CompanyLogo} />
      </div>
      <div className="description">Welcome to Skip QQ</div>
    </div>
  );
};

export default Welcome;
