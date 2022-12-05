import React, { useEffect, useRef, useState } from "react";
import "./BenefitsBlock.scss";
import { useSwipeable } from "react-swipeable";
import { motion, useInView } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Spacer from "./../UI/Spacer/Spacer";

const BenefitsBlock = () => {
  const [active, setActive] = useState(1);
  const [isTutorial, setIsTutorial] = useState(true);

  const tutorialRef = useRef(null);
  const isInView = useInView(tutorialRef, { once: false });

  const handlersBox = useSwipeable({
    onSwipedLeft: ({ dir, event }) => {
      changeCurrentActive("plus");
    },

    onSwipedRight: ({ dir, event }) => {
      changeCurrentActive("minus");
    },
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    setTimeout(() => {
      setIsTutorial(false);
    }, 2500);
  }, []);

  let changeCurrentActive = (action) => {
    let plus = function () {
      if (active === 1) {
        setActive(2);
      }

      if (active === 2) {
        setActive(3);
      }
    };
    let minus = function () {
      if (active === 3) {
        setActive(2);
      }

      if (active === 2) {
        setActive(1);
      }
    };

    if (action === "plus") {
      plus();
    }

    if (action === "minus") {
      minus();
    }
  };

  const tutorialAnimation = {
    show: { opacity: 1, display: "flex" },
    hide: { opacity: 0, display: "none" },
  };

  return (
    <>
      <div className="BenefitsBlock">
        <div className="title">
          <h2 className="title__text">
            Почему мы продаем дорого и делаем это в <b>2 раза быстрее</b>
          </h2>
          <Spacer type="md" />
        </div>

        <div className="swiper">
          <div className="swiper__header">{active}/3</div>
          <div className="swiper__body" {...handlersBox}>
            {/* slide 1 */}
            {active === 1 && (
              <motion.div
                className="slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="slide__content">
                  <div className="content">
                    <div className="content__title">
                      Собственная база покупателей
                    </div>

                    <motion.ul
                      className="content__list"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <li className="content__item">
                        <span>
                          <b>Создаем спрос</b> на объект еще до размещения его в
                          рекламе
                        </span>
                      </li>
                      <li className="content__item">
                        <span>
                          Используем <b>закрытые базы</b> риэлторов
                        </span>
                      </li>
                      <li className="content__item">
                        <span>
                          Продаем через собственную наработанную базу из{" "}
                          <b>6000</b>
                        </span>
                      </li>
                    </motion.ul>

                    <div className="content__control">
                      <button
                        className="prev"
                        onClick={() => changeCurrentActive("minus")}
                      >
                        <MdKeyboardArrowLeft />
                      </button>
                      <button className="gold">
                        Получите превью предложения
                      </button>
                      <button
                        className="next"
                        onClick={() => changeCurrentActive("plus")}
                      >
                        <MdKeyboardArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="slide__image">
                  <img
                    src="http://placeimg.com/900/1000/animals"
                    alt="Здание"
                  />
                </div>
              </motion.div>
            )}

            {/* slide 2 */}
            {active === 2 && (
              <motion.div
                className="slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="slide__content">
                  <div className="content">
                    <div className="content__title">
                      2Собственная база покупателей
                    </div>

                    <motion.ul
                      className="content__list"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <li className="content__item">
                        <span>
                          <b>С2здаем спрос</b> на объект еще до размещения его в
                          рекламе
                        </span>
                      </li>
                      <li className="content__item">
                        <span>
                          Испол2ьзуем <b>закрытые базы</b> риэлторов
                        </span>
                      </li>
                      <li className="content__item">
                        <span>
                          Продаем через собственную наработанную базу из{" "}
                          <b>6000</b>
                        </span>
                      </li>
                    </motion.ul>

                    <div className="content__control">
                      <button
                        className="prev"
                        onClick={() => changeCurrentActive("minus")}
                      >
                        <MdKeyboardArrowLeft />
                      </button>
                      <button className="gold">
                        Получите превью предложения
                      </button>
                      <button
                        className="next"
                        onClick={() => changeCurrentActive("plus")}
                      >
                        <MdKeyboardArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="slide__image">
                  <img src="http://placeimg.com/900/900/animals" alt="Здание" />
                </div>
              </motion.div>
            )}

            {/* slide 3 */}
            {active === 3 && (
              <motion.div
                className="slide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="slide__content">
                  <div className="content">
                    <div className="content__title">
                      Собс3твенная база покупателей
                    </div>

                    <motion.ul
                      className="content__list"
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <li className="content__item">
                        <span>
                          <b>Соз3даем спрос</b> на объект еще до размещения его
                          в рекламе
                        </span>
                      </li>
                      <li className="content__item">
                        <span>
                          Испо3льзуем <b>закрытые базы</b> риэлторов
                        </span>
                      </li>
                      <li className="content__item">
                        <span>
                          Прода3ем через собственную наработанную базу из{" "}
                          <b>6000</b>
                        </span>
                      </li>
                    </motion.ul>

                    <div className="content__control">
                      <button
                        className="prev"
                        onClick={() => changeCurrentActive("minus")}
                      >
                        <MdKeyboardArrowLeft />
                      </button>
                      <button className="gold">
                        Получите превью предложения
                      </button>
                      <button
                        className="next"
                        onClick={() => changeCurrentActive("plus")}
                        style={{ opacity: active === 3 ? "0.2" : "1" }}
                      >
                        <MdKeyboardArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="slide__image">
                  <img
                    src="http://placeimg.com/1000/900/animals"
                    alt="Здание"
                  />
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {isTutorial && (
          <motion.div
            ref={tutorialRef}
            className="tutorial"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ rotate: 0 }}
            transition={{ duration: 1.5 }}
          >
            <motion.div
              initial={{ rotate: 90 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              className="tutorial__icon"
            >
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                src="https://cdn-icons-png.flaticon.com/512/4603/4603384.png"
                alt="swipe to see full content"
              />
            </motion.div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default BenefitsBlock;
