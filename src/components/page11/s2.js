import React, { useState, useEffect } from "react"
import {
    motion,
    useTransform,
    useAnimation,
    useViewportScroll,
} from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"
import BgCircles from "./s2-Circles"
import useInView from "react-cool-inview"

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
                hidden: { opacity: 0, y: 100 },
            }}
            style={{
                fontSize: 60,
                fontWeight: 400,
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
    return (
        <div
            className="s2"
            style={{
                position: "relative",
                top: "200vh",
                height: "100vh",
                width: "100%",
                background: "#241F5D",
                overflow: "hidden",
            }}
        >
            {/* 背景圆圈动画 */}
            <BgCircles />

            {/* 中间长方形,fixed */}
            <motion.div
                style={{
                    width: "41.8vh",
                    height: "65.4vh",
                    borderRadius: 8,
                    backgroundColor: "#241F5D",
                    boxShadow: "0 20px 40px 0 rgba(0,0,0,0.50)",
                    position: "relative",
                    top: "calc((100vh + 65.4vh + (100vh - 65.4vh)/2) * -1)",
                    left: "50%",
                    x: "-50%",
                    y: scrollPosition,
                }}
            ></motion.div>
            {/* 标题文字组 */}
            <motion.div
                style={{
                    position:
                        scrollPosition < size.height * 2 ? "absolute" : "fixed",
                    top: "50%",
                    left: "50%",
                    x: "-50%",
                    y: "-50%",
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
