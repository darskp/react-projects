import React from "react";
import {ColorCodeOptions} from "../util";

const Generate = ({colorModel, generatedCode}) => {
  return (
    <div className="generateSection">
      <h2 className="codeName-heading">{colorModel} Color</h2>
      <h2>
        {colorModel == ColorCodeOptions[0]?.value
          ? generatedCode.HEX
          : generatedCode.RGB}
      </h2>
    </div>
  );
};

export default Generate;
