import { useState } from "react";

export default function Navbar({ children }) {
  const [show, setShow] = useState();
  function toggleShow() {
    setShow(!show);
  }

  const openCalcWindow = () => {
    window.open("/calculator");
  };

  return (
    <div className="navbar">
      {show && (
        <div className="navBtnCont">
          <button className="calculatorBtn">Личный кабинет</button>
          <button className="calculatorBtn" onClick={openCalcWindow}>
            Калькулятор выгоды
          </button>
        </div>
      )}
      <button className="navBtn" onClick={toggleShow}>
        &#9776;
      </button>
    </div>
  );
}
