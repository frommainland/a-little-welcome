
import React from "react"
import { motion } from "framer-motion"
import "../../components/myfont.css"

export default function Title(props) {
    let gray = '#D4D4D4'
    return (
        <div style={{
            color: gray,
            width: '16.8vw',
            textTransform: 'uppercase'
        }}>
            <h1
                style={{
                    fontFamily: 'cindieZ',
                    fontSize: '10.4vw',
                    boxShadow: '0px 1px 0px 0px gray',
                }}>
                5
            </h1>
            <h2
                style={{
                    fontFamily: 'cindieZ',
                    fontSize: '3.4vw',
                    letterSpacing: 1.14,
                    marginTop: '2.5vw'
                }}
            >BIN
            </h2>
            <h2 style={{
                fontFamily: 'cindieM',
                fontSize: '2vw',
                letterSpacing: .66
            }}>Sponsorship</h2>

            <h2 style={{
                fontFamily: 'cindieH',
                fontSize: '1.38vw',
                letterSpacing: .45,
                paddingBottom: '1.3vw',
                boxShadow: '0px 1px 0px 0px gray',
            }}>Expand your market portfolio</h2>

            <p style={{
                fontFamily: 'cindieM',
                fontSize: '1vw',
                letterSpacing: .32,
                textTransform: 'none',
                paddingTop: '1.3vw',
                marginBottom: '1vw'
            }}>Become a go-to partner for fintechs beyond just BIN. This can open the door to other solutions in your portfolio.
            </p>
            <p style={{
                fontFamily: 'cindieM',
                fontSize: '1vw',
                letterSpacing: .32,
                textTransform: 'none',
                marginBottom: '1vw'
            }}>Get access to framework and resources from Visa on your risk management, policies, business model and more.
            </p>
            <p style={{
                fontFamily: 'cindieM',
                fontSize: '1vw',
                letterSpacing: .32,
                textTransform: 'none'
            }}>Generate a low cost source of income through sponsorship of fintechs.
            </p>
        </div>
    )
}