import React, { useState, useEffect } from 'react';
import styles from '../components/clock.module.css'
import { motion } from "framer-motion"



export default function Clock() {

    const [sec, setSec] = useState(new Date().getSeconds())
    const [min, setMin] = useState(new Date().getMinutes())
    const [hr, setHr] = useState(new Date().getHours())

    useEffect(() => {
        let secID = setInterval(() => tick(), 1000)
        let minID = setInterval(() => tick(), 1000)
        let hrID = setInterval(() => tick(), 1000)
    })

    function tick() {
        setSec(new Date().getSeconds())
        setMin(new Date().getMinutes())
        setHr(new Date().getHours())
    }

    // 从59秒到0秒的动画不能正确显示，因为要从354度到0度，所以把分钟也和秒加在一起，
    let secDeg = (min * 60 + sec) * 6
    let minDeg = min * 6 - 90
    let hrDeg = (hr % 12) * 30 - 90

    return (
        <div className={styles.wrap}>
            {/* test sec num */}
            {/* <div>{hr}:{min}:{sec}</div> */}
            <div className={styles.dial}>
                <motion.div
                    className={styles.hourHand}
                    animate={{
                        rotate: hrDeg
                    }}
                ></motion.div>
                <motion.div
                    className={styles.minHand}
                    animate={{
                        rotate: minDeg
                    }}
                ></motion.div>
                <motion.div
                    className={styles.secHand}
                    animate={{
                        rotate: secDeg
                    }}
                >
                </motion.div>
                <div className={styles.centerDot}></div>
            </div>
            <h1 style={{
                fontSize: "60px",
                letterSpacing: "0.92px",
                lineHeight: "84px"
            }}
            >北 京</h1>
            <h3
                style={{
                    fontFamily: "futura",
                    fontSize: 36,
                    letterSpacing: "0.55px",
                }}
            >Beijing</h3>

        </div >
    )
}