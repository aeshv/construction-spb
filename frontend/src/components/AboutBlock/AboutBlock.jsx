import React from 'react'
import './AboutBlock.scss'

const AboutBlock = () => {
    return (
        <>
            <div className="AboutBlock">
                <div className="ab__wrapper">
                    <div className="ab__content">
                        <h3 className="ab__title">СПБ ГРУП СТРОЙ</h3>
                        <p className="ab__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.</p>
                        <button type="button" className='ab__button'>Узнать стоимость</button>
                    </div>

                    <div className="ab__image">
                        <div className="ab__imageWrapper">
                            <img src="https://sun2-9.userapi.com/impg/mMT5AGMz6REKJcdwI598psQa5nEzAbUQnmcZZw/2cVxmP84o6I.jpg?size=1280x1280&quality=95&sign=402b65ae341a54aab45dd7de2883b627&type=album" alt="Логотип компании" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutBlock