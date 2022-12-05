/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <header className="header">

        <div className="header-top">
          <div className="header__social">VK TG WHATSAPP</div>

          <div className="header__contacts">
            <div className="contacts__email">info@spb-stroimgroup.ru</div>
            <div className="contacts__number">
              <span>Санкт-Петербург</span>
              <span>+7 (909) 959-55-21</span>
            </div>
            <div className="contacts__button">Заказать Звонок</div>
          </div>
        </div>

        <div className="header-bottom">
          <div className="header__logo">LOGO</div>
          <div className="header__menu">
            <nav className="header__list">
              <a href="#" className="header__list--item">Якорь внизу</a>
              <a href="#" className="header__list--item">Якорь внизу</a>
              <a href="#" className="header__list--item">Якорь внизу</a>
              <a href="#" className="header__list--item">Якорь внизу</a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;