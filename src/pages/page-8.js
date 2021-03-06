import React from "react"

import Layout from "../components/layout"
import { motion } from "framer-motion"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"
import NumberAnimate from "../components/page8/numberAnimate"
import BigCircle from '../components/page8/bigCircle'
import BigCircleStatic from '../components/page8/bigCircleStatic'
import BigLineStatic from '../components/page8/bigLineStatic'
// import CombinedCircle from "../components/page8/combinedCircle"
import CombinedCircleStatic from "../components/page8/combinedCircleStatic"
import SmallDot from "../components/page8/smallDot"


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
                        overflow: 'hidden'
                    }}
                >
                    <BigCircleStatic left='-2.3vw' top='-5vw' rotate={0} />
                    <BigCircleStatic left='25vw' top='2vw' rotate={0} />
                    <BigCircleStatic left='34.7vw' top='-2.3vw' rotate={15} />
                    <BigCircleStatic left='16.6vw' top='16.3vw' rotate={0} />

                    <BigCircle left='37.2vw' top='32.4vw' rotate={0} />


                    <BigLineStatic left='4vw' top='11.6vw' rotate={-19} />
                    <BigLineStatic left='12.8vw' top='2vw' rotate={3} />
                    <BigLineStatic left='31.8vw' top='43.8vw' rotate={-19} />
                    <BigLineStatic left='44.4vw' top='11.6vw' rotate={20} />

                    <CombinedCircleStatic left='37.5vw' top='13.8vw' rotate={-5} />
                    <CombinedCircleStatic left='0.6vw' top='28.4vw' rotate={-60} />
                    <CombinedCircleStatic left='18.1vw' top='32.4vw' rotate={-30} />
                    <CombinedCircleStatic left='27.4vw' top='20.8vw' rotate={13} />

                    <SmallDot left='0.8vw' top="18.8vw" />
                    <SmallDot left='21.1vw' top="12.5vw" />
                    <SmallDot left='12.2vw' top="29.1vw" />
                    <SmallDot left='46.8vw' top="28.3vw" />
                    <SmallDot left='52vw' top="24.7vw" />
                    <SmallDot left='16vw' top="48.3vw" />
                    <SmallDot left='33.75vw' top="42.6vw" />
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
