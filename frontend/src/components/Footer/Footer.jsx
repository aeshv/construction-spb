import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Footer.scss";
import callYM from "./../../helpers/callYM";
import { motion } from "framer-motion";
import Created from "../Created/Created";

const Footer = () => {
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Имя должно быть длиннее 2-х символов")
      .max(50, "Имя должно быть короче 50-ти символов")
      .required("Обязательное поле"),
    phone: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Обязательное поле"),
    content: Yup.string(),
  });

  const [isFormSended, setIsFormSended] = React.useState(false);

  return (
    <>
      <div className="footer__wrapper" id="contact">
        <div className="footer__top">
          <div className="ft">
            <div className="ft_contact">
              <motion.p
                className="ft__text"
                initial={{ opacity: 0.6, y: 10 }}
                whileInView={{ opacity: [0.6, 1], y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <s>Не откладывайте мечту на потом.</s>
                <br /> <b> Оставьте вашу заявку</b>, и<br />
                мы свяжемся с вами как можно скорее
              </motion.p>

              {isFormSended ? (
                <div className="ft__control ft__text">Успешно отправлено!</div>
              ) : (
                <div className="ft__control">
                  <Formik
                    initialValues={{
                      username: "",
                      phone: "",
                      content: "",
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                      axios
                        .get(`${process.env.REACT_APP_API}/mail`, {
                          params: {
                            ...values,
                          },
                        })
                        .catch((error) => {
                          console.warn(error);
                          callYM("form-failed");
                        })
                        .then((response) => {
                          setIsFormSended(true);
                          callYM("form-success");
                          console.log("response - ", response);
                        });
                    }}
                  >
                    {({ errors, touched }) => (
                      <Form>
                        <motion.div
                          className="ft__row"
                          initial={{ opacity: 0.0, y: 10 }}
                          whileInView={{ opacity: [0.0, 1], y: 0 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          <Field
                            name="username"
                            className="ft__input"
                            placeholder="Ваше имя *"
                          />
                          {errors.username && touched.username ? (
                            <div className="ft__error">{errors.username}</div>
                          ) : null}
                        </motion.div>
                        <motion.div
                          className="ft__row"
                          initial={{ opacity: 0.0, y: 10 }}
                          whileInView={{ opacity: [0.0, 1], y: 0 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          <Field
                            name="phone"
                            className="ft__input"
                            placeholder="Номер телефона *"
                          />
                          {errors.phone && touched.phone ? (
                            <div className="ft__error">{errors.phone}</div>
                          ) : null}
                        </motion.div>
                        <motion.div
                          className="ft__row"
                          initial={{ opacity: 0.0, y: 10 }}
                          whileInView={{ opacity: [0.0, 1], y: 0 }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          <Field
                            as="textarea"
                            name="content"
                            className="ft__input big"
                            placeholder="Ваше сообщение"
                          />
                          {errors.content && touched.content ? (
                            <div className="ft__error">{errors.content}</div>
                          ) : null}
                        </motion.div>
                        <motion.button
                          type="submit"
                          className="ft__send"
                          onClick={() => {
                            callYM("form-submit");
                          }}
                          initial={{ opacity: 0.0, y: 10, scale: 0.9 }}
                          whileInView={{
                            opacity: [0.0, 1],
                            scale: [0.8, 1],
                            y: 0,
                          }}
                          transition={{ duration: 0.4, delay: 0.4 }}
                        >
                          Получить консультацию
                        </motion.button>
                      </Form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="fb">
            <div className="fb__map">
              610000 г. Киров, ул. Карла Маркса 21, офис 334{" "}
            </div>
            <div className="fb_phone">
              <a
                href="tel:+79117990220"
                onClick={() => {
                  callYM("footer-phone");
                }}
              >
                +7 (911) 799-02-20
              </a>
            </div>
          </div>
        </div>
       <Created/>
      </div>
    </>
  );
};

export default Footer;
