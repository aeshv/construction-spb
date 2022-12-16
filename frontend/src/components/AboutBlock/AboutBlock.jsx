import React from "react";
import "./AboutBlock.scss";
import { motion } from "framer-motion";

const AboutBlock = () => {
  return (
    <>
      <motion.div
        whileInView={{ x: [-10, 0] }}
        duration={0.8}
        className="AboutBlock"
        id="about"
      >
        <div className="ab__wrapper">
          <div className="ab__content">
            <motion.h3 whileInView={{ opacity: [0.8, 1] }} className="ab__title">
              О Компании
            </motion.h3>
            <motion.p whileInView={{ opacity: [0.95, 1] }} className="ab__text">
              <b>Строим Групп СПб</b> – компания, специализирующаяся на
              строительстве всего загородного спектра представленного на рынке и
              не только. Дома и пристройки, навесы и беседки, мангальные зоны и
              веранды, сауны и бани, перголы и детские домики, гаражи и заборы.
              Все виды строений из дерева и газобетона. <br />
              <br /> Сплоченная, результативная <b>группа профессионалов </b>
              выполнит ваш заказ качественно и в срок.
            </motion.p>
            <a href="/#contact" className="ab__button">
              Узнать стоимость
            </a>
          </div>

          <div className="ab__image">
            <div className="ab__imageWrapper">
              <motion.img
                // whileInView={{ zoom: [0.8, 1] }}
                src="http://placeimg.com/600/600/animals"
                alt="Логотип компании"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutBlock;
