import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import MarqueeStack_A from './marqueeStackA'
import MarqueeStack_B from './marqueeStackB'

export default function MarqueeFull() {
    return (
        <div>
            <motion.div
                style={{
                    color: 'white'
                }}
                animate={{
                    y: '-100%'
                }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    loop: Infinity
                }}
            >
                <MarqueeStack_A />
                <MarqueeStack_B />
                <MarqueeStack_A />
                <MarqueeStack_B />

            </motion.div>

            <motion.div
                style={{
                    color: 'white'
                }}
                animate={{
                    y: '-100%'
                }}
                transition={{
                    duration: 5,
                    ease: "linear",
                    loop: Infinity
                }}
            >
                <MarqueeStack_A />
                <MarqueeStack_B />
                <MarqueeStack_A />
                <MarqueeStack_B />

            </motion.div>
        </div>
    )
}