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
            className="flag-trigger"
            style={{
                width: 999,
                height: 0,
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
                left: `${startX}vw`,
                top: `${startY}vh`,
                border: "4px solid white",
                borderRadius: "4vw",
                boxShadow: "6px 6px 8px -6px rgb(0 0 0 / 15%)",
            }}
            animate={props.animations}
            transition={{
                duration: 0.1,
                ease: smooth,
            }}
            key={props.i}
            whileHover={{
                scale: 1.2,
                transition: {
                    duration: 0.3,
                    ease: smooth,
                },
            }}
            // animate={trigger ? "show" : "hide"}
            // variants={{
            //     show: {
            //         scale: 1,
            //         transition: {
            //             duration: 1,
            //             ease: flow,
            //         },
            //     },
            //     hide: {
            //         scale: 0,
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

    // 一次性创建12个useAnimation
    const animations = Array.from({ length: flagNum }, useAnimation)

    const parallaxScope = []

    for (let index = 0; index < flagNum; index++) {
        flags.push(
            <Flag
                x={randonStartXs[index]}
                y={randonStartYs[index]}
                i={index}
                img={img[index]}
                animations={animations[index]}
            />
        )
        parallaxScope.push(index < 4 ? 10 : 3 < index && index < 8 ? 15 : 35)
    }

    let offsetX = 0
    let offsetY = 0
    const areaRef = useRef()

    function handleMouse(event) {
        let rect = areaRef.current.getBoundingClientRect()
        offsetX = event.clientX - size.width / 2
        offsetY = event.clientY - size.height / 2
        for (let index = 0; index < flagNum; index++) {
            animations[index].start({
                x: offsetX / parallaxScope[index],
                y: offsetY / parallaxScope[index],
            })
        }
    }

    return (
        <motion.div
            className="flags"
            style={{
                position: "absolute",
                top: 0,
                width: "100vw",
                height: "100vh",
            }}
            ref={areaRef}
            onMouseMove={handleMouse}
        >
            {/* 背景国旗触发 */}
            <Trigger />
            {/* 国旗组 */}
            {flags}
        </motion.div>
    )
}
