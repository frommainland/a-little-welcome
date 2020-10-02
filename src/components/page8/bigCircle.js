import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, AnimationFeature } from "framer-motion"
import loadable from "@loadable/component"
const P5 = loadable(() => import("../page8/p5"))

export default function BigCircle() {
    let rando = Math.floor(Math.random() * 8000)
    console.log(rando);
    return (
        <div style={{
            maxWidth: 'fit-content',
            height: 'auto',
            border: '1px solid #979797',
            display: 'inline-block'
        }}>
            <P5 animateStartTime={rando} />
        </div>
    )
}