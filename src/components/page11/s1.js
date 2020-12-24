
import React, { useState, useEffect } from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from '../useWindowSize'


import home1 from '../../images/page11/home.jpg'
import s1Left from '../../images/page11/s1BoxLeft.jpg'
import s1Right from '../../images/page11/s1BoxRight.jpg'
import s1Clip from '../../images/page11/clipPath.svg'
import arrow from '../../images/page11/arrow-down.svg'

export default function S1(props) {

    const { scrollY } = useViewportScroll()

    const size = useWindowSize();
    const fadeOut = useTransform(
        scrollY,
        [0, size.height / 2.2],
        [1, 0]
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

    //盒子往上滑阈值
    // const [isOn, setOn] = useState(false)

    // if (currentY > size.height) {
    //     setOn(true)
    // } else {
    //     setOn(false)
    // }

    // 2个mask盒子参数
    const s1BoxOpacity = useTransform(
        scrollY,
        [0, size.height / 2],
        [0, 1]
    )

    const s1BoxclipLeft = useTransform(
        scrollY,
        [0, size.height / 2],
        ['inset(0% 100% 0% 0% round 0px)', 'inset(0% 0% 0% 0% round 10px)']
    )

    const s1BoxShadow = useTransform(
        scrollY,
        [0, size.height / 2],
        ['drop-shadow(0 0px 0px rgba(0,19,80,0.0))', 'drop-shadow(0 10px 20px rgba(0,19,80,0.5))']
    )
    const moveX = useTransform(
        scrollY,
        [0, size.height / 2],
        ['0%', '100%']
    )


    return (
        <div>
            <motion.div style={{
                height: '100vh',
                width: '100vw',
                maxWidth: '100%',
                background: `url(${home1})`,
                backgroundSize: '100vw auto',
                opacity: fadeOut,
                position: 'fixed',
            }}>
            </motion.div>
            {console.log(scrollY)}
            {/* mask中间方块 */}
            <motion.div style={{
                width: '41.8vh',
                height: '65.4vh',
                borderRadius: 8,
                boxShadow: boxShadow1,
                position: 'fixed',
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                background: `url(${home1})`,
                backgroundPosition: '50% 50%',
                backgroundSize: '100vw auto',
            }}>
            </motion.div>

            {/* mask左边方块 */}
            <motion.div style={{
                filter: s1BoxShadow,
                width: '34vh',
                height: '47vh',
                // position: isOn ? 'fixed' : 'absolute',
                position: 'fixed',
                top: '50%',
                y: '-50%',
                left: '22vw',
            }}>
                <motion.div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${s1Left})`,
                        backgroundSize: '150% auto',
                        opacity: s1BoxOpacity,
                        clipPath: s1BoxclipLeft,
                        backgroundPosition: `${moveX.current} 50%`,
                    }}>
                </motion.div>
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
                scale: textScale,
                position: 'fixed'
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