import { Link } from 'react-router-dom';
import domPNG from "../img/dom.png";
import Calculator from './Calculator';


export default function Header() {
  const openCalculatorWindow = () => {
    window.open('front/src/components/Calculator.js'); 
  };

  return (
    <header className="App-header">
      <div className="left-section"><img src={domPNG} alt="DOM" style={{width: '100px', height: '100px'}} /></div>
      <div className="center-section">
        <span className="name" style={{ fontSize: '50px' }}>Недвижимость без риска</span>
      </div>
      <div className="right-section" style={{ display: 'flex', alignItems: 'center' }}>
        <li onClick={openCalculatorWindow} style={{ marginRight: '10px' }}>Калькулятор</li>
        <li>Кабинет</li>
      </div>
    </header>
  );
}
