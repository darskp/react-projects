/*eslint-disable*/

import React from "react";

const ImgOverview = ({item}) => {
  return (
    <div className="image-slider">
      <div className="image-slider">
        <div>
          <img src={item?.url} alt={item?.altText} className="each-image" />
        </div>
      </div>
    </div>
  );
};

export default ImgOverview;
