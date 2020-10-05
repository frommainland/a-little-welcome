import React from "react"
import { motion } from "framer-motion"
import loadable from "@loadable/component"
const P5 = loadable(() => import("../page8/p5"))

export default function BigCircle(props) {
    let rando = Math.floor(Math.random() * 8000)
    // console.log(rando);
    return (
        <motion.div style={{
            maxWidth: 'fit-content',
            height: 'auto',
            border: '1px solid #3D3D3D',
            position: 'absolute',
            x: props.left,
            y: props.top,
            rotate: props.rotate,
            zIndex: 1
        }}>
            <P5 animateStartTime={rando} />
        </motion.div>
    )
}