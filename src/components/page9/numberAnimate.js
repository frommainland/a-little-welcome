import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const red = "#FF0000"
const black = "black"

const easeAnim = [0.4, 0, 0.2, 1]

function TopRightUnit() {
    return (
        <motion.div style={{
            width: 'auto',
            height: '100%',
            whiteSpace: 'nowrap',
            display: 'inline-block'
        }}
            animate={{
                x: ['0%', '-50%', '-100%']
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: easeAnim
            }}
        >
            <div style={{
                display: 'inline-block',
                height: '100%',
                width: '7.81vw',
                background: red,
            }} />
            <div style={{
                display: 'inline-block',
                height: '100%',
                width: '7.81vw',
                background: black,
            }} />
        </motion.div>
    )
}
function Topright() {
    return (
        <div
            style={{
                gridColumn: "2 / 3",
                gridRow: "1/3",
                whiteSpace: 'nowrap',
                overflow: "hidden",
            }}
        >
            <TopRightUnit />
            <TopRightUnit />
        </div>
    )
}

function Slash(props) {
    return (
        <motion.div
            style={{
                width: 'auto',
                height: '100%',
                whiteSpace: 'nowrap',
                display: 'inline-block'
            }}
            animate={{
                x: ['-12.5%', '-37.5%', '-62.5%', '-87.5%', '-112.5%']
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: easeAnim
            }}
        >
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: black,
                    // marginLeft: props.num === 1 ? '4.1vw' : 0
                }}>
            </motion.div>
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: red
                }}>
            </motion.div>
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: black
                }}>
            </motion.div>
            <motion.div
                style={{
                    height: "100%",
                    width: "8.3vw",
                    display: 'inline-block',
                    skewX: -20,
                    background: red
                }}>
            </motion.div>
        </motion.div>
    )
}

function SlashAll() {
    return (
        <div style={{
            gridColumn: "1 / 2",
            gridRow: "1/3",
            whiteSpace: 'nowrap',
            overflow: "hidden",
        }}>
            <Slash />
            <Slash />
        </div>
    )
}

function BotLeftUnit() {
    return (
        <motion.div style={{
            width: '100%',
            height: 'auto',
            whiteSpace: 'nowrap'
        }}
            animate={{
                y: ['0%', '-50%', '-100%']
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: easeAnim
            }}
        >
            <div style={{
                width: '100%',
                height: '7.81vw',
                background: red,

            }}></div>
            <div style={{
                width: '100%',
                height: '7.81vw',
                background: black,

            }}></div>
        </motion.div>
    )
}

function BotLeft() {
    return (
        <div style={{
            gridColumn: "1 / 2",
            gridRow: "3 / 4",
            whiteSpace: 'nowrap',
            overflow: "hidden",
        }}>
            <BotLeftUnit />
            <BotLeftUnit />
        </div>
    )
}

function BotRightUnit() {
    return (
        <motion.div style={{
            width: '100%',
            height: 'auto',
        }}
            animate={{
                y: ['0%', '-37.3%', '-74.6%'],
                x: ['0%', '-74.6%', '-149.2%'],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: easeAnim
            }}>
            <div style={{
                background: red,
                height: '10.41vw',
                width: '100%',
                // position: 'relative'
            }}></div>
            <div style={{
                background: black,
                height: '10.41vw',
                width: '100%',
                position: 'relative',
                left: '7.77vw',
                top: '-2.63vw'

            }}></div>
        </motion.div>
    )
}
function BotRightUnit2() {
    return (
        <motion.div style={{
            width: '100%',
            height: 'auto',
            position: 'relative',
            left: '15.54vw',
            top: '-5.26vw'
        }}
            animate={{
                y: ['0%', '-37.3%', '-74.6%'],
                x: ['0%', '-74.6%', '-149.2%'],
            }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: easeAnim
            }}>
            <div style={{
                background: red,
                height: '10.41vw',
                width: '100%',

            }}></div>
            <div style={{
                background: black,
                height: '10.41vw',
                width: '100%',
                position: 'relative',
                left: '7.77vw',
                top: '-2.63vw'

            }}></div>
        </motion.div>
    )
}

function BotRight() {
    return (
        <div style={{
            gridColumn: "2 / 3",
            gridRow: "3 / 4",
            overflow: "hidden"
        }}>
            <BotRightUnit />
            <BotRightUnit2 />
        </div>
    )
}
export default function NumberAnimate() {
    return (
        <div
            style={{
                width: "20.8vw",
                height: "31.25vw",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "repeat(3, 1fr)",
                gap: 4
            }}
        >
            <SlashAll />
            <Topright />
            <BotLeft />
            <BotRight />
        </div>
    )
}
