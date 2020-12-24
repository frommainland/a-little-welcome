
import React, { useState, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from '../useWindowSize'


import home1 from '../../images/page11/home.jpg'
import arrow from '../../images/page11/arrow-down.svg'

export default function S1(props) {

    const { scrollY } = useViewportScroll()
    const size = useWindowSize();
    const fadeOut = useTransform(
        scrollY,
        [0, size.height],
        [1, 0]
    )

    const y = useTransform(
        scrollY, value => -value
    )
    const textScale = useTransform(
        scrollY,
        [0, size.height / 2],
        [1, 0.6]
    )
    const boxShadow1 = useTransform(
        scrollY,
        [0, size.height],
        ['0 0px 0px 0 rgba(0,0,0,0.0)', '0 4px 8px 0 rgba(0,0,0,0.5)']
    )

    return (
        <div>
            <motion.div style={{
                height: '100vh',
                width: '100vw',
                maxWidth: '100%',
                background: `url(${home1})`,
                backgroundSize: 'cover',
                opacity: fadeOut,
                y: scrollY
            }}>
            </motion.div>

            <motion.div style={{
                width: '41.8vh',
                height: '65.4vh',
                // overflow: 'hidden',
                borderRadius: 8,
                boxShadow: boxShadow1,
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                background: `url(${home1})`,
                backgroundPosition: '50% 50%',



            }}>
            </motion.div>

            {/* 文字标题 */}
            <motion.div style={{
                color: 'white',
                position: 'absolute',
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                textAlign: 'center',
                fontWeight: 900,
                scale: textScale
            }}>
                <h1 style={{
                    fontSize: 72,
                    marginBottom: 10
                }}>Visa
                    <span style={{
                        fontWeight: 100,
                    }}> |</span> 心驰所向</h1>
                <p style={{
                    fontSize: 30,
                }}>随时随地，放心支付。</p>
            </motion.div >

            {/* 箭头 */}
            <motion.div style={{
                height: 60,
                width: 60,
                borderRadius: 60,
                border: '2px solid white',
                position: 'absolute',
                x: '-50%',
                left: '50%',
                bottom: 50,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <motion.div style={{
                    width: 24,
                    height: 24,
                    background: `url(${arrow})`,
                    backgroundSize: 'contain'
                }}></motion.div>
            </motion.div>

        </div>
    )
}