import React from "react"
import { motion, useTransform, useViewportScroll } from "framer-motion"
import "../../components/myfont.css"
import useWindowSize from "../useWindowSize"
import useWindowPosition from "../useWindowPos"

const smooth = [0.4, 0, 0, 1]
const flow = [0.4, 0, 0.2, 1]


export default function S3MidCard() {
    const scrollPosition = useWindowPosition()
    const size = useWindowSize()

    const { scrollY } = useViewportScroll()

    const borderWidth = useTransform(
        scrollY,
        [size.height * 2, size.height * 2.5],
        [0, 40]
    )

    return (
        <motion.div className='s3-mid-card'
            style={{
                width: "41.8vh",
                height: "65.4vh",
                borderRadius: 8,
                backgroundColor: "white",
                boxShadow: "0 20px 40px 0 rgba(0,0,0,0.50)",
                position: "relative",
                top: "calc((200vh + 65.4vh + (100vh - 65.4vh)/2) * -1)",
                left: "50%",
                x: "-50%",
                y: scrollY,
            }}
        ></motion.div>
    )
}
