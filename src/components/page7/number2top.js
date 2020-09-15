import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import useWindowSize from "../useWindowResize"

export default function Number2Top() {
  const size = useWindowSize()
  let width = (size.width / 12) * 4 * 0.275

  let redCircle = []
  const [redIndex, setRedIndex] = useState(1)

  function redrenew() {
    setRedIndex(redIndex + 2)
  }

  redCircle.push(
    <motion.div
      style={{
        width: "4.6vw",
        height: "2.3vw",
        borderTopLeftRadius: "9.2vw",
        borderTopRightRadius: "9.2vw",
        background: "black",
        originY: 1,
        position: "absolute",
        bottom: 0,
        left: "50%",
        x: "-50%",
      }}
      initial={{
        scale: 0,
        zIndex: redIndex,
      }}
      animate={{
        scale: [0, 1, 400 / 66, (400 / 66) * 1.414],
      }}
      transition={{
        delay: redIndex === 1 ? 2 : 0,
        duration: 6,
      }}
      exit={{
        scale: (400 / 66) * 1.414,
        transition: {
          duration: 2,
        },
      }}
      key={redIndex}
      onAnimationComplete={redrenew}
    />
  )

  //   top half circle

  let circles = []
  const [index, setIndex] = useState(0)
  function renew() {
    setIndex(index + 2)
  }
  circles.push(
    <motion.div
      style={{
        width: "4.6vw",
        height: "2.3vw",
        borderTopLeftRadius: "9.2vw",
        borderTopRightRadius: "9.2vw",
        background: "#0053D0",
        originY: 1,
        position: "absolute",
        bottom: 0,
        left: "50%",
        x: "-50%",
      }}
      initial={{
        scale: 0,
        zIndex: index,
      }}
      animate={{
        scale: [0, 1, 400 / 66, (400 / 66) * 1.414],
      }}
      transition={{
        duration: 6,
      }}
      exit={{
        scale: (400 / 66) * 1.414,
        transition: {
          duration: 2,
        },
      }}
      key={index}
      onAnimationComplete={renew}
    />
  )

  return (
    <div
      style={{
        width: "100%",
        height: "31.25%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>{circles}</AnimatePresence>
      <AnimatePresence>{redCircle}</AnimatePresence>
    </div>
  )
}
