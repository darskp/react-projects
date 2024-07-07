import React from "react";
import {RxCross2} from "react-icons/rx";

const ModalOverview = ({ismodalOpen, toggleModal}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleModal();
    }
  };

  return (
    <div className="modal-main-container">
      <div
        className="modal-cancel"
        role="button"
        onClick={toggleModal}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <RxCross2 className="cancel-icon" />
      </div>
      <div className="modal-div-section head">
        <h3>Customized Header</h3>
      </div>
      <div className="modal-div-section body">
        <h3>Customized Body</h3>
      </div>
      <div className="modal-div-section footer">
        <h3>Customized Footer</h3>
      </div>
    </div>
  );
};

export default ModalOverview;
