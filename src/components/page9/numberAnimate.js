import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const red = "#FF0000"
const black = "black"
// const easeAnim = [.4, 0, 0, 1]
const easeAnim = [0.4, 0, 0.2, 1]
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

function Slash(props) {
    return (
        <motion.div
            style={{
                width: 'auto',
                height: '100%',
                whiteSpace: 'nowrap',
                display: 'inline-block'
            }}
            animate={{
                x: ['-12.5%', '-37.5%', '-62.5%', '-87.5%', '-112.5%']
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: easeAnim
            }}
        >
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: black,
                    // marginLeft: props.num === 1 ? '4.1vw' : 0
                }}>
            </motion.div>
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: red
                }}>
            </motion.div>
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: black
                }}>
            </motion.div>
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: red
                }}>
            </motion.div>
        </motion.div>
    )
}

function SlashAll() {
    return (
        <div style={{
            gridColumn: "1 / 2",
            gridRow: "1/3",
            position: "relative",
            whiteSpace: 'nowrap',
            overflow: "hidden",
        }}>
            <Slash />
            <Slash />
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
            <SlashAll />
        </div>
    )
}
