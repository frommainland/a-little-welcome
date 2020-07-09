import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import './myfont.css';

export default function MarqueeB(props) {
    return (
        <motion.div
            style={{
                position: 'relative',
                width: props.width,
                height: 270,
                paddingLeft: 5,
                fontFamily: "knockout",
                fontSize: 360,
                lineHeight: 0.8,
                overflow: "hidden",
                display: "inline-block",
                willChange: 'transform',
                color: '#F9AD00',
                willChange: 'transform'
            }}>
            <motion.div
                style={{
                    transform: 'translateY(-100%)',
                    willChange: "transform"
                }}
                animate={{
                    y: '0%'
                }}
                transition={{
                    duration: props.time,
                    ease: "linear",
                    loop: Infinity,
                }}
            >
                {props.name} {props.name}
            </motion.div>
            <motion.div
                style={{
                    transform: 'translateY(-100%)'
                }}
                animate={{
                    y: '0%'
                }}
                transition={{
                    duration: props.time,
                    ease: "linear",
                    loop: Infinity,
                }}
            >
                {props.name} {props.name}
            </motion.div>
        </motion.div>
    )
}