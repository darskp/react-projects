import React, {useState} from "react";
import {tabs} from "./tabs";
import "./index.css";

const Tab1 = () => <div>Tab1</div>;
const Tab2 = () => <div>Tab2</div>;
const Tab3 = () => <div>Tab3</div>;

const componentMap = {
  Tab1,
  Tab2,
  Tab3,
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const ActiveComponent =
    componentMap[tabs.find((eachTab) => eachTab.id == activeTab)?.label];

  return (
    <div className="main-container">
      <div className="div-container">
        <div className="tab-container">
          {tabs.map((eachTab) => (
            <div
              role="button"
              tabIndex="0"
              aria-label={eachTab.label}
              onKeyDown={(e) => {
                if (e.key == "Enter" || e.key == "") {
                  setActiveTab(eachTab.id);
                }
              }}
              onClick={() => setActiveTab(eachTab.id)}
              className={
                activeTab == eachTab.id
                  ? "each-tab-container activetab"
                  : "each-tab-container"
              }
              key={eachTab.id}
            >
              <p>{eachTab.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="div-container component-section">
        {ActiveComponent && <ActiveComponent />}
      </div>
    </div>
  );
};

export default Tabs;
