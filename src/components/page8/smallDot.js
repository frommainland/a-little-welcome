import React from "react"
import { motion } from "framer-motion"

export default function SmallDot(props) {
    return (
        <motion.div
            style={{
                width: '1.7vw',
                height: '1.7vw',
                background: '#D8D8D8',
                position: 'absolute',
                x: props.left,
                y: props.top,
                borderRadius: '1.7vw'
            }}
        />
    )
}