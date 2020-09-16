import React from "react"
import { motion } from "framer-motion"

export default function Number2Bot() {
  return (
    <motion.div
      style={{
        width: "100%",
        height: "23.75%",
        background: "#0053D0",
      }}
      initial={{
        x: "-100%",
      }}
      animate={{
        x: ["-100%", "0%", "100%"],
      }}
      transition={{
        duration: 4,
        loop: Infinity,
        delay: 2,
        repeatDelay: 0.1,
      }}
    ></motion.div>
  )
}
