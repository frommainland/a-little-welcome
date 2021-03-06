import React from "react"
import { motion } from "framer-motion"

export default function BigCircleStatic(props) {
    return (
        <motion.div style={{
            maxWidth: 'fit-content',
            height: 'auto',
            border: '1px solid #3D3D3D',
            position: 'absolute',
            x: props.left,
            y: props.top,
            rotate: props.rotate,
        }}>
            <div style={{
                width: '14vw',
                height: '14vw',
                border: '2vw solid #686868',
                borderRadius: '14vw'
            }}></div>
        </motion.div>
    )
}