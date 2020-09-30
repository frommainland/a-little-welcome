import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Number2Bot() {
  let animationease = [0.86, 0, 0.07, 1]
  const [i, setI] = useState(0)
  function setNew() {
    setI(i + 1)
  }

  return (
    <AnimatePresence>
      <motion.div
        style={{
          width: "100%",
          height: "23.75%",
          background: "#0053D0",
          position: "absolute",
          x: "-100%",
        }}
        // initial={{
        //   x: "-100%",
        // }}
        animate={{
          x: ["-100%", "0%", "100%"],
        }}
        transition={{
          duration: 4,
          ease: animationease,
          delay: i === 0 ? 2 : 0,
        }}
        exit={{
          x: "200%",
          transition: {
            duration: 2,
            ease: animationease,
          },
        }}
        key={i}
        onAnimationComplete={setNew}
      />
    </AnimatePresence>
  )
}
