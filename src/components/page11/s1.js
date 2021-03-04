import React, { useState, useEffect } from "react"
import {
    motion,
    useTransform,
    useViewportScroll,
    useAnimation,
} from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"

import home1 from "../../images/page11/home.jpg"
import s1Left from "../../images/page11/s1BoxLeft.jpg"
import s1Right from "../../images/page11/s1BoxRight.jpg"
import s1MidMask from "../../images/page11/s1MidMask.svg"
import arrow from "../../images/page11/arrow-down.svg"

export default function S1() {
    const smooth = [0.4, 0, 0, 1]

    const scrollPosition = useWindowPosition()
    const animation = useAnimation()
    const wrapAnim = useAnimation()
    useEffect(() => {
        if (scrollPosition > 20) {
            animation.start("down")
            wrapAnim.start({ scale: 0, transition: { duration: 1 } })
        } else {
            animation.start("upDown")
            wrapAnim.start({ scale: 1 })
        }
    }, [animation, scrollPosition])

    const { scrollY } = useViewportScroll()

    const size = useWindowSize()
    const fadeOut = useTransform(scrollY, [0, size.height / 2], [1, 0])

    const textScale = useTransform(scrollY, [0, size.height / 2], [1, 0.6])

    const boxShadow1 = useTransform(
        scrollY,
        [0, size.height],
        [
            "drop-shadow(0px 0px 0px rgba(0,0,0,0.0))",
            "drop-shadow(0px 4px 8px rgba(0,0,0,0.5))",
        ]
    )

    const boxScale = useTransform(scrollY, [0, size.height / 3], [1, 1.05])

    // 2个mask盒子参数

    const s1BoxOpacity = useTransform(scrollY, [0, size.height / 2], [0, 1])

    //左边mask盒子

    //calc(-23vh) 就是-23vh就是盒子高度的一半，一般情况下居中写成y:-50%,但是百分比transform之后不能每滚一次速度变化不能同步
    const s1BoxLeftY = useTransform(
        scrollY,
        [-size.height, size.height, size.height + 1],
        ["calc(-23vh - 1px)", "calc(-23vh - 0px)", "calc(-23vh - 1px)"],
        { clamp: false }
    )

    const s1BoxclipLeft = useTransform(
        scrollY,
        [0, size.height / 2],
        ["inset(0% 100% 0% 0% round 0px)", "inset(0% 0% 0% 0% round 10px)"]
    )

    const s1BoxShadow = useTransform(
        scrollY,
        [0, size.height / 2],
        [
            "drop-shadow(0 0px 0px rgba(0,19,80,0.0))",
            "drop-shadow(0 10px 20px rgba(0,19,80,0.5))",
        ]
    )
    const moveX = useTransform(scrollY, [0, size.height / 2], ["0%", "100%"])

    //右边mask盒子
    const s1BoxRightY = useTransform(
        scrollY,
        [-size.height, size.height, size.height + 1],
        ["calc(-15vh - 1px)", "calc(-15vh - 0px)", "calc(-15vh - 2px)"],
        { clamp: false }
    )

    const s1BoxclipRight = useTransform(
        scrollY,
        [0, size.height / 2],
        ["inset(0% 0% 0% 100% round 0px)", "inset(0% 0% 0% 0% round 10px)"]
    )

    return (
        <div>
            {/* 背景大图 */}
            <motion.div
                style={{
                    height: "100vh",
                    width: "100vw",
                    maxWidth: "100%",
                    background: `url(${home1})`,
                    backgroundSize: "cover",
                    opacity: fadeOut,
                    position: "fixed",
                }}
            ></motion.div>

            {/* 测试 */}
            <motion.div
                style={{
                    width: 200,
                    height: 200,
                    backgroundColor: "green",
                    position: "fixed",
                    right: 0,
                }}
                initial="small"
                animate={animation}
                variants={{
                    big: { opacity: 1, x: 0 },
                    small: { opacity: 0, x: 300 },
                }}
            />

            {/* mask中间方块 */}
            <motion.div
                style={{
                    height: "100vh",
                    width: "100vw",
                    maxWidth: "100%",
                    filter: boxShadow1,
                    position: "fixed",
                }}
            >
                <motion.div
                    style={{
                        height: "100%",
                        width: "100%",
                        background: `url(${home1})`,
                        backgroundSize: "cover",
                        maskImage: `url(${s1MidMask})`,
                        maskSize: "39.8vh auto",
                        maskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskImage: `url(${s1MidMask})`,
                        WebkitMaskSize: "39.8vh auto",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        scale: boxScale,
                    }}
                ></motion.div>
            </motion.div>
            {/* mask左边方块 */}
            <motion.div
                style={{
                    filter: s1BoxShadow,
                    width: "34vh",
                    height: "47vh",
                    position: "fixed",
                    top: "50%",
                    y: s1BoxLeftY,
                    left: "25vw",
                }}
            >
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${s1Left})`,
                        backgroundSize: "150% auto",
                        opacity: s1BoxOpacity,
                        clipPath: s1BoxclipLeft,
                        backgroundPosition: `${moveX.current} 50%`,
                    }}
                ></motion.div>
            </motion.div>

            {/* mask右边方块 */}
            <motion.div
                style={{
                    filter: s1BoxShadow,
                    width: "47vh",
                    height: "30vh",
                    position: "fixed",
                    top: "50%",
                    y: s1BoxRightY,
                    right: "16vw",
                }}
            >
                <motion.div
                    style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${s1Right})`,
                        backgroundSize: "120% auto",
                        opacity: s1BoxOpacity,
                        clipPath: s1BoxclipRight,
                        backgroundPosition: `${moveX.current} 50%`,
                    }}
                />
            </motion.div>

            {/* 文字标题 */}
            <motion.div
                style={{
                    color: "white",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
                    textAlign: "center",
                    fontWeight: 900,
                    scale: textScale,
                    position: "fixed",
                }}
            >
                <h1
                    style={{
                        fontSize: 72,
                        marginBottom: 10,
                    }}
                >
                    Visa
                    <span
                        style={{
                            fontWeight: 100,
                        }}
                    >
                        {" "}
                        |
                    </span>{" "}
                    心驰所向
                </h1>
                <p
                    style={{
                        fontSize: 30,
                    }}
                >
                    随时随地，放心支付。
                </p>
            </motion.div>

            {/* 箭头wrap */}
            <motion.div
                style={{
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                    border: "2px solid white",
                    position: "absolute",
                    x: "-50%",
                    left: "50%",
                    bottom: 50,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    position: "fixed",
                }}
                animate={wrapAnim}
            >
                {/* 箭头 */}
                <motion.div
                    style={{
                        width: 24,
                        height: 24,
                        marginTop: -50,
                        background: `url(${arrow})`,
                        backgroundSize: "contain",
                    }}
                    variants={{
                        upDown: {
                            y: 50,
                            transition: {
                                repeat: Infinity,
                                repeatType: "mirror",
                                ease: smooth,
                                duration: 2,
                            },
                        },
                        down: { y: [0, 100] },
                    }}
                    animate={animation}
                />
            </motion.div>
        </div>
    )
}
