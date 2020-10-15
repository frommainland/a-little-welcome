import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const red = "#FF0000"
const black = "black"

function Topleft() {
    const [a, setA] = useState(0)
    function renewA() {
        setA(a + 1)
    }
    const slash1 = [
        <motion.div
            style={{
                height: "100%",
                width: "80%",
                position: "absolute",
                background: a % 2 === 0 ? red : black,
                x: "20vw",
                skewX: -20,
            }}
            animate={{
                x: ["20vw", "12vw", "4vw", "-4vw"],
            }}
            transition={{
                duration: 6,
            }}
            exit={{
                x: "-12vw",
                transition: {
                    duration: 2,
                },
            }}
            key={a}
            onAnimationComplete={renewA}
        />,
    ]
    const [b, setB] = useState(0)
    function renewB() {
        setB(b + 1)
    }
    const slash2 = [
        <motion.div
            style={{
                height: "100%",
                width: "80%",
                position: "absolute",
                background: b % 2 === 0 ? black : red,
                x: "20vw",
                skewX: -20,
            }}
            animate={{
                x: ["20vw", "12vw", "4vw", "-4vw"],
            }}
            transition={{
                duration: 6,
                delay: b === 0 ? 2 : 0,
            }}
            exit={{
                x: "-12vw",
                transition: {
                    duration: 2,
                },
            }}
            key={b}
            onAnimationComplete={renewB}
        />,
    ]

    const [c, setC] = useState(0)
    function renewC() {
        setC(c + 1)
    }
    const slash3 = [
        <motion.div
            style={{
                height: "100%",
                width: "80%",
                position: "absolute",
                background: c % 2 === 0 ? red : black,
                x: "20vw",
                skewX: -20,
            }}
            animate={{
                x: ["20vw", "12vw", "4vw", "-4vw"],
            }}
            transition={{
                duration: 6,
                delay: c === 0 ? 4 : 0,
            }}
            exit={{
                x: "-12vw",
                transition: {
                    duration: 2,
                },
            }}
            key={c}
            onAnimationComplete={renewC}
        />
    ]
    return (
        <div
            style={{
                gridColumn: "1 / 2",
                gridRow: "1/3",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AnimatePresence>{slash1}</AnimatePresence>
            <AnimatePresence>{slash2}</AnimatePresence>
            <AnimatePresence>{slash3}</AnimatePresence>
        </div>
    )
}

function Topright() {
    const [a, setA] = useState(0)
    function renewA() {
        setA(a + 1)
    }
    const block = [
        <motion.div
            style={{
                height: "100%",
                width: "75%",
                position: "absolute",
                background: a % 2 === 0 ? red : 'green',
                x: "16vw",
            }}
            animate={{
                x: ['16vw', "8vw", "0vw"],
            }}
            transition={{
                duration: 4,
            }}
            exit={{
                x: "-8vw",
                transition: {
                    duration: 2,
                },
            }}
            key={a}
            onAnimationComplete={renewA}
        />,
    ]

    const [b, setB] = useState(0)
    function renewB() {
        setB(b + 1)
    }
    const block2 = [
        <motion.div
            style={{
                height: "100%",
                width: "75%",
                position: "absolute",
                background: b % 2 === 0 ? black : red,
                x: "16vw",
            }}
            animate={{
                x: ['16vw', "8vw", "0vw"],
            }}
            transition={{
                duration: 4,
                delay: b === 0 ? 2 : 0,
            }}
            exit={{
                x: "-8vw",
                transition: {
                    duration: 2,
                },
            }}
            key={b}
            onAnimationComplete={renewB}
        />,
    ]

    const [c, setC] = useState(0)
    function renewC() {
        setC(c + 1)
    }
    const block3 = [
        <motion.div
            style={{
                height: "100%",
                width: "75%",
                position: "absolute",
                background: c % 2 === 0 ? red : black,
                x: "16vw",
            }}
            animate={{
                x: ['16vw', "8vw", "0vw"],
            }}
            transition={{
                duration: 4,
                delay: c === 0 ? 4 : 0,
            }}
            exit={{
                x: "-8vw",
                transition: {
                    duration: 2,
                },
            }}
            key={c}
            onAnimationComplete={renewC}
        />,
    ]
    return (
        <div
            style={{
                gridColumn: "2 / 3",
                gridRow: "1/3",
                position: "relative",
                border: 'solid 1px white'
                // overflow: "hidden",
            }}
        >
            <AnimatePresence>{block}</AnimatePresence>
            <AnimatePresence>{block2}</AnimatePresence>
            <AnimatePresence>{block3}</AnimatePresence>

        </div>
    )
}

export default function NumberAnimate() {
    return (
        <div
            style={{
                width: "20.8vw",
                height: "31.25vw",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "repeat(3, 1fr)",
            }}
        >
            <Topleft />
            <Topright />
        </div>
    )
}
