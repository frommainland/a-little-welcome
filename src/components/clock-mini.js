import React, { useState, useEffect } from 'react';
import styles from '../components/clock.module.css'
import { motion } from "framer-motion"



export default function ClockMini(props) {


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

    //时区
    let singapore = 0
    let dubai = -4
    let london = -7
    let sanFrancisco = -15
    let miami = -12


    let diff = 0
    if (props.name === 'dubai') {
        diff = dubai
    } else if (props.name === 'london') {
        diff = london
    } else if (props.name === 'san francisco') {
        diff = sanFrancisco
    } else if (props.name === 'miami') {
        diff = miami
    } else if (props.name === 'singapore') {
        diff = singapore
    }

    // 从59秒到0秒的动画不能正确显示，因为要从354度到0度，所以把分钟也和秒加在一起，
    let secDeg = (min * 60 + sec) * 6
    let minDeg = min * 6 - 90
    let hrDeg = ((hr + diff) % 12) * 30 - 90

    return (
        <div className={styles.wrapMini}>
            {/* test sec num */}
            {/* <div>{hr}:{min}:{sec}</div> */}
            <div className={styles.dialMini}>
                <motion.div
                    className={styles.hourHandMini}
                    animate={{
                        rotate: hrDeg
                    }}
                ></motion.div>
                <motion.div
                    className={styles.minHandMini}
                    animate={{
                        rotate: minDeg
                    }}
                ></motion.div>
                <motion.div
                    className={styles.secHandMini}
                    animate={{
                        rotate: secDeg
                    }}
                >
                </motion.div>
                <div className={styles.centerDotMini}></div>
            </div>
            <h1 style={{
                fontSize: "24px",
                letterSpacing: "0.37px",
                lineHeight: "33px",
                marginBottom: 5

            }}
            >{props.nameCH}</h1>
            <h3
                style={{
                    fontFamily: "futura",
                    fontSize: 18,
                    letterSpacing: "0.28px",
                    textTransform: "capitalize"
                }}
            >{props.name}</h3>

        </div >
    )
}