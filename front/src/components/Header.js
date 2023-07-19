import { Link } from "react-router-dom";
import logo from "../img/logo1.png";
import Navbar from "./Navbar";

export default function Header() {
  const openMainWindow = () => {
    window.open("/");
  };

  return (
    <header className="App-header">
      <div className="left-section">
        <img
          className="logo"
          src={logo}
          alt="DOM"
          onClick={openMainWindow}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <div className="center-section">
        <span className="name">Надежный дом</span>
      </div>
      <div className="navbar">
        <Navbar />
      </div>
    </header>
  );
}
