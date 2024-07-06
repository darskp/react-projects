import React, {useState} from "react";
import Treelist from "./treelist.jsx";
import {useNavigate} from "react-router-dom";

const Treeitems = ({item}) => {
  const navigate = useNavigate();

  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  const handleExpand = (getCurrentlabel) => {
    setDisplayCurrentChildren((pre) => {
      return {...pre, [getCurrentlabel]: !pre[getCurrentlabel]};
    });
  };

  return (
    <>
      <div className="menuPlus">
        <button
          className="btn"
          style={{cursor: "pointer"}}
          onClick={() => navigate(`/treeview/${item.to}`)}
        >
          <h3>{item.label}</h3>
        </button>
        {displayCurrentChildren[item.label] ? (
          item?.Children ? (
            <button
              onClick={() => handleExpand(item.label)}
              className="btn"
              style={{backgroundColor: "white"}}
            >
              -
            </button>
          ) : null
        ) : item?.Children ? (
          <button
            onClick={() => handleExpand(item.label)}
            className="btn"
            style={{backgroundColor: "white"}}
          >
            +
          </button>
        ) : null}
      </div>
      {displayCurrentChildren[item.label] &&
        item &&
        item?.Children &&
        item?.Children?.length > 0 && (
          <div className="submenuPlus">
            <Treelist list={item.Children} />
          </div>
        )}
    </>
  );
};

export default Treeitems;
