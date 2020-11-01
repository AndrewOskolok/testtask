import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo">
          <a className="header__logo_link" href="/">
            <p className="visually-hidden">logotype testtask</p>
          </a>
        </div>

        <nav className="header__nav">
          <div className="header__nav_burger"></div>

          <ul className="header__nav_list">
            <li className="header__nav_list_item">About me</li>
            <li className="header__nav_list_item">Relationships</li>
            <li className="header__nav_list_item">Requirement</li>
            <li className="header__nav_list_item">Users</li>
            <li className="header__nav_list_item">Sigh Up</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
