import React, { Component } from "react";
import styles from './page-3.module.scss'
import { motion } from "framer-motion"

//color
const colors = ["#EB1B0F", '#0053D0', '#FFA61F', '#12AB47', '#666666', '#ffffff', '#000000']
//curve
const ease = [0.430, 0.195, 0.020, 1.000]
const easeout = [0.4, 0, 0.2, 1]
const smooth = [0.4, 0, 0, 1]
const flow = [0.86, 0, 0.07, 1]
const bouncy = [0.86, 0, 0.07, 1]

const curves = [ease, easeout, smooth, flow, bouncy]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function randomColor() {
    let num = getRandomInt(0, 7);
    return colors[num]
}

function randomCurve() {
    let num = getRandomInt(0, 5)
    return curves[num]
}

function randomDirection() {
    let directions = ["100%", '200%', '150%', '250%']
    let num = getRandomInt(0, 4)
    return directions[num]
}

export default function PillP3() {
    let randomHeight = getRandomInt(80, 250)
    return (
        <motion.div
            style={{
                background: randomColor(),
                width: "100%",
                height: randomHeight,
                position: "relative",
                marginBottom: randomHeight,
            }}
            animate={{
                y: randomDirection(),
            }}
            transition={{
                duration: getRandomInt(2, 9),
                ease: randomCurve(),
                yoyo: 'Infinity'
            }}
        >
            <div style={{
                display: "inline-block",
                width: "100%",
                paddingBottom: "100%",
                background: randomColor(),
                borderRadius: "50%",
                marginTop: "-50%"
            }}>
            </div>
            <div style={{
                display: "inline-block",
                width: "100%",
                paddingBottom: "100%",
                background: randomColor(),
                borderRadius: "50%",
                position: "absolute",
                bottom: "0",
                left: "0",
                transform: "translateY(50%)"
            }}>
            </div>
        </motion.div>
    )
}