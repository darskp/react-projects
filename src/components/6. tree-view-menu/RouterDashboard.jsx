import React from "react";
import {Route, Routes} from "react-router-dom";
import {sideMenu} from "./menu";

const RouterDashboard = () => {
  const generateRoutes = (item) => {
    return item?.flatMap((menu, index) => {
      const route = (
        <Route path={menu.to} key={index} element={<div>{menu.label}</div>} />
      );
      const childrenRoutes = menu.Children ? generateRoutes(menu.Children) : [];
      //   console.log([route, ...childrenRoutes])
      return [route, ...childrenRoutes];
    });
  };

  return (
    <div>
      <Routes>{generateRoutes(sideMenu)}</Routes>
    </div>
  );
};

export default RouterDashboard;
