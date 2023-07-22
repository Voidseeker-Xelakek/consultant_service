import React, { useState } from "react";

export default function AdditionVisibility({ children }) {
  const [show, setShow] = useState();

  return (
    <div className="component-container">
      {show && children}
      <button
        className="additionQuesBtn"
        onClick={() => setShow((prev) => !prev)}
      >
        {show ? "Скрыть дополнение" : "Дополнительно"}
      </button>
    </div>
  );
}
