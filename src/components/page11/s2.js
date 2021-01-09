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

import { useInView } from "react-intersection-observer"
const smooth = [0.4, 0, 0, 1]

function SmallCap(props) {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            style={{
                // position: "relative",
                fontSize: 30,
                color: "#FFFFFF",
                letterSpacing: -0.23,
                textAlign: "center",
                marginBottom: props.bottom,
                marginTop: props.top,
            }}
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: smooth },
                },
                hidden: { opacity: 0, y: 100 },
            }}
        >
            {`${props.content}`}
        </motion.div>
    )
}

function Title(props) {
    const controls = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            controls.start("visible")
        } else {
            controls.start("hidden")
        }
    }, [controls, inView])

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 1, ease: smooth },
                },
                hidden: { opacity: 0, y: 100 },
            }}
            style={{
                fontSize: 60,
                color: "#FFFFFF",
                letterSpacing: -0.46,
                textAlign: "center",
            }}
        >
            {`${props.content}`}
        </motion.div>
    )
}

export default function S2() {
    const scrollPosition = useWindowPosition()
    const size = useWindowSize()

    const { scrollY } = useViewportScroll()

    return (
        <div
            style={{
                position: "relative",
                top: "200vh",
                height: "100vh",
                width: "100%",
                background: "#241F5D",
                overflow: "hidden",
            }}
        >
            {/* 中间长方形,fixed */}
            <motion.div
                style={{
                    width: "41.8vh",
                    height: "65.4vh",
                    borderRadius: 8,
                    backgroundColor: "#241F5D",
                    boxShadow: "0 20px 40px 0 rgba(0,0,0,0.50)",
                    position: "absolute",
                    top: "calc((100vh + 65.4vh + (100vh - 65.4vh)/2) * -1)",
                    left: "50%",
                    x: "-50%",
                    y: scrollY,
                }}
            ></motion.div>

            <motion.div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    // y: "-50%",
                    y: scrollY > size.height * 2 ? scrollY : "-50%",
                    width: "80%",
                }}
            >
                <SmallCap content="我们的愿景" bottom={24} />
                <Title content="成为最佳的支付和付款方式。" />
                <SmallCap
                    content="我们的业务使消费者、企业、银行和政府能够"
                    top={98}
                    bottom={24}
                />
                <Title content="享受到便利的数字支付服务。" />
            </motion.div>
        </div>
    )
}
