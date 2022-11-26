import React, { useEffect, useState } from 'react'
import './BenefitsBlock.scss'
import { useSwipeable } from "react-swipeable";


const BenefitsBlock = () => {

    const [active, setActive] = useState(1);

    const handlersBox = useSwipeable({
        onSwipedLeft: ({ dir, event }) => {
            setActive((prevState) => prevState + 1);
            console.log('aaaa');
        },

        onSwipedRight: ({ dir, event }) => {
            setActive((prevState) => prevState + 1);
            console.log(',,,');
        },
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });


    return (
        <>
            <div className="BenefitsBlock">
                <div className="title">
                    <h2 className="title__text">
                        Почему мы продаем дорого и делаем
                        это в <b>2 раза быстрее</b>
                    </h2>
                </div>

                <div className="swiper">
                    <div className="swiper__header">{active}</div>
                    <div className="swiper__body" {...handlersBox}>
                        <div className="slide">
                            <div className="slide__content">
                                <div className="content">
                                    <div className="content__title">Собственная база покупателей</div>

                                    <ul className="content__list">
                                        <li className="content__item">
                                            <span><b>Создаем спрос</b> на объект еще до размещения
                                                его в рекламе</span>
                                        </li>
                                        <li className="content__item">
                                            <span>Используем <b>закрытые базы</b> риэлторов</span>
                                        </li>
                                        <li className="content__item">
                                            <span>Продаем через собственную наработанную
                                                базу из <b>6000</b></span>
                                        </li>
                                    </ul>

                                    <div className="content__control">
                                        <button className="prev">prev</button>
                                        <button className="gold">Получите превью предложения</button>
                                        <button className="next">next</button>
                                    </div>
                                </div>
                            </div>
                            <div className="slide__image"><img src='https://i.pinimg.com/564x/66/b3/b9/66b3b9acf91c7b0102837eddf84f2fad.jpg' alt='Здание' /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitsBlock