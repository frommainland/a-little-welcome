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
    const [shouldShowActions, setShouldShowActions] = React.useState(false);
    const [shouldFixed, setShouldFixed] = useState(false)
    const [shouldGoBot, setShouldGoBot] = useState(false)

    React.useEffect(() => {
        function handleScroll() {
            const yPos = window.scrollY;
            const threshold = window.scrollY > size.height * 3;
            const threshold2 = window.scrollY > size.height * 3.75;

            setShouldFixed(threshold);
            setShouldGoBot(threshold2);
            setLastYPos(yPos);
        }

        window.addEventListener("scroll", handleScroll, false);

        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [lastYPos]);


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
            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: '#DDB06C'
            }}></div>

            <div style={{
                width: '100vw',
                height: '100vh',
                backgroundColor: 'red'
            }}></div>

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
                    y: shouldFixed ? size.height * 3 : scrollPosition
                }}
                animate={shouldGoBot ? 'moveToBot' : 'normalScroll'}
                variants={{
                    moveToBot: {
                        originY: 0,
                        scale: 2.1875,
                        y: size.height * 3.34,
                        transition: {
                            duration: 1
                        }
                    },
                    normalScroll: {
                        scale: 1,
                        transition: {
                            duration: 0.4
                        }
                    }
                }}
            >
                <motion.div
                    style={{
                        width: 200,
                        height: 200,
                        backgroundColor: 'red'
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: shouldShowActions ? 1 : 0 }}
                    transition={{ opacity: { duration: 0.2 } }}
                ></motion.div>
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
