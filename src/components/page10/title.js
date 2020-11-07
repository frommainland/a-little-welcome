
import React from "react"
import { motion } from "framer-motion"
import "../../components/myfont.css"
import { array } from "prop-types"

export default function Title(props) {
    const gray = '#D4D4D4'
    const ease = [0.34, 0.3, 0.1, 1]

    const stringBIN = Array.from('BIN')
    const stringSponsorship = Array.from('Sponsorship')
    const stringExpandyourmarketportfolio = Array.from('Expand your market portfolio')

    const containerVar = {
        before: {},
        after: {
            transition: {
                staggerChildren: .1,
            }
        }
    }

    const containerVar2 = {
        before: {},
        after: {
            transition: {
                staggerChildren: .1,
                delayChildren: .5

            }
        }
    }

    const containerVar3 = {
        before: {},
        after: {
            transition: {
                staggerChildren: .05,
                delayChildren: .5
            }
        }
    }

    const textVar = {
        before: {
            y: '-3.5vw'
        },
        after: {
            y: ['-3.5vw', '0vw', '0vw', '3.5vw'],
            transition: {
                duration: 3.8,
                times: [0, .06, .93, 1],
                repeat: Infinity,
                ease: ease
            }
        }
    }

    const textVar2 = {
        before: {
            y: '-1.7vw'
        },
        after: {
            y: ['-1.7vw', '0vw', '0vw', '1.7vw'],
            transition: {
                duration: 3.8,
                times: [0, .06, .93, 1],
                repeat: Infinity,
                ease: ease
            }
        }
    }

    const textVar3 = {
        before: {
            y: '-1.38vw'
        },
        after: {
            y: ['-1.38vw', '0vw', '0vw', '1.38vw'],
            transition: {
                duration: 3.8,
                times: [0, .06, .93, 1],
                repeat: Infinity,
                ease: ease
            }
        }
    }


    return (
        <div style={{
            color: gray,
            width: '16.8vw',
            textTransform: 'uppercase'
        }}>
            <motion.div
                style={{
                    height: '9vw',
                    width: '100%',
                    overflow: 'hidden',
                    marginBottom: '1.25vw'
                }}>
                <motion.div style={{
                    fontFamily: 'cindieZ',
                    fontSize: '10.4vw',
                }}
                    animate={{
                        y: ['-9vw', '0vw', '0vw', '9vw']
                    }}
                    transition={{
                        duration: 8,
                        times: [0, .06, .93, 1],
                        ease: ease,
                        repeat: Infinity,
                    }}

                >5</motion.div>
            </motion.div>

            <motion.div
                style={{
                    height: '3.4vw',
                    width: '16.8vw',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                variants={containerVar}
                initial='before'
                animate='after'
            >
                {
                    stringBIN.map((item, i) => (
                        <motion.div
                            style={{
                                fontFamily: 'cindieZ',
                                fontSize: '3.4vw',
                                letterSpacing: 1.14,
                            }}
                            key={`item${i}`}
                            variants={textVar}
                        >
                            {item === ' ' ? '\u00A0' : item}
                        </motion.div>
                    ))
                }
            </motion.div>


            <motion.div style={{
                height: '1.7vw',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                willChange: 'transform',
                marginBottom: '.5vw'
            }}
                variants={containerVar2}
                initial='before'
                animate='after'>
                {
                    stringSponsorship.map((item, i) => (
                        <motion.div
                            style={{
                                fontFamily: 'cindieM',
                                fontSize: '2vw',
                                letterSpacing: .66
                            }}
                            key={`item${i}`}
                            variants={textVar2}
                        >
                            {item === ' ' ? '\u00A0' : item}
                        </motion.div>
                    ))
                }
            </motion.div>

            <motion.div
                style={{
                    height: '1.38vw',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    willChange: 'transform',
                    marginBottom: '1.7vw'
                }}
                variants={containerVar3}
                initial='before'
                animate='after'>
                {
                    stringExpandyourmarketportfolio.map((item, i) => (
                        <motion.div
                            style={{
                                fontFamily: 'cindieH',
                                fontSize: '1.38vw',
                                letterSpacing: .45,
                            }}
                            key={`item${i}`}
                            variants={textVar3}
                        >
                            {item === ' ' ? '\u00A0' : item}
                        </motion.div>
                    ))
                }

            </motion.div>

            <div style={{
                fontFamily: 'gt-washeim-light',
                fontSize: '1vw',
                letterSpacing: .32,
                textTransform: 'none',
                paddingTop: '1.6vw',
                paddingBottom: '1.6vw',
                textAlign: 'center',
                boxShadow: '0px -1px 0px 0px gray'
            }}>
                <p style={{
                    marginBottom: '1vw'
                }}>Become a go-to partner for fintechs beyond just BIN. This can open the door to other solutions in your portfolio.
            </p>
                <p style={{
                    marginBottom: '1vw'
                }}>Get access to framework and resources from Visa on your risk management, policies, business model and more.
            </p>
                <p style={{
                }}>Generate a low cost source of income through sponsorship of fintechs.
            </p>
            </div>

            <div style={{
                fontFamily: 'cindieZ',
                fontSize: '1vw',
                textAlign: 'center',
                color: '#F2AE14',
                paddingTop: '1.3vw',
                boxShadow: '0px -1px 0px 0px gray'
            }}>4 / 13, 16, 19
            </div>



        </div>
    )
}