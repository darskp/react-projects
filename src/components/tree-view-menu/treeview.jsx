import React, {useState} from "react";
import "./treeview.css";
import {sideMenu} from "./menu";

const Treeview = () => {
  const [menuOpen, setMenuOpen] = useState({});

  const handleExpand = () => {
    setMenuOpen();
  };

  return (
    <div className="treeview-main">
      <div className="left-container">
        {sideMenu?.map((item, index, arr) => (
          <div key={index}>
            <div className="menuPlus">
              <h3>{item.label}</h3>
              <button onClick={() => handleExpand(item.label)} className="btn">
                +
              </button>
            </div>
            <div className="">
              {item && item?.Children?.length > 0
                ? item?.Children?.map((submenu, i, arr) => (
                    <div key={i}>
                      <div className="submenuPlus">
                        <h3>{submenu.label}</h3>
                        <button onClick={() => handleExpand} className="btn">
                          +
                        </button>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        ))}
      </div>
      <div className="content-container">Right Side</div>
    </div>
  );
};

export default Treeview;
