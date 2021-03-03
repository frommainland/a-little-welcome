import React, { useState, useEffect } from "react"
import {
    motion,
    useTransform,
    useAnimation,
    useMotionValue,
    useViewportScroll,
} from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"
import useInView from "react-cool-inview"

export default function S4Title() {
    const string = Array.from("尽最大可能提供最安全的支付。")

    const containerVariant = {
        before: {},
        after: {
            transition: {
                staggerChildren: 0.06,
            },
        },
    }
    const textVariant = {
        before: {
            y: -50,
            opacity: 0,
        },
        after: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 16,
                stiffness: 200,
                // flip: Infinity,
            },
        },
    }

    const size = useWindowSize()
    const scrollPosition = useWindowPosition()
    const [shouldFixed, setShouldFixed] = useState(false)
    const [shouldGoBot, setShouldGoBot] = useState(false)
    const [shouldGoDeep, setShouldGoDeep] = useState(false)

    const [lastYPos, setLastYPos] = React.useState(0)
    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY
            if (yPos > size.height * 3) {
                setShouldFixed(true)
            } else {
                setShouldFixed(false)
            }

            if (yPos > size.height * 3.85 && yPos < size.height * 4.5) {
                setShouldGoBot(true)
                setShouldGoDeep(false)
            } else if (yPos > size.height * 4.5) {
                setShouldGoBot(false)
                setShouldGoDeep(true)
            } else {
                setShouldGoBot(false)
                setShouldGoDeep(false)
            }

            setLastYPos(yPos)
        }

        window.addEventListener("scroll", handleScroll, false)

        return () => {
            window.removeEventListener("scroll", handleScroll, false)
        }
    }, [lastYPos])

    return (
        <motion.div
            className="s4-title"
            style={{
                width: "70vw",
                // position:
                //     scrollPosition > size.height * 3.86 ? "fixed" : "absolute",
                top: "26vh",
                display: "inline-flex",
                justifyContent: "center",
            }}
            variants={containerVariant}
            initial="before"
            animate="after"
        >
            {string.map((item, i) => (
                <motion.div
                    style={{
                        fontSize: 60,
                        color: "#282725",
                        letterSpacing: 1.36,
                        textAlign: "center",
                        fontWeight: 700,
                    }}
                    key={`item${i}`}
                    variants={textVariant}
                >
                    {item === " " ? "\u00A0" : item}
                </motion.div>
            ))}
        </motion.div>
    )
}
