import React, { useState, useEffect, useRef } from "react"
import {
    motion,
    useTransform,
    useAnimation,
    useMotionValue,
} from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useInView from "react-cool-inview"

const smooth = [0.4, 0, 0, 1]
const flow = [0.4, 0, 0.2, 1]
const bouncy = [0.86, 0, 0.07, 1]
let trigger = false

function Trigger() {
    const { ref, inView } = useInView()
    if (inView) {
        trigger = true
    } else {
        trigger = false
    }
    return (
        <div
            style={{
                width: 999,
                height: 5,
                backgroundColor: "yellow",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            ref={ref}
        ></div>
    )
}

function Flag(props) {
    const size = useWindowSize()
    let change = 1.3
    //translate tofixed to a number again by add +
    let startX = +((props.x / 1440) * 100).toFixed(0)
    let startY = +((props.y / 760) * 100).toFixed(2)
    let endX, endY
    if (startX <= 50) {
        endX = startX - (startX * change - startX)
    } else {
        endX = startX * change
    }

    if (startY <= 50) {
        endY = startY - (startY * change - startY)
    } else {
        endY = startY * change
    }

    return (
        <motion.img
            src={require(`../../images/page11/s3/${props.img}.svg`)}
            style={{
                width: "6.25vw",
                height: "6.25vw",
                position: "absolute",
                x: `${startX}vw`,
                y: `${startY}vh`,
                scale: 1,
                opacity: 1,
            }}
            key={props.i}
            // animate={trigger ? "move" : "test"}
            // variants={{
            //     move: {
            //         x: convertEndX,
            //         y: convertEndY,
            //         opacity: 1,
            //         scale: 1,
            //         transition: {
            //             duration: 1,
            //             ease: flow,
            //         },
            //     },
            //     test: {
            //         x: convertStartX,
            //         y: convertStartY,
            //         scale: 0,
            //         opacity: 0,
            //     },
            // }}
        />
    )
}

export default function Flags() {
    const size = useWindowSize()
    const flags = []
    const flagNum = 12
    const img = [
        "ge",
        "ar",
        "bi",
        "au",
        "ca",
        "us",
        "al",
        "cn",
        "ad",
        "cl",
        "br",
        "rw",
        "us",
    ]
    const randonStartXs = [
        170,
        240,
        220,
        530,
        420,
        470,
        910,
        960,
        970,
        1130,
        1100,
        1250,
    ]
    const randonStartYs = [
        60,
        360,
        550,
        40,
        180,
        390,
        500,
        540,
        200,
        130,
        410,
        550,
    ]

    for (let index = 0; index < flagNum; index++) {
        flags.push(
            <Flag
                x={randonStartXs[index]}
                y={randonStartYs[index]}
                i={index}
                img={img[index]}
            />
        )
    }

    // const x = useMotionValue(0)
    // const y = useMotionValue(0)

    // const moveY = useTransform(y, [0, size.height], [0, 10])
    // const moveX = useTransform(x, [0, size.width], [0, 10])

    const areaRef = useRef()

    // function handleMouse(event) {
    //     let rect = areaRef.current.getBoundingClientRect()
    //     x.set(event.clientX - rect.left)
    //     y.set(event.clientY - rect.top)
    //     console.log(event.pageX)
    // }
    function handleMouse(e) {
        let rect = areaRef.current.getBoundingClientRect()
        let x = e.clientX - rect.x
        let y = e.clientX - rect.y
        console.log(x, y)
    }
    // ref={areaRef}
    return (
        <motion.div>
            {/* 背景圆圈触发 */}
            <Trigger />
            {/* 圆圈组 */}
            {flags}
        </motion.div>
    )
}
