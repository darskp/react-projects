import React from "react";
import {FaStarHalf} from "react-icons/fa";

const DisplayHalfStar = ({
  leftHalfStarColor,
  rightHalfStarColor,
  starValue,
  handleMouseMove,
  handleMouseLeave,
  handleClick,
}) => {
  const halfStarValue = starValue - 0.5;

  return (
    <div className="half-star-container" style={{border: "1px solid red"}}>
      <div className="star-section">
        <FaStarHalf
          className={"half-star"}
          color={leftHalfStarColor}
          onMouseMove={() => handleMouseMove(halfStarValue)}
          onMouseLeave={() => handleMouseLeave(halfStarValue)}
          onClick={() => handleClick(halfStarValue)}
        />
      </div>
      <div className="flipsection">
        <FaStarHalf
          className={"half-star flip"}
          color={rightHalfStarColor}
          onMouseMove={() => handleMouseMove(starValue)}
          onMouseLeave={() => handleMouseLeave(starValue)}
          onClick={() => handleClick(starValue)}
        />
      </div>
    </div>
  );
};

export default DisplayHalfStar;
