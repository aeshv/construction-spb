import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <div className="footer__wrapper">

                <div className="footer__top">
                    <div className="ft">
                        <div className="ft_contact">
                            <p className="ft__text">Наши эксперты помогут осуществить любые сделки с недвижимостью — обмен,
                                покупку или продажу недвижимости в Москве и области, аренду городских и
                                загородных объектов.</p>
                            <div className="ft__control">
                                <input type="text" className='ft__input' />
                                <button type="button" className='ft__send'>Получить консультацию</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="fb">
                        <div className="fb__map">610000 г. Киров,
                            ул. Карла Маркса 21, офис 334 </div>
                        <div className="fb_phone">
                            <span>+7 (999) 999 99 99</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer