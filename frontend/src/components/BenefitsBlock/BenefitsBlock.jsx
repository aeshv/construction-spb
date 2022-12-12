import React, { useEffect, useRef, useState } from "react";
import "./BenefitsBlock.scss";
import { useSwipeable } from "react-swipeable";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Spacer from "./../UI/Spacer/Spacer";
import callYM from "./../../helpers/callYM";

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
      <div className="BenefitsBlock" id="benefits">
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
                  {active === 1 && (
                    <>
                      <AnimatePresence>
                        <motion.ul
                          className="content__list"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <li className="content__item">
                            <span>
                              <b>Строим</b> по вашему проекту или предложим свой
                            </span>
                          </li>
                          <li className="content__item">
                            <span>Широкий спектр работ под ключ</span>
                          </li>
                          <li className="content__item">
                            <span>Выгодное предложение на комплекс</span>
                          </li>
                        </motion.ul>
                      </AnimatePresence>
                    </>
                  )}
                  {active === 2 && (
                    <>
                      <AnimatePresence>
                        <motion.ul
                          className="content__list"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <li className="content__item">
                            <span>
                              Современная комплексная застройка для комфортного
                              проживания за городом
                            </span>
                          </li>
                          <li className="content__item">
                            <span>
                              <b>Строим </b>только из качественных материалов
                            </span>
                          </li>
                          <li className="content__item">
                            <span>
                              Индивидуальный подход к каждому заказчику
                            </span>
                          </li>
                        </motion.ul>
                      </AnimatePresence>
                    </>
                  )}
                  {active === 3 && (
                    <>
                      <AnimatePresence>
                        <motion.ul
                          className="content__list"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <li className="content__item">
                            <span>Контроль качества на объекте</span>
                          </li>
                          <li className="content__item">
                            <span>Оригинальные дома и интерьерные решения</span>
                          </li>
                          <li className="content__item">
                            <span>
                              <b>Строим </b> по смете
                            </span>
                          </li>
                        </motion.ul>
                      </AnimatePresence>
                    </>
                  )}

                  <div className="content__control">
                    <button
                      className="prev"
                      onClick={() => changeCurrentActive("minus")}
                    >
                      <MdKeyboardArrowLeft />
                    </button>
                    <button
                      className="gold"
                      onClick={() => {
                        callYM("header-form");
                      }}
                    >
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
                {active === 1 && (
                  <motion.img
                    initial={{ opacity: 0.6, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src="http://placeimg.com/900/1000/animals"
                    alt="Здание"
                  />
                )}
                {active === 2 && (
                  <motion.img
                    initial={{ opacity: 0.6, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src="http://placeimg.com/700/1000/animals"
                    alt="Здание"
                  />
                )}
                {active === 3 && (
                  <motion.img
                    initial={{ opacity: 0.6, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    src="http://placeimg.com/800/900/nature"
                    alt="Здание"
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {isTutorial && (
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
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
