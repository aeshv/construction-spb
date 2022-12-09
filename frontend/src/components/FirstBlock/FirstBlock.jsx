/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdExpandMore } from 'react-icons/md';
import "./FirstBlock.scss"
const FirstBlock = () => {
  return (
    <>
      <div className="FB">
        <div className="FB__wrapper">

          <div className="FB__body">
            <div className="FBcontent">
              <h1 className="FBcontent__title">Готовые решения для жизни</h1>

              <div className="FBcontent__benefits">
                <div className="benefits">
                  <h3 className="benefits__title">9 000 +</h3>
                  <div className="benefits__description">Построенных объектов</div>
                </div>

                <div className="benefits">
                  <h3 className="benefits__title">5 минут</h3>
                  <div className="benefits__description">Среднее время до звонка</div>
                </div>


                <div className="benefits">
                  <h3 className="benefits__title">450 000 ₽</h3>
                  <div className="benefits__description">Средняя цена</div>
                </div>

                <div className="benefits">
                  <h3 className="benefits__title">750 +</h3>
                  <div className="benefits__description">Довольных клиентов</div>
                </div>

              </div>

              <div className="FBcontent__tags">
                <div className="tags">
                  <div className="tags__item">
                    <a href="#" className="tags__link">
                      Дома и пристройки
                    </a>
                  </div>
                  <div className="tags__item hide-pc">
                    <a href="#" className="tags__link">
                     Беседки
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
                  <div className="tags__item">
                    <a href="#" className="tags__link">
                      Дома и пристройки
                    </a>
                  </div>
                  <div className="tags__item  hide-pc">
                    <a href="#" className="tags__link">
                      Навесы
                    </a>
                  </div>
                  <div className="tags__item  hide-pc">
                    <a href="#" className="tags__link">
                      Бани
                    </a>
                  </div>
                  <div className="tags__item  hide-pc">
                    <a href="#" className="tags__link">
                      Сауны
                    </a>
                  </div>
                  <div className="tags__item  hide-pc">
                    <a href="#" className="tags__link">
                      Заборы
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="FB__scrollToMore">
            <span><MdExpandMore/>Листайте ниже</span>
          </div>
          <div className="FB__background">
            <div className=""  id="animatedBackground"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBlock;
