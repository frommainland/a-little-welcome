import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import MarqueeFull from '../components/marqueeFull'



const page4 = () => (
    < Layout >
        <div style={{
            background: 'black',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        }}>
            <MarqueeFull />
        </div>
        <img
            style={{
                position: 'absolute',
                top: "50%",
                left: "50%",
                transform: 'translate(-50%, -50%)'
            }}
            src={require('../images/smile.svg')} />

    </Layout >
)

export default page4