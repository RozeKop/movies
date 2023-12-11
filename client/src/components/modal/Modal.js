import React from "react";
import "./modal.css";

export default function Modal({ children }) {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };
  return (
    <div className="modal" data-testid="modal">
      <div className="modal-content" onClick={handleModalClick}>
        {children}
      </div>
    </div>
  );
}
