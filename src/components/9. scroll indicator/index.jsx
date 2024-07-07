import React, {useEffect, useState} from "react";
import "./index.css";

const ScrollBar = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  console.log("scrollPercentage", scrollPercentage);
  const fetchData = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      if (response.ok) {
        const data = await response.json();
        if (data && data.products && data.products.length > 0) {
          setData(data?.products);
        }
      } else {
        setErrorMessage(response.message);
      }
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleScrollPercentage = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage =
      ((totalHeight - document.documentElement.scrollTop) / totalHeight) * 100;
    setScrollPercentage(100 - percentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => window.removeEventListener("scroll", () => {});
  }, [scrollPercentage]);

  return (
    <div className="scroll-main">
      <div className="top-container">
        <h1>Custom Scroll Indicator - {Math.trunc(scrollPercentage)}%</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{width: `${scrollPercentage}%`}}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {data && data.length > 0
          ? data.map((dataItem, index) => (
              <div key={index} className="dataItem">
                <p>{dataItem.title}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ScrollBar;
