import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"
import Number2Top from "../components/page7/number2top"
import Number2Mid from "../components/page7/number2mid"
import Number2Bot from "../components/page7/number2bot"
import BallGrid from "../components/page7/ball"

export default function Page7() {
    let yellow = "#FFA61F"
    let black = "#000000"
    let red = "#EB1B0F"
    let blue = "#0053D0"

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
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "27vw",
                            height: "44vw",
                            border: "1px solid #0053D0",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Number2Top />
                        <Number2Mid />
                        <Number2Bot />
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
                    <BallGrid />
                </div>
            </div>
        </Layout>
    )
}
