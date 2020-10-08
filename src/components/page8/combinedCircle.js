import React from "react"
import { motion } from "framer-motion"
import loadable from "@loadable/component"
const P5small = loadable(() => import("./p5small"))
const P5 = loadable(() => import("./p5"))

export default function CombinedCircle(props) {
    // 只有一个圆圈时不需要随机开始时间
    // let rando = Math.floor(Math.random() * 8000)
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
                maxWidth: 'fit-content',
                height: 'auto',
                border: '1px solid #3D3D3D',
                position: 'absolute',
                left: '50%',
                x: '-50%'
            }}>
                <P5small animateStartTime={0} />
            </motion.div>
            <motion.div style={{
                maxWidth: 'fit-content',
                height: 'auto',
                rotate: 90,
                border: '1px solid #3D3D3D',
                position: 'absolute',
                left: '50%',
                x: '-50%',
                top: '3.5vw'
            }}>
                <P5 animateStartTime={0} />
            </motion.div>
        </motion.div>
    )
}