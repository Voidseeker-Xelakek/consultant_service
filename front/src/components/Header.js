import domPNG from "../img/dom.png";
export default function Header() {
  const openCalculatorWindow = () => {
    window.open("https://example.com/calculator", "_blank"); // Замените ссылку на URL вашего калькулятора
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
