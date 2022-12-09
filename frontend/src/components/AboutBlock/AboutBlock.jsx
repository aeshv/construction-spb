import React from 'react'
import './AboutBlock.scss'

const AboutBlock = () => {
    return (
        <>
            <div className="AboutBlock" id='about'>
                <div className="ab__wrapper">
                    <div className="ab__content">
                        <h3 className="ab__title">СПБ ГРУП СТРОЙ</h3>
                        <p className="ab__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.</p>
                        <a href='/#contact' className='ab__button' >Узнать стоимость</a>
                    </div>

                    <div className="ab__image">
                        <div className="ab__imageWrapper">
                            <img src="http://placeimg.com/600/600/animals" alt="Логотип компании" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBlock