import {selectionDetails} from "./data";
import {useState} from "react";
import "./style.css";

function Accordian() {
  const [selectedSeletion, setSelectedSeletion] = useState([]);
  const [enableMultiSelection, SetEnableMultiSelection] = useState(false);

  const handleSlection = (id) => {
    setSelectedSeletion((prevSelection) =>
      !enableMultiSelection
        ? prevSelection.includes(id)
          ? []
          : [id]
        : prevSelection.includes(id)
          ? prevSelection.filter((pre) => pre !== id)
          : [...selectedSeletion, id],
    );
  };

  const handleChoice = () => {
    SetEnableMultiSelection((pre) => !pre);
    setSelectedSeletion([]);
  };

  return (
    <div className="mainselection">
      <div>
        <h3 className="heading"> Multi Selection</h3>
      </div>
      <div>
        <button className="btn" onClick={handleChoice}>
          {!enableMultiSelection
            ? "Enable Multi Selection"
            : "Enable Single Selction"}
        </button>
      </div>
      <div></div>
      <div className="selection">
        {selectionDetails ? (
          selectionDetails?.map((item) => {
            return (
              <div key={item.id}>
                <div className="card">
                  <div className="cardBody">
                    <div>{item?.title}</div>
                    <div
                      className="expandBtn"
                      onClick={() => handleSlection(item?.id)}
                      role="button"
                      onKeyPress={(e) => {
                        if (e.key == "Enter" || e.key == " ") {
                          handleSlection(item?.id);
                        }
                      }}
                      tabIndex={0}
                      aria-pressed={selectedSeletion.includes(item.id)}
                    >
                      {selectedSeletion.includes(item.id) ? "-" : "+"}
                    </div>
                  </div>
                  {selectedSeletion.includes(item.id) && (
                    <div className="cardBody1">
                      <p>{item?.description}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <p>No Data Found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Accordian;
