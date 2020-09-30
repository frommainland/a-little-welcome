import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, AnimationFeature } from "framer-motion"
import "../../components/myfont.css"

const green = "#00C638"
const black = "black"

function Topleft() {
    const [i, setI] = useState(0)
    function renew() {
        setI(i + 1)
    }
    return (
        <div
            style={{
                gridColumn: "1 / 2",
                gridRow: "1/2",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AnimatePresence>
                <motion.div
                    style={{
                        height: "50%",
                        width: "100%",
                        background: green,
                        y: "-100%",
                        position: "absolute",
                    }}
                    animate={{
                        y: ["-100%", "0%", "100%"],
                    }}
                    transition={{
                        duration: 4,
                        delay: i === 0 ? 2 : 0,
                    }}
                    exit={{
                        y: "200%",
                        transition: {
                            duration: 2,
                        },
                    }}
                    key={i}
                    onAnimationComplete={renew}
                />
            </AnimatePresence>
        </div>
    )
}

function Topright() {
    const [a, setA] = useState(0)
    function renewA() {
        setA(a + 1)
    }
    const slash1 = [
        <motion.div
            style={{
                height: "100%",
                width: "76.6%",
                position: "absolute",
                background: a % 2 === 0 ? green : black,
                x: "13.2vw",
                skewX: -30,
            }}
            animate={{
                x: ["13.2vw", "7.6vw", "0vw", "-7.6vw"],
            }}
            transition={{
                duration: 6,
            }}
            exit={{
                x: "-13.2vw",
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
                width: "76.6%",
                position: "absolute",
                background: b % 2 === 0 ? black : green,
                x: "13.2vw",
                skewX: -30,
            }}
            animate={{
                x: ["13.2vw", "7.6vw", "0vw", "-7.6vw"],
            }}
            transition={{
                duration: 6,
                delay: b === 0 ? 2 : 0,
            }}
            exit={{
                x: "-13.2vw",
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
                width: "76.6%",
                position: "absolute",
                background: c % 2 === 0 ? green : black,
                x: "13.2vw",
                skewX: -30,
            }}
            animate={{
                x: ["13.2vw", "7.6vw", "0vw", "-7.6vw"],
            }}
            transition={{
                duration: 6,
                delay: c === 0 ? 4 : 0,
            }}
            exit={{
                x: "-13.2vw",
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
                gridRow: "1/2",
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

function Midleft() {
    const [i, setI] = useState(0)
    function renew() {
        setI(i + 1)
    }
    return (
        <div
            style={{
                gridColumn: "1 / 2",
                gridRow: "2/3",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AnimatePresence>
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        background: green,
                        x: '-100%',
                        y: '-100%',
                        position: 'absolute'
                    }}
                    animate={{
                        x: ['-100%', '0%', '100%'],
                        y: ['-100%', '0%', '100%']
                    }}
                    transition={{
                        duration: 4,
                    }}
                    exit={{
                        x: '200%',
                        y: '200%',
                        transition: {
                            duration: 2
                        }
                    }}
                    key={i}
                    onAnimationComplete={renew}
                />
            </AnimatePresence>
        </div>

    )
}

function Botleft() {
    const [a, setA] = useState(0)
    function renewA() {
        setA(a + 3)
    }
    const circleA = [
        <AnimatePresence>
            <motion.div
                style={{
                    width: '3.5vw',
                    height: '3.5vw',
                    background: a % 2 === 0 ? green : black,
                    borderRadius: '0 0 0 3.5vw',
                    originX: 1,
                    originY: 0,
                    position: 'absolute',
                    right: 0,
                }}
                initial={{
                    zIndex: a,
                    scale: 0
                }}
                animate={{
                    scale: [0, 1, 2.8, 4]
                }}
                transition={{
                    duration: 6
                }}
                exit={{
                    scale: 4,
                    transition: {
                        duration: 2
                    }
                }}
                key={a}
                onAnimationComplete={renewA}
            />
        </AnimatePresence>
    ]

    const [b, setB] = useState(1)
    function renewB() {
        setB(b + 3)
    }
    const circleB = [
        <AnimatePresence>
            <motion.div
                style={{
                    width: '3.5vw',
                    height: '3.5vw',
                    background: b % 2 !== 0 ? black : green,
                    borderRadius: '0 0 0 3.5vw',
                    originX: 1,
                    originY: 0,
                    position: 'absolute',
                    right: 0,
                }}
                initial={{
                    zIndex: b,
                    scale: 0
                }}
                animate={{
                    scale: [0, 1, 2.8, 4]
                }}
                transition={{
                    duration: 6,
                    delay: b === 1 ? 2 : 0
                }}
                exit={{
                    scale: 4,
                    transition: {
                        duration: 2
                    }
                }}
                key={b}
                onAnimationComplete={renewB}
            />
        </AnimatePresence>
    ]

    const [c, setC] = useState(2)
    function renewC() {
        setC(c + 3)
    }
    const circleC = [
        <AnimatePresence>
            <motion.div
                style={{
                    width: '3.5vw',
                    height: '3.5vw',
                    background: c % 2 === 0 ? green : black,
                    borderRadius: '0 0 0 3.5vw',
                    originX: 1,
                    originY: 0,
                    position: 'absolute',
                    right: 0,
                }}
                initial={{
                    zIndex: c,
                    scale: 0
                }}
                animate={{
                    scale: [0, 1, 2.8, 4]
                }}
                transition={{
                    duration: 6,
                    delay: c === 2 ? 4 : 0
                }}
                exit={{
                    scale: 4,
                    transition: {
                        duration: 2
                    }
                }}
                key={c}
                onAnimationComplete={renewC}
            />
        </AnimatePresence>
    ]



    return (
        <div style={{
            gridColumn: "1 / 2",
            gridRow: "3/4",
            position: "relative",
            overflow: "hidden",
        }}>
            {circleA}
            {circleB}
            {circleC}
        </div>
    )
}

function Botright() {


    const circleA = [
        <motion.div
            style={{
                width: '3.5vw',
                height: '7vw',
                borderBottomRightRadius: '7vw',
                borderTopRightRadius: '7vw',
                background: green,
                position: 'absolute',
                left: 0,
                top: '50%',
                y: '-50%',
                originX: 0
            }}
            initial={{
                scale: 0
            }}
            animate={{
                scale: [0, 1, 2.8, 5.2]
            }}
            transition={{
                duration: 6
            }}
        />
    ]
    return (
        <div style={{
            gridColumn: "2/3",
            gridRow: "2/4",
            position: "relative",
            overflow: "hidden",
        }}>
            {circleA}
        </div>
    )
}
export default function NumberAnimate() {
    return (
        <div
            style={{
                width: "20vw",
                height: "30vw",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "repeat(3, 1fr)",
            }}
        >
            <Topleft />
            <Topright />
            <Midleft />
            <Botleft />
            <Botright />
        </div>
    )
}
