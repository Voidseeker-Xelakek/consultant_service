export default function Header() {
  const openCalculatorWindow = () => {
    window.open('https://example.com/calculator', '_blank'); // Замените ссылку на URL вашего калькулятора
  };

  return (
    <header className='App-header'>
      <div className='left-section'>
        Пустой
      </div>
      <div className='center-section'>
        <span className='logo'>Недвижимость без риска</span>
      </div>
      <div className='right-section'>
        <ul className='nav'>
          <li onClick={openCalculatorWindow}>Калькулятор</li>
          <li>О нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
      </div>
    </header>
  );
}





