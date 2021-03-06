import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
// import useWindowSize from '../components/useWindowSize'
import ScriptText2 from "../components/page6/text2"
import ScriptText3 from "../components/page6/text3"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

export default function Page6() {
    let yellow = "#FFA61F"
    let black = "#000000"
    let red = "#EB1B0F"
    let blue = "#0053D0"

    const size = useWindowSize()
    const [current, setcurrent] = useState(0)

    //   useEffect(() => {
    //     const interval = setInterval(() => {
    //       if (current === 0) {
    //         setcurrent(1)
    //       } else {
    //         setcurrent(0)
    //       }
    //     }, 3500)
    //     return () => clearInterval(interval)
    //   })

    useEffect(() => {
        const time = setTimeout(() => {
            if (current === 0) {
                setcurrent(1)
            } else {
                setcurrent(0)
            }
        }, 2000)
        return () => clearTimeout(time)
    })

    // 三角形
    const trianges = []
    for (let index = 0; index < 2; index++) {
        let borderW =
            index > 0
                ? "calc(100vw/12*2) calc(100vw/12*2) 0 0"
                : "0 0 calc(100vw/12*2) calc(100vw/12*2)"
        let borderC =
            index > 0
                ? "black transparent transparent transparent"
                : "transparent transparent black transparent"
        trianges.push(
            <motion.div
                style={{
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: borderW,
                    borderColor: borderC,
                    position: "absolute",
                }}
                initial={{
                    x: (size.width / 12) * 2,
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: -(size.width / 12) * 2,
                }}
                transition={{
                    ease: [0.86, 0, 0.07, 1],
                    duration: 1.5,
                }}
                key={index}
            />
        )
    }

    // 长 长方形
    const longT = []
    for (let index = 0; index < 2; index++) {
        let color = index > 0 ? yellow : black
        longT.push(
            <motion.div
                style={{
                    height: "100vh",
                    width: (size.width / 12) * 2,
                    background: color,
                    position: "absolute",
                }}
                initial={{
                    y: "-100%",
                }}
                animate={{
                    y: 0,
                }}
                exit={{
                    y: "100%",
                }}
                transition={{
                    ease: [0.86, 0, 0.07, 1],
                    duration: 1.5,
                }}
                key={index}
            />
        )
    }

    // 短长方形
    const shortT = []
    for (let index = 0; index < 2; index++) {
        let color = index > 0 ? black : yellow
        shortT.push(
            <motion.div
                style={{
                    height: "calc(100vh - 100vw / 12 * 2)",
                    width: "calc(100vw/12 * 2)",
                    background: color,
                    position: "absolute",
                }}
                initial={{
                    x: "100%",
                }}
                animate={{
                    x: 0,
                }}
                exit={{
                    x: "-100%",
                }}
                transition={{
                    ease: [0.86, 0, 0.07, 1],
                    duration: 1.5,
                }}
                key={index}
            />
        )
    }

    return (
        <Layout>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: black,
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                }}
            >
                <LeftNav />

                {/* animate number wrap*/}
                <div
                    style={{
                        gridColumn: "2 / 6",
                        background: "white",
                        display: "grid",
                        gridAutoFlow: "row dense",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gridTemplateRows: "calc(100vw / 12 *2) auto",
                    }}
                >
                    {/* 1 三角形 */}
                    <div
                        style={{
                            gridColumn: "1 / 2",
                            height: "calc(100vw / 12 *2 )",
                            background: yellow,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <AnimatePresence>{trianges[current]}</AnimatePresence>
                    </div>

                    {/* 2 短长方形 */}
                    <div
                        style={{
                            gridColumn: "1 / 2",
                            height: "calc(100vh - 100vw / 12 *2)",
                            background: yellow,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <AnimatePresence>{shortT[current]}</AnimatePresence>
                    </div>

                    {/* 3 长长方形 */}
                    <div
                        style={{
                            gridColumn: "2 / 3",
                            height: "100vh",
                            background: yellow,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <AnimatePresence>{longT[current]}</AnimatePresence>
                    </div>
                </div>

                {/* 右侧文字区 */}
                <div
                    style={{
                        gridColumn: "6 / 13",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "auto",
                            height: "auto",
                            position: "fixed",
                            transform: "rotate(-90deg)",
                            marginLeft: -50,
                        }}
                    >
                        <ScriptText2 width={size.height * 0.75} />
                        <ScriptText3 width={size.height * 0.7} />
                    </div>
                    <div
                        style={{
                            width: "60%",
                            height: "auto",
                            display: "flex",
                            justifyContent: "space-between",
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "gt-washeim",
                                fontSize: "3vw",
                                color: "#9D9D9D",
                                textAlign: "center",
                                textTransform: "uppercase",
                                letterSpacing: 16,
                                lineHeight: 1.4,
                            }}
                        >
                            <h1>mobile</h1>
                            <h1>point</h1>
                            <h1>of</h1>
                            <h1>sale</h1>
                        </div>
                        <p
                            style={{
                                fontFamily: "gt-washeim-light",
                                fontSize: "1vw",
                                color: "#9D9D9D",
                                writingMode: "vertical-rl",
                                lineHeight: 1.4,
                                paddingTop: "2vw",
                                letterSpacing: 1.31,
                            }}
                        >
                            Opportunities for merchants
              <br />
              Benefits to technology partners
              <br />
              Growth for acquirers
            </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
