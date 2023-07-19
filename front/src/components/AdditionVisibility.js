import React, { useState } from "react";

export default function AdditionVisibility({ children }) {
  const [show, setShow] = useState();
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Скрыть дополнение" : "Дополнительно";

  return (
    <div className="component-container">
      {show && children}
      <button className="additionQuesBtn" onClick={toggleShow}>
        {buttonText}
      </button>
    </div>
  );
}
