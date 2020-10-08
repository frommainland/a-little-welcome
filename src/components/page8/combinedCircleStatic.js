import React from "react"
import { motion } from "framer-motion"

export default function CombinedCircleStatic(props) {
    return (
        <motion.div style={{
            position: 'relative',
            width: 'auto',
            height: '19vw',
            position: 'absolute',
            x: props.left,
            y: props.top,
            rotate: props.rotate,
            zIndex: 1
        }}>
            <motion.div style={{
                width: '8.3vw',
                height: '8.3vw',
                border: '1px solid #3D3D3D',
                position: 'absolute',
                left: '50%',
                x: '-50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '100%',
                    height: '2vw',
                    background: '#686868'
                }} />
            </motion.div>
            <motion.div style={{
                width: '14vw',
                height: '14vw',
                rotate: 90,
                border: '1px solid #3D3D3D',
                position: 'absolute',
                left: '50%',
                x: '-50%',
                top: '5.2vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '100%',
                    height: '2vw',
                    background: '#686868'
                }} />
            </motion.div>
        </motion.div >
    )
}