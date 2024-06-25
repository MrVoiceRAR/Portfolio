import React from "react";
import "../../SCSS/Home/ProgressBar.scss";

const ProgressBar = ({ progress }) => {
  return (
    <div className="range" style={{ "--p": 75 }}>
      <div className="range__label">Progress of study</div>
    </div>
  );
};

export default ProgressBar;
