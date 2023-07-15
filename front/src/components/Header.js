import domPNG from "../img/dom.png";
export default function Header() {
  const openCalculatorWindow = () => {
    window.open("https://example.com/calculator", "_blank"); // Замените ссылку на URL вашего калькулятора
  };

  return (
    <header className="App-header">
      <div className="left-section">
        <img
          src={domPNG}
          alt="DOM"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="center-section">
        <span className="name">Недвижимость без риска</span>
      </div>
      <div
        className="right-section"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div onClick={openCalculatorWindow} style={{ marginRight: "10px" }}>
          Калькулятор
        </div>
        <div>Кабинет</div>
      </div>
    </header>
  );
}
