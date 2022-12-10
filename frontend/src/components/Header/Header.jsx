/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.scss";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import { SlSocialVkontakte } from 'react-icons/sl'

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-top">
          <div className="header__social">
            <div className="header__social--item">
              <AiOutlineWhatsApp />
            </div>
            <div className="header__social--item">
              <RiTelegramLine />
            </div>
            <div className="header__social--item">
              <SlSocialVkontakte/>
            </div>
          </div>

          <div className="header__contacts">
            <a
              className="contacts__email"
              href="mailto:info@spb-stroimgroup.ru"
            >
              info@spb-stroimgroup.ru
            </a>
            <a className="contacts__number" href="tel:+79099595521">
              <span>Санкт-Петербург</span>
              <a>+7 (909) 959-55-21</a>
            </a>
            <a href="#contact" className="contacts__button">
              Заказать Звонок
            </a>
          </div>
        </div>

        <div className="header-bottom">
          <div className="header__logo">
            {/* <img src={images.logo192} alt="Логотип Компании"/> */}
            <></>
          </div>
          <div className="header__menu">
            <nav className="header__list">
              <a href="#benefits" className="header__list--item">
                Преимущества
              </a>
              <a href="#gallery" className="header__list--item">
                Галерея
              </a>
              <a href="#about" className="header__list--item">
                О нас
              </a>
              {/* <a href="#" className="header__list--item">
                Гаражи и заборы
              </a> */}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
