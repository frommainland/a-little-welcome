import React, { useState, useEffect } from "react"
import { motion, useTransform, useAnimation } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"

import useInView from "react-cool-inview"

const smooth = [0.4, 0, 0, 1]
const flow = [0.4, 0, 0.2, 1]
const bouncy = [0.86, 0, 0.07, 1]
let trigger = false

function Trigger() {
    const { ref, inView } = useInView({
        unobserveOnEnter: true,
        // threshold: 0.25,
    })
    if (inView) {
        trigger = true
    }
    return (
        <div
            className="trigger"
            style={{
                width: "100vw",
                height: "0.01vh",
                position: "relative",
                top: 0,
            }}
            ref={ref}
        ></div>
    )
}

function Currency(props) {
    const size = useWindowSize()
    // console.log(trigger)
    return (
        <motion.img
            src={require(`../../images/page11/${props.name}.svg`)}
            style={{
                width: props.width,
                position: "absolute",
                x: props.left,
                y: size.height,
            }}
            animate={trigger ? "move" : "still"}
            variants={{
                move: {
                    y: [size.height, size.height / 2, -size.height * 0.09],
                    rotate: [0, 20, 200],
                    transition: {
                        duration: 10,
                        times: [0, 0.3, 1],
                        ease: [smooth, "easeIn"],
                        repeat: Infinity,
                        delay: props.delay,
                    },
                },
                still: { y: size.height },
            }}
        />
    )
}

function Currency2(props) {
    const size = useWindowSize()
    return (
        <motion.img
            src={require(`../../images/page11/${props.name}.svg`)}
            style={{
                width: props.width,
                position: "absolute",
                x: props.left,
                y: size.height * 0.6,
                scale: 0,
            }}
            animate={trigger ? "move" : "still"}
            variants={{
                move: {
                    y: [
                        size.height * 0.6,
                        size.height * 0.6,
                        -size.height * 0.09,
                    ],
                    rotate: [0, 10, 90],
                    scale: [0, 1.3, 1],
                    transition: {
                        duration: 6,
                        times: [0, 0.1, 1],
                        ease: ["backOut", flow],
                        repeat: Infinity,
                        delay: props.delay || 0,
                    },
                },
                still: { y: size.height * 0.6 },
            }}
        />
    )
}

export default function BgCircles() {
    const scrollPosition = useWindowPosition()
    return (
        <div>
            {/* 背景圆圈触发 */}
            <Trigger />
            <Currency name="dollar" left="10vw" width="9vh" delay={0} />
            <Currency2 name="riyal" left="16vw" width="6vh" delay={3} />
            <Currency name="rmb" left="27vw" width="8vh" delay={8} />
            <Currency name="lira" left="33vw" width="8vh" delay={9} />
            <Currency2 name="php" left="40vw" width="8vh" delay={2} />
            <Currency2 name="krw" left="5vw" width="6vh" delay={2} />
            <Currency2 name="krona" left="68vw" width="6vh" delay={5} />
            <Currency name="euro" left="86vw" width="9vh" delay={6} />
            <Currency2 name="pound" left="76vw" width="8vh" />
            <Currency name="rupee" left="80vw" width="8vh" delay={4} />
        </div>
    )
}
