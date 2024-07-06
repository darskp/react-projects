import React from "react";
import Treeitems from "./treeitems.jsx";

const Treelist = ({list}) => {
  return (
    <>
      <>
        {list?.length > 0
          ? list?.map((item, index) => <Treeitems item={item} key={index} />)
          : null}
      </>
    </>
  );
};

export default Treelist;
