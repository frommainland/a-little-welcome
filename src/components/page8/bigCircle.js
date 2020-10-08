import React from "react"
import { motion } from "framer-motion"
import loadable from "@loadable/component"
const P5 = loadable(() => import("../page8/p5"))

export default function BigCircle(props) {
    // 只有一个圆圈时不需要随机开始时间
    // let rando = Math.floor(Math.random() * 8000)
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
            <P5 animateStartTime={0} />
        </motion.div>
    )
}