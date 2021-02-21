import React, { useState, useEffect } from "react"
import {
    motion,
    useTransform,
    useAnimation,
    useMotionValue,
    useViewportScroll,
    useTapGesture,
} from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"
import useInView from "react-cool-inview"
import Flags from "./s3-flags"
const smooth = [0.4, 0, 0, 1]
const flow = [0.4, 0, 0.2, 1]

function SmallCap(props) {
    const [enter, setEnter] = useState(false)
    const [leave, setLeave] = useState(false)
    const {
        ref,
        scrollDirection: { vertical },
    } = useInView({
        onEnter: () => {
            setEnter(true)
            setLeave(false)
        },
        onLeave: () => {
            setLeave(true)
            setEnter(false)
        },
        rootMargin: "-100px 0px",
    })

    return (
        <motion.div
            ref={ref}
            animate={leave && vertical === "down" ? "hidden" : "visible"}
            style={{
                fontSize: 30,
                fontWeight: 100,
                color: "black",
                letterSpacing: -0.23,
                textAlign: "center",
                marginBottom: props.bottom,
            }}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: smooth },
                },
                hidden: {
                    opacity: 0,
                    y: 100,
                },
            }}
        >
            {`${props.content}`}
        </motion.div>
    )
}

function Title(props) {
    const [enter, setEnter] = useState(false)
    const [leave, setLeave] = useState(false)

    const {
        ref,
        scrollDirection: { vertical },
    } = useInView({
        onEnter: () => {
            setEnter(true)
            setLeave(false)
        },
        onLeave: () => {
            setLeave(true)
            setEnter(false)
        },
        rootMargin: "-100px 0px",
    })

    return (
        <motion.div
            ref={ref}
            animate={leave && vertical === "down" ? "hidden" : "visible"}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: smooth },
                },
                hidden: {
                    opacity: 0,
                    y: 100,
                    transition: { duration: 0, ease: smooth },
                },
            }}
            style={{
                fontSize: 60,
                fontWeight: 400,
                color: "black",
                letterSpacing: -0.46,
                textAlign: "center",
            }}
        >
            {`${props.content}`}
        </motion.div>
    )
}

export default function S3() {
    const scrollPosition = useWindowPosition()
    const size = useWindowSize()

    const { scrollY } = useViewportScroll()

    const borderWidth = useTransform(
        scrollY,
        [size.height * 2, size.height * 2.5],
        [0, 40]
    )

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

    //有时不好用，暂时找不到原因
    // useEffect(() => {
    //     const scrollHandle = scrollY.onChange(value => {
    //         if (value > size.height * 3) {
    //             setShouldFixed(true)
    //         } else {
    //             setShouldFixed(false)
    //         }

    //         if (value > size.height * 3.85 && value < size.height * 4.5) {
    //             setShouldGoBot(true)
    //             setShouldGoDeep(false)
    //         } else if (value > size.height * 4.5) {
    //             setShouldGoBot(false)
    //             setShouldGoDeep(true)
    //         } else {
    //             setShouldGoBot(false)
    //             setShouldGoDeep(false)
    //         }
    //     })
    //     return () => {
    //         scrollHandle()
    //     }
    // }, [])

    // s3文案opacity
    const s3TextOpacity = useTransform(
        scrollY,
        [0, size.height * 3, size.height * 3.2],
        [1, 1, 0]
    )
    return (
        <div
            className="s3"
            style={{
                position: "relative",
                top: "200vh",
                // height: "100vh",
                width: "100%",
                background: "#241F5D",
                overflow: "hidden",
            }}
        >
            {/* 米色背景 */}
            <motion.div
                className="beigeBg"
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#F5F1EA",
                    borderColor: "white",
                    borderStyle: "solid",
                    borderWidth: borderWidth.current,
                }}
            ></motion.div>
            <Flags />

            {/* 褐色背景 */}
            <motion.div
                className="brownBg"
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#DDB06C",
                }}
                animate={{
                    backgroundColor: shouldGoDeep ? "#B6B2CF" : "#DDB06C",
                }}
            ></motion.div>

            {/* 紫色背景 */}
            <motion.div
                className="purpleBg"
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#DDB06C",
                }}
                animate={{
                    backgroundColor: shouldGoDeep ? "#B6B2CF" : "#DDB06C",
                }}
            ></motion.div>

            {/* 紫色背景 */}
            <motion.div
                style={{
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#B6B2CF",
                }}
                animate={{
                    backgroundColor: shouldGoDeep ? "#EDDC71" : "#B6B2CF",
                }}
            ></motion.div>

            {/* 中间长方形*/}
            <motion.div
                className="tesss"
                style={{
                    width: "41.8vh",
                    height: "65.4vh",
                    borderRadius: 8,
                    backgroundColor: "white",
                    boxShadow: "0 20px 40px 0 rgba(0,0,0,0.50)",
                    position: shouldFixed ? "fixed" : "absolute",
                    top: "calc((200vh + 65.4vh + (100vh - 65.4vh)/2) * -1)",
                    left: "50%",
                    x: "-50%",
                    y: shouldFixed ? size.height * 3 : scrollPosition,
                    scale: 1,
                    pointerEvents: "none",
                }}
                animate={
                    shouldGoBot
                        ? "moveToBot"
                        : shouldGoDeep
                        ? "moveDeep"
                        : "normalScroll"
                }
                variants={{
                    moveToBot: {
                        originY: 0,
                        scale: 2.1875,
                        y: size.height * 3.34,
                        transition: {
                            duration: 0.4,
                            ease: smooth,
                        },
                    },
                    moveDeep: {
                        scale: 2.1875,
                        y: size.height * 3.6,
                        transition: {
                            duration: 0.4,
                            ease: smooth,
                        },
                    },
                    normalScroll: {
                        scale: 1,
                        transition: {
                            duration: 0.4,
                        },
                    },
                }}
            >
                <img
                    src={require(`../../images/page11/cardchip.svg`)}
                    alt="card-chip"
                    style={{
                        position: "absolute",
                        width: "23.75%",
                        left: "30%",
                        top: "5%",
                    }}
                />
                <img
                    src={require(`../../images/page11/payWaveIcon.svg`)}
                    alt="paywave-icon"
                    style={{
                        position: "absolute",
                        width: "16.875%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        bottom: "5%",
                    }}
                />
                <img
                    src={require(`../../images/page11/visaLogo.svg`)}
                    alt="visa-logo"
                    style={{
                        position: "absolute",
                        width: "31.25%",
                        right: "8%",
                        top: "5%",
                    }}
                />
            </motion.div>
            {/* 米色背景文案 */}
            <motion.div
                style={{
                    position: "absolute",
                    top: size.height / 2,
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    width: "80%",
                    pointerEvents: "none",
                    opacity: s3TextOpacity,
                }}
            >
                <SmallCap
                    content="无论是在街头摆摊的巴西小贩，还是要支付儿女学费的卢旺达渔民。"
                    bottom={24}
                />
                <Title content="在所有地方，面向所有人。" />
            </motion.div>
        </div>
    )
}
