import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Footer.scss";

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
    content: Yup.string().required("Обязательное поле"),
  });

  return (
    <>
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="ft">
            <div className="ft_contact">
              <p className="ft__text">
                Наши эксперты помогут осуществить любые сделки с недвижимостью —
                обмен, покупку или продажу недвижимости в Москве и области,
                аренду городских и загородных объектов.
              </p>
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
                      .get(process.env.REACT_APP_API, {
                        params: {
                          ...values
                        }
                      })
                      .catch((error) => console.warn(error))
                      .then((response) => console.log("response - ", response));
                  }}
                >
                  {({ errors, touched }) => (
                    <Form>
                      <Field
                        name="username"
                        className="ft__input"
                        placeholder="Ваше имя"
                      />
                      {errors.username && touched.username ? (
                        <div className="ft__error">{errors.username}</div>
                      ) : null}

                      <Field
                        name="phone"
                        className="ft__input"
                        placeholder="Номер телефона"
                      />
                      {errors.phone && touched.phone ? (
                        <div className="ft__error">{errors.phone}</div>
                      ) : null}

                      <Field
                        name="content"
                        className="ft__input"
                        placeholder="Ваше сообщение"
                      />
                      {errors.content && touched.content ? (
                        <div className="ft__error">{errors.content}</div>
                      ) : null}
                      <button type="submit" className="ft__send">
                        Получить консультацию
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="fb">
            <div className="fb__map">
              610000 г. Киров, ул. Карла Маркса 21, офис 334{" "}
            </div>
            <div className="fb_phone">
              <span>+7 (999) 999 99 99</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
