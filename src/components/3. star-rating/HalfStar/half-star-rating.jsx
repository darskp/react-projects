import React, {useState} from "react";
import "../star-style.css";
import DisplayHalfStar from "./DisplayHalfStar.jsx";

const HalfStarRating = () => {
  const noOfStars = 5;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleMouseMove = (value) => {
    setHover(value);
  };

  const handleMouseLeave = (value) => {
    setHover(value);
  };

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <div className="starRating">
        {[...Array(noOfStars)].map((_, index) => {
          const starValue = index + 1;
          const halfStarValue = starValue - 0.5;
          return (
            <div key={index} className="eachStar">
              {hover > starValue - 1 ? (
                hover == halfStarValue ? (
                  <DisplayHalfStar
                    leftHalfStarColor="yellow"
                    rightHalfStarColor="gray"
                    starValue={starValue}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                    handleClick={handleClick}
                  />
                ) : (
                  <DisplayHalfStar
                    leftHalfStarColor="yellow"
                    rightHalfStarColor="yellow"
                    starValue={starValue}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                    handleClick={handleClick}
                  />
                )
              ) : (
                <DisplayHalfStar
                  leftHalfStarColor="gray"
                  rightHalfStarColor="gray"
                  starValue={starValue}
                  handleMouseMove={handleMouseMove}
                  handleMouseLeave={handleMouseLeave}
                  handleClick={handleClick}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="">
        <h4 className="count">Rating count : {rating}</h4>
      </div>
    </div>
  );
};

export default HalfStarRating;
