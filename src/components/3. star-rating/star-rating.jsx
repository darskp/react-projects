import React, {useState} from "react";
import {IoStarOutline, IoStarSharp} from "react-icons/io5";
import "./star-style.css";
import HalfStarRating from "./HalfStar/half-star-rating.jsx";

const StarRating = () => {
  const noOfStars = 5;
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleonMouseMove = (index) => {
    setHover(index);
  };

  const handleonMouseLeave = (index) => {
    setHover(index);
  };

  const handleonClick = (index) => {
    setRating(index);
  };

  return (
    <div className="mainContainer">
      <div>
        <div>
          <h3 className="heading"> Full Star Rating</h3>
        </div>
        <div className="starRating">
          {[...Array(noOfStars)].map((_, index) => {
            index += 1;
            return (
              <div key={index} className="eachStar">
                {index > hover ? (
                  <IoStarOutline
                    color="gray"
                    className="star-rating-icon"
                    onMouseMove={() => handleonMouseMove(index)}
                    onMouseLeave={() => handleonMouseLeave(index)}
                    onClick={() => handleonClick(index)}
                  />
                ) : (
                  <IoStarSharp
                    color="yellow"
                    className="star-rating-icon"
                    onMouseMove={() => handleonMouseMove(index)}
                    onMouseLeave={() => handleonMouseLeave(index)}
                    onClick={() => handleonClick(index)}
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
      <div>
        <div>
          <h3 className="heading"> Half Star Rating</h3>
        </div>
        <HalfStarRating />
      </div>
    </div>
  );
};

export default StarRating;
