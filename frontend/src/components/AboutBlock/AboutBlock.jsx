import React from 'react'
import './AboutBlock.scss'
import { motion } from "framer-motion";


const AboutBlock = () => {
    return (
        <>
            <motion.div  whileInView={{ opacity: [0.9, 1] }} className="AboutBlock" id='about'>
                <div className="ab__wrapper">
                    <div className="ab__content">
                        <motion.h3  whileInView={{ y: [10, 0] }} className="ab__title">СПБ ГРУП СТРОЙ</motion.h3>
                        <motion.p whileInView={{ scale: [0.95, 1] }} className="ab__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget hendrerit odio, non ultrices lorem. Donec vel vestibulum eros. Curabitur fringilla arcu varius.</motion.p>
                        <a href='/#contact' className='ab__button' >Узнать стоимость</a>
                    </div>

                    <div className="ab__image">
                        <div className="ab__imageWrapper">
                            <motion.img whileInView={{ zoom: [0.8, 1] }} src="http://placeimg.com/600/600/animals" alt="Логотип компании" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default AboutBlock