/*eslint-disable*/

import React, {useEffect, useState} from "react";
import "./style-image-slider.css";
import {FaArrowAltCircleLeft} from "react-icons/fa";

const Imageslider = () => {
  const [imagesData, setimagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=5",
      );
      const data = await response.json();
      if (data) {
        const transformedData = data?.map((item) => {
          return {url: item.download_url, altText: item.author, id: item.id};
        });
        setimagesData(transformedData);
        setLoading(false);
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  const handlePre = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    // console.log(currentIndex);
    if (currentIndex < imagesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div id="main">
      <div className="headingContainer">
        <h3 className="conatinerheading">Image Slider</h3>
      </div>
      <div className="main-section">
        <FaArrowAltCircleLeft
          onClick={handlePre}
          className={
            currentIndex > 0
              ? "arrow arrow-left"
              : "arrow arrow-left disabledicon"
          }
        />
        <div className="image-slider">
          {imagesData.map((item, index) => (
            <div
              key={index}
              className={`each-image ${currentIndex === index ? "activeSlide" : "inactiveSlide"}`}
            >
              <img src={item.url} alt={item.altText} />
            </div>
          ))}
        </div>

        <FaArrowAltCircleLeft
          onClick={handleNext}
          className={
            currentIndex < imagesData.length - 1
              ? "arrow arrow-right"
              : "arrow arrow-right disabledicon"
          }
        />
        <span className="circle-indicators">
          {imagesData && imagesData.length
            ? imagesData.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentIndex === index
                      ? "current-indicator"
                      : "current-indicator inactive-indicator"
                  }
                  onClick={() => setCurrentIndex(index)}
                ></button>
              ))
            : null}
        </span>
      </div>
    </div>
  );
};

export default Imageslider;
