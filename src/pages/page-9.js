import React from "react"

import Layout from "../components/layout"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"
import Title from '../components/page9/title'
import BodyText from '../components/page9/bodytext'
import NumberAnimate from '../components/page9/numberAnimate'


export default function Page9() {
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
                    <NumberAnimate />
                </div>

                {/* 右侧文字区 */}

                <div
                    style={{
                        gridColumn: "6 / 13",
                        position: 'relative',
                        overflow: 'hidden',
                        color: 'white'
                    }}
                >
                    <Title />
                    <Title />
                    <BodyText />
                </div>
            </div>
        </Layout>
    )
}
