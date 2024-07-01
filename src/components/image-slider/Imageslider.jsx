/*eslint-disable*/

import React, {useEffect, useState} from "react";
import "./style-image-slider.css";
import ImgOverview from "./ImgOverview";
import {FaArrowAltCircleLeft} from "react-icons/fa";
import {FaArrowAltCircleRight} from "react-icons/fa";

const Imageslider = () => {
  const [imagesData, setimagesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("currentIndex", currentIndex, imagesData[currentIndex]);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=1",
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
      console.log(err);
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
    if (currentIndex > imagesData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="main">
      <div className="main-section">
        {/* <div>
                    <button onClick={handlePre}>Previous</button>
                </div>
                
                <div>
                    <button onClick={handleNext}>Next</button>

                </div> */}
        <div className="image-slider">
          <div className="left-arrow">
            <FaArrowAltCircleLeft />
          </div>
          {imagesData &&
            imagesData.map((item) => (
              <div key={item.id} className="each-image">
                <img src={item.url} alt={item.altText} />
              </div>
            ))}
          <div className="right-arrow">
            <FaArrowAltCircleLeft />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imageslider;
