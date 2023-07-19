import { useState } from "react";

export default function Navbar({ children }) {
  //   const openCalculatorWindow = () => {
  //     window.open("/calculator");
  //   };
  //   const [isNavExpanded, setIsNavExpanded] = useState(false);

  //   function toggleNav() {
  //     setIsNavExpanded(!isNavExpanded);
  //   }

  //   return (
  //     <nav className="navigation">
  //       {/* <button className="hamburger" onClick={toggleNav}>
  //         &#9776;
  //       </button>
  //       <div
  //         className={
  //           isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
  //         }
  //       >
  //         {" "}
  //         <ul>
  //           <button onClick={openCalculatorWindow} className="calculatorBtn">
  //             Калькулятор выгоды
  //           </button>
  //         </ul>
  //         <ul>
  //           <button className="calculatorBtn">Личный кабинет</button>
  //         </ul>
  //       </div> */}
  //       <AdditionVisibility>
  //         <Addition addition={"kek"} />
  //       </AdditionVisibility>
  //     </nav>
  //   );
  // }
  const [show, setShow] = useState();
  function toggleShow() {
    setShow(!show);
  }
  var buttonText = show ? "Скрыть дополнение" : "Дополнительно";

  return (
    <div className="navbar">
      {show && children}
      <button className="navBtn" onClick={toggleShow}>
        &#9776;
      </button>
    </div>
  );
}
