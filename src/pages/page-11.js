import React from "react"

import Layout from "../components/layout"
import "../components/myfont.css"
import { motion } from "framer-motion"



//images links
import home1 from '../images/page11/home.jpg'
import arrow from '../images/page11/arrow-down.svg'
export default function Page11() {
    return (
        <Layout>
            <div>
                {/* page1 */}
                <div style={{
                    height: '100vh',
                    width: '100%',
                    background: `url(${home1})`,
                    backgroundSize: 'cover'
                }}>
                </div>
                <motion.div style={{
                    color: 'white',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    x: '-50%',
                    y: '-50%',
                    textAlign: 'center',
                    fontWeight: 900
                }}>
                    <h1 style={{
                        fontSize: 72,
                        marginBottom: 10
                    }}>Visa
                    <span style={{
                            fontWeight: 100,
                        }}> |</span> 心驰所向</h1>
                    <p style={{
                        fontSize: 30,
                    }}>随时随地，放心支付。</p>
                </motion.div >
                <motion.div style={{
                    height: 60,
                    width: 60,
                    borderRadius: 60,
                    border: '2px solid white',
                    position: 'absolute',
                    x: '-50%',
                    left: '50%',
                    bottom: 50,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <motion.div style={{
                        width: 24,
                        height: 24,
                        background: `url(${arrow})`,
                        backgroundSize: 'contain'
                    }}></motion.div>
                </motion.div>



                {/* page1 */}
                <div style={{
                    height: '100vh',
                    width: 'auto',
                    background: 'red'
                }}></div>
            </div>
        </Layout>
    )
}
