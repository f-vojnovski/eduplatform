import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1> Едукативна платформа</h1>
      {/*
      <div className="menu">
        <Link to="/">
          <div className="nav-link">Почетна</div>
        </Link>
        <Link to="/about">
          <div className="nav-link">За нас</div>
        </Link>
      </div>
      */}
    </div>
  );
};

export default Header;
