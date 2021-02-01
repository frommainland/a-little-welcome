import React, { useState, useEffect } from "react"
import { motion, useTransform, useAnimation, useMotionValue, useViewportScroll } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"
import useInView from "react-cool-inview"

const smooth = [0.4, 0, 0, 1]
const flow = [0.4, 0, 0.2, 1]


export default function S3() {
    const scrollPosition = useWindowPosition()
    const size = useWindowSize()

    const { scrollY } = useViewportScroll()

    const borderWidth = useTransform(
        scrollY,
        [size.height * 2, size.height * 2.5],
        [0, 40]
    )

    const scale = useTransform(
        scrollY,
        [size.height * 3, size.height * 4],
        [1, 2.1875]
    )

    const moveY = useTransform(
        scrollY,
        [0, size.height * 3, size.height * 4],
        [0, scrollPosition, scrollPosition + 600]
    )

    console.log(moveY.current);
    //圆圈背景触发
    let trigger = false
    const { ref, inView } = useInView({ unobserveOnEnter: true })
    if (inView) {
        trigger = true
    }

    return (
        <div className='s3'
            style={{
                position: "relative",
                top: "200vh",
                // height: "100vh",
                width: "100%",
                background: "#241F5D",
                overflow: "hidden",
            }}
        >

            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#F5F1EA',
                borderColor: 'white',
                borderStyle: 'solid',
                borderWidth: borderWidth.current

            }}></div>
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'green'
            }}></div>
            {/* 中间长方形,fixed */}
            <motion.div className='tesss'
                style={{
                    width: "41.8vh",
                    height: "65.4vh",
                    borderRadius: 8,
                    backgroundColor: "white",
                    boxShadow: "0 20px 40px 0 rgba(0,0,0,0.50)",
                    position: "absolute",
                    top: "calc((200vh + 65.4vh + (100vh - 65.4vh)/2) * -1)",
                    left: "50%",
                    x: "-50%",
                    y: moveY,
                    scale: scale
                }}
            ></motion.div>
        </div>
    )
}
