import React, { useState } from "react";

export default function AdditionVisibility({ children, component }) {
  const [show, setShow] = useState(false);

  return (
    <div className="component-container">
      {show && children}
      <button
        className="additionQuesBtn"
        onClick={() => setShow((prev) => !prev)}
      >
        {typeof component != "undefined"
          ? show
            ? "Скрыть дополнение"
            : "Подробнее о рисках"
          : "Дополнительно"}
      </button>
    </div>
  );
}




