import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"
import NumberAnimate from "../components/page8/numberAnimate"
import BigCircle from '../components/page8/bigCircle'
import BigCircleStatic from '../components/page8/bigCircleStatic'
import CombinedCircle from "../components/page8/combinedCircle"


export default function Page8() {
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
                    }}
                >
                    <BigCircleStatic left='-2.3vw' top='-5vw' rotate={0} />
                    <BigCircleStatic left='25vw' top='2vw' rotate={0} />
                    <BigCircleStatic left='34.7vw' top='-2.3vw' rotate={15} />
                    <BigCircleStatic left='4vw' top='11.6vw' rotate={-19} />
                    <BigCircleStatic left='16.6vw' top='16.3vw' rotate={0} />
                    <BigCircle left='37.2vw' top='32.4vw' rotate={0} />
                    <BigCircleStatic left='44.4vw' top='11.6vw' rotate={20} />
                    <BigCircleStatic left='31.8vw' top='43.8vw' rotate={-19} />

                    {/* bigCircle和combinedcircle一起做动画导致页面变卡，所以只能中间一个圆圈做动画 */}
                    {/* <BigCircle left='12.8vw' top='2vw' rotate={3} />
                    <BigCircle left='25vw' top='2vw' rotate={0} />
                    <BigCircle left='34.7vw' top='-2.3vw' rotate={15} />
                    <BigCircle left='4vw' top='11.6vw' rotate={-19} />
                    <BigCircle left='16.6vw' top='16.3vw' rotate={0} />
                    <BigCircle left='37.2vw' top='32.4vw' rotate={0} />
                    <BigCircle left='44.4vw' top='11.6vw' rotate={20} />
                    <BigCircle left='31.8vw' top='43.8vw' rotate={-19} />
                    <CombinedCircle left='0.6vw' top='28.4vw' rotate={-60} />
                    <CombinedCircle left='18.1vw' top='32.4vw' rotate={-30} />
                    <CombinedCircle left='27.4vw' top='20.8vw' rotate={13} />
                    <CombinedCircle left='37.5vw' top='13.8vw' rotate={-5} /> */}
                    <motion.div style={{
                        background: 'rgba(185, 185, 185, .1)',
                        margin: '0 auto',
                        position: 'absolute',
                        zIndex: 2,
                        width: 'auto',
                        display: 'inline-block',
                        backdropFilter: 'blur(50px)',
                        borderRadius: '50vw',
                        textAlign: 'center',
                        top: '50%',
                        y: '-50%',
                        left: '50%',
                        x: '-50%',
                        lineHeight: 1.5
                    }}>
                        <p style={{
                            padding: 32,
                            color: 'white',
                            width: '50vw',
                            fontFamily: 'gt-washeim'
                        }}>
                            Visa Ready provides a path to providing secure payment functionality to cars, wearables, household appliances, retail environments, and cities.</p>
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}
