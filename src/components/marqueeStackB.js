import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Marquee_withvisa from './marquee_withvisa';

export default function MarqueeStack_B() {
    return (
        <div style={{
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            marginBottom: 30
        }}>
            <motion.div
                style={{
                    display: 'inline-block'
                }}
                animate={{
                    x: '-100%'
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    loop: Infinity
                }}
            >
                <Marquee_withvisa /><Marquee_withvisa /><Marquee_withvisa />
            </motion.div>
            <motion.div
                style={{
                    display: 'inline-block'
                }}
                animate={{
                    x: '-100%'
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    loop: Infinity
                }}
            >
                <Marquee_withvisa /><Marquee_withvisa /><Marquee_withvisa />
            </motion.div>
        </div>

    )
    // return (
    //     <div style={{
    //         whiteSpace: 'nowrap',
    //         overflow: 'hidden'
    //     }}>
    //         <motion.div
    //             style={{
    //                 display: 'inline-block'
    //             }}
    //             animate={{
    //                 x: '-100%'
    //             }}
    //             transition={{
    //                 duration: 20,
    //                 ease: "linear",
    //                 loop: Infinity
    //             }}
    //         >
    //             <marquee_withvisa /><marquee_withvisa />
    //         </motion.div>

    //         <motion.div
    //             style={{
    //                 display: 'inline-block'
    //             }}
    //             animate={{
    //                 x: '-100%'
    //             }}
    //             transition={{
    //                 duration: 20,
    //                 ease: "linear",
    //                 loop: Infinity
    //             }}>
    //             <marquee_withvisa /><marquee_withvisa />
    //         </motion.div>
    //     </div >
    // )
}