import React from "react"

import Layout from "../components/layout"
import { motion } from "framer-motion"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"
import loadable from "@loadable/component"
const P5 = loadable(() => import("../components/page10/p5"))


export default function Page10() {
    return (
        <Layout>
            <div
                style={{
                    width: "100vw",
                    height: "100vh",
                    background: "black",
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
                </div>

                {/* 右侧文字区 */}

                <div
                    animate={{
                    }} v
                    style={{
                        gridColumn: "6 / 13",
                        position: 'relative',
                        overflow: 'hidden',
                        color: 'white'
                    }}
                >
                    <P5 />
                </div>
            </div>
        </Layout>
    )
}
