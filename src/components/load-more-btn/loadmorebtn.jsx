import React, {useEffect, useState} from "react";
import {fetchData} from "./api-config/tableData";
import "./loadmorebtn.css";

const LoadMoreBtn = () => {
  const [tableData, setTabledata] = useState([]);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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
          if (diff >= limit) {
            setSkip((pre) => pre + 10);
            setLimit(newLimit);
          } else {
            setSkip((pre) => pre + diff);
            setLimit(newLimit);
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

  return (
    <div className="main-loadmoreBtn">
      <h1>Table Data with Load More Button</h1>
      <div className="card-container">
        {tableData.map((item, index) => (
          <div key={index} className="card">
            <p>{item.title}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      <div className="btnsection">
        <button onClick={() => handleLoadMore(limit, skip)} disabled={loading}>
          {loading ? " Loading..." : "Load More"}
        </button>
        {error && <p style={{color: "red"}}>{error}</p>}
      </div>
    </div>
  );
};

export default LoadMoreBtn;
