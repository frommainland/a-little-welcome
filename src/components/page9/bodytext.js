import React from "react"
import { motion } from "framer-motion"

export default function BodyText(props) {
    return (
        <motion.div style={{
            color: 'white',
            width: '80%',
            height: '80%',
            position: 'absolute',
            left: '50%',
            x: '-50%',
            top: '50%',
            y: '-50%',
            mixBlendMode: 'exclusion',
            fontFamily: 'gt-washeim-light',
        }}>
            <span style={{
                fontSize: '1vw',
                padding: 10,
                border: 'solid 1px white'
            }}>Reduce risk of fraud and breach</span>
            <h1
                style={{
                    position: 'absolute',
                    bottom: 0,
                    fontSize: '1vw'
                }}>Lifecycle <br />management
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    fontSize: '1vw',
                    textAlign: 'end'
                }}>
                Higher authorization <br />rates
            </h1>
            <h1
                style={{
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    fontSize: '1vw',
                    textAlign: 'end'
                }}>
                Issuer-provided <br />card art
            </h1>
        </motion.div>
    )
}