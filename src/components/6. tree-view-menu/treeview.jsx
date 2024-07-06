import React from "react";
import "./treeview.css";
import Treelist from "./treelist.jsx";
import {sideMenu} from "./menu";
import RouterDashboard from "./RouterDashboard.jsx";

const Treeview = () => {
  return (
    <div className="treeview-main" id="treeview">
      <div className="left-container">
        <Treelist list={sideMenu} />
      </div>
      <div className="content-container">
        <RouterDashboard />
      </div>
    </div>
  );
};

export default Treeview;
