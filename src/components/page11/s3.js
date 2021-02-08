import React, { useState, useEffect } from "react"
import { motion, useTransform, useAnimation, useMotionValue, useViewportScroll, useTapGesture } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"
import useInView from "react-cool-inview"

const smooth = [0.4, 0, 0, 1]
const flow = [0.4, 0, 0.2, 1]


export default function S3() {
    const scrollPosition = useWindowPosition()
    const size = useWindowSize()

    const { scrollY } = useViewportScroll()

    const borderWidth = useTransform(
        scrollY,
        [size.height * 2, size.height * 2.5],
        [0, 40]
    )


    // copy from somewhere else
    const [lastYPos, setLastYPos] = React.useState(0);

    const [shouldFixed, setShouldFixed] = useState(false)
    const [shouldGoBot, setShouldGoBot] = useState(false)
    const [shouldGoDeep, setShouldGoDeep] = useState(false)


    useEffect(() => {
        scrollY.onChange((v) => {
            console.log(v);

            if (v > size.height * 3) {
                setShouldFixed(true)
            } else {
                setShouldFixed(false)
            }

            if (v > size.height * 3.85 && v < size.height * 4.5) {
                setShouldGoBot(true)
                setShouldGoDeep(false)
            } else if (v > size.height * 4.5) {
                setShouldGoBot(false)
                setShouldGoDeep(true)
            } else {
                setShouldGoBot(false)
                setShouldGoDeep(false)
            }
        })
    }, []);


    return (
        <div className='s3'
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
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#F5F1EA',
                    borderColor: 'white',
                    borderStyle: 'solid',
                    borderWidth: borderWidth.current
                }}></motion.div>

            {/* 褐色背景 */}
            <motion.div
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#DDB06C'
                }}
                animate={{
                    backgroundColor: shouldGoDeep ? '#B6B2CF' : '#DDB06C'
                }}>

            </motion.div>
            {/* 紫色背景 */}
            <motion.div
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundColor: '#DDB06C'
                }}
                animate={{
                    backgroundColor: shouldGoDeep ? '#B6B2CF' : '#DDB06C'
                }}></motion.div>

            {/* 中间长方形*/}
            <motion.div className='tesss'
                style={{
                    width: "41.8vh",
                    height: "65.4vh",
                    borderRadius: 8,
                    backgroundColor: "white",
                    boxShadow: "0 20px 40px 0 rgba(0,0,0,0.50)",
                    position: shouldFixed ? 'fixed' : "absolute",
                    top: "calc((200vh + 65.4vh + (100vh - 65.4vh)/2) * -1)",
                    left: "50%",
                    x: "-50%",
                    y: shouldFixed ? size.height * 3 : scrollPosition,
                    scale: 1
                }}
                animate={
                    shouldGoBot ? 'moveToBot' : shouldGoDeep ? 'moveDeep' : 'normalScroll'
                }
                // animate={shouldGoBot ? 'moveToBot' : 'moveDeep'}
                variants={{
                    moveToBot: {
                        originY: 0,
                        scale: 2.1875,
                        y: size.height * 3.34,
                        transition: {
                            duration: .4,
                            ease: smooth
                        }
                    },
                    moveDeep: {
                        scale: 2.1875,
                        y: size.height * 3.6,
                        transition: {
                            duration: .4,
                            ease: smooth
                        }
                    },
                    normalScroll: {
                        scale: 1,
                        transition: {
                            duration: 0.4
                        }
                    },
                }}
            >

                <img src={require(`../../images/page11/cardchip.svg`)} alt="card-chip"
                    style={{
                        position: 'absolute',
                        width: '23.75%',
                        left: '30%',
                        top: '5%'
                    }} />
                <img src={require(`../../images/page11/payWaveIcon.svg`)} alt="paywave-icon"
                    style={{
                        position: 'absolute',
                        width: '16.875%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        bottom: '5%'
                    }} />
                <img src={require(`../../images/page11/visaLogo.svg`)} alt="visa-logo"
                    style={{
                        position: 'absolute',
                        width: '31.25%',
                        right: '8%',
                        top: '5%'
                    }} />
            </motion.div>
        </div >
    )
}
