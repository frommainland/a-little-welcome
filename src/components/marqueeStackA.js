import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Marquee_innovate from './marquee_innovate'

export default function MarqueeStack_A() {
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
                <Marquee_innovate /><Marquee_innovate /><Marquee_innovate />
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
                }}>
                <Marquee_innovate /><Marquee_innovate /><Marquee_innovate />
            </motion.div>
        </div >
    )
}