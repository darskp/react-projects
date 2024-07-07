import React, {useState} from "react";
import ModalOverview from "./modalOverview.jsx";
import "./index.css";

const Modal = () => {
  const [ismodalOpen, setIsModelOpen] = useState(false);

  return (
    <div className="main-modal-container">
      {ismodalOpen && (
        <ModalOverview
          ismodalOpen={ismodalOpen}
          toggleModal={() => setIsModelOpen(false)}
        />
      )}
      {!ismodalOpen && (
        <button className="btn" onClick={() => setIsModelOpen(true)}>
          Open Modal
        </button>
      )}
    </div>
  );
};

export default Modal;
