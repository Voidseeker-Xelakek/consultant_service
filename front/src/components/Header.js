import { Link } from 'react-router-dom';
import domPNG from "../img/dom.png";
import Calculator from './Calculator';


export default function Header() {
  const openCalculatorWindow = () => {
    window.open('front/src/components/Calculator.js'); 
  };

  return (
    <header className="App-header">
      {/* <div className="left-section">
        <img
          src={domPNG}
          alt="DOM"
          style={{ width: "100px", height: "100px" }}
        />
      </div> */}
      <div className="center-section">
        <span className="name">Надежный дом</span>
      </div>
      <div className="calculator">
        <btn className="calculatorBtn" onClick={openCalculatorWindow}>
          Калькулятор выгоды
        </btn>
      </div>
    </header>
  );
}
