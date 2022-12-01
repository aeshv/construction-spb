/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdExpandMore } from 'react-icons/md';
import "./FirstBlock.scss"
const FirstBlock = () => {
  return (
    <>
      <div className="FB">
        <div className="FB__wrapper">
          <div className="FB__background">
            <img src="http://placeimg.com/1600/600/animals" alt="" style={{opacity: '0.2'}}/>
          </div>
          <div className="FB__body">
            <div className="content">
              <h1 className="content__title">Готовые решения для жизни</h1>

              <div className="content__benefits">
                <div className="benefits">
                  <h3 className="benefits__title">100 000 000 p</h3>
                  <div className="benefits__description">Цена объекта</div>
                </div>

                <div className="benefits">
                  <h3 className="benefits__title">100 000 000 p</h3>
                  <div className="benefits__description">Цена объекта</div>
                </div>

                <div className="benefits">
                  <h3 className="benefits__title">100 000 000 p</h3>
                  <div className="benefits__description">Цена объекта</div>
                </div>

                <div className="benefits">
                  <h3 className="benefits__title">100 000 000 p</h3>
                  <div className="benefits__description">Цена объекта</div>
                </div>
              </div>

              <div className="content__tags">
                <div className="tags">
                  <div className="tags__item">
                    <a href="#" className="tags__link">
                      Дома и пристройки
                    </a>
                  </div>
                  <div className="tags__item">
                    <a href="#" className="tags__link">
                      Навесы и беседки
                    </a>
                  </div>
                  <div className="tags__item">
                    <a href="#" className="tags__link">
                      Бани и сауны
                    </a>
                  </div>
                  <div className="tags__item">
                    <a href="#" className="tags__link">
                      Гаражи и заборы
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="FB__scrollToMore">
            <span><MdExpandMore/>Подробнее об объекте </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBlock;
