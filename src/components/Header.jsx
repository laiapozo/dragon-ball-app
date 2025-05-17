import React from "react";
import Logo from "../images/Dragon_ball_Logo.png";
import "../scss/components/Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to="/">
      <header className="header">
        <h1 className="header__title">Dragon Ball character finder</h1>
        <img className="header__logo" src={Logo} alt="Logo Dragon Ball" />
      </header>
    </Link>
  );
};

export default Header;
