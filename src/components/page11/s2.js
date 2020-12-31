import React, { useState, useEffect } from "react"
import { motion, useTransform, useViewportScroll, useAnimation } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from '../useWindowSize'
import useWindowPosition from '../useWindowPos'


export default function S2() {

    // const scrollPosition = useWindowPosition()
    // const size = useWindowSize();

    // const { scrollY } = useViewportScroll()
    // const y = useTransform(
    //     scrollY,
    //     [0, 1],
    //     [0, 1],
    //     { clamp: false }
    // )

    const [offset, setOffset] = useState(0);

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);



    return (
        <div style={{
            position: 'relative',
            top: '200vh',
            height: '100vh',
            width: '100%',
            background: '#241F5D',
            overflow: 'hidden',
        }}>
            {/* 地图长方形测试,fixed */}
            <motion.div style={{
                width: '41.8vh',
                height: '65.4vh',
                borderRadius: 8,
                backgroundColor: 'yellow',
                boxShadow: '0 20px 40px 0 rgba(0,0,0,0.50)',
                position: 'absolute',
                top: 'calc((100vh + 65.4vh + (100vh - 65.4vh)/2) * -1)',
                left: '50%',
                x: '-50%',
                y: offset,
            }}>
            </motion.div>
        </div>
    )
}