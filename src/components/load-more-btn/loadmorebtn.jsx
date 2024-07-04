import React, {useEffect, useState} from "react";
import {fetchData} from "./api-config/tableData";
import "./loadmorebtn.css";
import {FaArrowUp} from "react-icons/fa";

const LoadMoreBtn = () => {
  const [tableData, setTabledata] = useState([]);
  const [limit, setLimit] = useState(40);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [disbleBtn, setDisbaleBtn] = useState(false);
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const fetchTableData = async (newLimit, newSkip) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetchData(newLimit, newSkip);
      if (response?.products?.length) {
        const {products} = response;
        setTabledata((pre) => [...pre, ...products]);
        if (response?.total > skip) {
          const diff = response.total - skip;
          if (diff > newLimit) {
            setSkip((pre) => pre + 20);
            setLimit(newLimit);
          } else {
            setDisbaleBtn(true);
          }
        }
      } else {
        setError(response.error);
        console.error("No products found");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching table data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTableData(limit, skip);
  }, []);

  const handleLoadMore = (limit, skip) => {
    fetchTableData(limit, skip);
  };

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="container loadmoreBtn">
      <h1>Table Data with Load More Button</h1>
      <div className="card-container">
        {tableData.map((item, index) => (
          <div key={index} className="card">
            <img
              src={item.thumbnail}
              alt={item.title}
              width={150}
              height={150}
            />
            <h3 style={{margin: "5px 0px"}}>{item.title}</h3>
            <p>Price : {item.price}</p>
          </div>
        ))}
      </div>
      <div className="btnsection">
        {error ? (
          <p style={{color: "red"}}>{error}</p>
        ) : !disbleBtn && !loading ? (
          <button
            onClick={() => handleLoadMore(limit, skip)}
            disabled={loading}
          >
            Load More
          </button>
        ) : !disbleBtn ? (
          <p className="loadmoreText">Loading More Data! Please wait...!</p>
        ) : (
          <p className="loadmoreText">No More Products</p>
        )}
      </div>
      <div className="gotoTop">
        <FaArrowUp
          className="gotoTopIcon"
          onClick={handleGoToTop}
          style={{display: visible ? "inline" : "none"}}
        />
      </div>
    </div>
  );
};

export default LoadMoreBtn;
