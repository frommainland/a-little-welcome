import React, { useState, useEffect } from 'react';
import { motion, transform } from "framer-motion";
import './myfont.css';

export default function MarqueeA(props) {
    return (
        <motion.div
            style={{
                width: props.width,
                height: 270,
                paddingLeft: 5,
                fontFamily: "knockout",
                fontSize: 360,
                lineHeight: 0.8,
                overflow: "hidden",
                display: "inline-block",
                willChange: 'transform',
                color: 'white',
                willChange: 'transform'
            }}>
            {Array.from(Array(2), (e, i) => (
                <motion.div
                    style={{
                        willChange: "transform"
                    }}
                    animate={{
                        y: '-100%'
                    }}
                    transition={{
                        duration: props.time,
                        ease: "linear",
                        loop: Infinity,
                    }}
                >
                    {props.name} {props.name}
                </motion.div>
            ))}
        </motion.div>
    )
}