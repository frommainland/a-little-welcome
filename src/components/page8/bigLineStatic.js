import React from "react"
import { motion } from "framer-motion"

export default function BigLineStatic(props) {
    return (
        <motion.div style={{
            width: '14vw',
            height: '14vw',
            border: '1px solid #3D3D3D',
            position: 'absolute',
            x: props.left,
            y: props.top,
            rotate: props.rotate,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <div style={{
                width: '2vw',
                height: '100%',
                background: '#686868'
            }}></div>
        </motion.div>
    )
}