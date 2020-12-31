import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import "../components/myfont.css"
import { motion, useViewportScroll, useTransform } from "framer-motion";
import useWindowSize from '../components/useWindowSize'
import S1 from '../components/page11/s1'
import S2 from '../components/page11/s2'
//images links
import home1 from '../images/page11/home.jpg'
import arrow from '../images/page11/arrow-down.svg'



export default function Page11() {

    const size = useWindowSize();

    const { scrollYProgress, scrollY } = useViewportScroll();
    const [currentY, setCurrentY] = React.useState(0);

    React.useEffect(() => {
        const unsubscribeY = scrollY.onChange((value) =>
            setCurrentY(Math.round(value))
        );
        return () => {
            unsubscribeY();
        };
    }, []);


    return (
        <Layout>
            {/* 显示一个页面高度和scrollY 发布后删除 */}
            <div>
                <div style={{
                    position: 'fixed',
                    left: 10,
                    top: 10,
                    width: 150,
                    height: 30,
                    backgroundColor: 'white',
                    color: 'black',
                    zIndex: 100
                }}>
                    {`window height ${size.height}`}
                </div>

                <div style={{
                    position: 'fixed',
                    left: 10,
                    top: 50,
                    width: 150,
                    height: 30,
                    backgroundColor: 'white',
                    color: 'black',
                    zIndex: 100
                }}>
                    {`scrollY ${currentY}`}
                </div>
            </div>

            <S1 />
            <S2 />
            <div style={{
                top: '200vh',
                height: '100vh',
                width: '100%',
                background: 'green',
                position: 'relative'
            }}></div>

        </Layout>
    )
}
