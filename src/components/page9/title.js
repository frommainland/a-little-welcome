import React from "react"
import { motion } from "framer-motion"

export default function Title(props) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let clippath1 = []
    let clippath2 = []
    for (let index = 0; index < 20; index++) {
        let rando1 = getRandomInt(99) + 1
        let rando2 = getRandomInt(99) + 1
        let rando3 = getRandomInt(99) + 1
        let rando4 = getRandomInt(99) + 1
        clippath1.push(`inset(${rando1}% 0 ${rando2}% 0)`)
        clippath2.push(`inset(${rando3}% 0 ${rando4}% 0)`)
    }
    console.log(`clippath1 ${clippath1}`);

    return (
        <motion.div
            animate={{
                y: ['0%', '-100%']
            }}
            transition={{
                duration: 10,
                loop: Infinity,
                ease: [.4, 0, 0, 1]
            }}>
            <div style={{
                height: 40,
                width: '100%',
                background: 'black'
            }} />
            {/* wrap of glitch */}
            <div style={{
                position: 'relative',
                height: 230,
                width: '100%',

            }}>

                {/* glitch effect */}
                <motion.h1
                    style={{
                        fontFamily: "tusker-grotesk-4700",
                        fontSize: 200,
                        skewX: -16,
                        scaleY: 1.5,
                        textAlign: 'center',
                        originY: 0,
                        position: 'absolute',
                        left: '50%',
                        x: '-50%',

                    }}
                >
                    DIGITAL
                </motion.h1>
                <motion.h1
                    style={{
                        fontFamily: "tusker-grotesk-4700",
                        fontSize: 200,
                        skewX: -16,
                        scaleY: 1.5,
                        textAlign: 'center',
                        originY: 0,
                        position: 'absolute',
                        left: 'calc(50% - 2px)',
                        x: '-50%',
                        textShadow: '-2px 0 #00fff9, 2px 2px #ff00c1',
                    }}
                    animate={{
                        clipPath: clippath1
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: 'linear'
                    }}
                >
                    DIGITAL
                </motion.h1>
                <motion.h1
                    style={{
                        fontFamily: "tusker-grotesk-4700",
                        fontSize: 200,
                        skewX: -16,
                        scaleY: 1.5,
                        textAlign: 'center',
                        originY: 0,
                        position: 'absolute',
                        left: 'calc(50% + 2px)',
                        x: '-50%',
                        textShadow: '-2px 0 #ff00c1'
                    }}
                    animate={{
                        // clipPath: [
                        //     'inset(4% 0 31% 0)',
                        //     'inset(24% 0 10% 0)',
                        //     'inset(93% 0 21% 0)',
                        //     'inset(62% 0 64% 0)',
                        //     'inset(14% 0 79% 0)',
                        //     'inset(88% 0 13% 0)',
                        //     'inset(45% 0 69% 0)',
                        //     'inset(10% 0 50% 0)',
                        //     'inset(57% 0 44% 0)',
                        //     'inset(2% 0 2% 0)',
                        //     'inset(89% 0 20% 0)',
                        // ]
                        clipPath: clippath2
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: 'linear'
                    }}>
                    DIGITAL
                </motion.h1>
            </div>

            <motion.h1
                style={{
                    fontFamily: "tusker-grotesk-7600",
                    fontSize: 90,
                    skewX: 45,
                    scaleY: 0.6,
                    textAlign: 'center',
                    letterSpacing: 6,
                    marginLeft: 50,
                    color: '#B1B1B1',
                    marginTop: 70,
                }}>
                PAYMENT
            </motion.h1>
            <motion.h1
                style={{
                    fontFamily: "tusker-grotesk-4700",
                    fontSize: 200,
                    skewX: -16,
                    scaleY: -1.5,
                    textAlign: 'center',
                    scaleX: -1,
                    marginLeft: 90
                }}>
                DIGITAL
            </motion.h1>
            <div style={{
                height: 70,
                width: '100%',
                background: 'black'
            }} />
            <div style={{
                height: 40,
                width: '100%',
                background: 'black'
            }} />
            <motion.h1
                style={{
                    fontFamily: "tusker-grotesk-4700",
                    fontSize: 200,
                    skewX: -16,
                    scaleY: 1.5,
                    textAlign: 'center',
                    originY: 0
                }}>
                DIGITAL
            </motion.h1>
            <motion.h1
                style={{
                    fontFamily: "tusker-grotesk-7600",
                    fontSize: 90,
                    skewX: 45,
                    scaleY: 0.6,
                    textAlign: 'center',
                    letterSpacing: 6,
                    marginLeft: 50,
                    color: '#B1B1B1',
                    marginTop: 70,
                }}>
                PAYMENT
            </motion.h1>
            <motion.h1
                style={{
                    fontFamily: "tusker-grotesk-4700",
                    fontSize: 200,
                    skewX: -16,
                    scaleY: -1.5,
                    textAlign: 'center',
                    scaleX: -1,
                    marginLeft: 90,
                }}>
                DIGITAL
            </motion.h1>
            <div style={{
                height: 70,
                width: '100%',
                background: 'black'
            }} />
        </motion.div>
    )
}