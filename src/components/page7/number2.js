import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import useWindowSize from "../useWindowResize"

export default function Number2() {
  const size = useWindowSize()
  let width = (size.width / 12) * 4 * 0.275
  const [index, setIndex] = useState(0)
  function renew() {
    setIndex(index + 2)
  }
  let redCircle = []
  const [redIndex, setRedIndex] = useState(1)

  function redrenew() {
    setRedIndex(redIndex + 2)
  }

  redCircle.push(
    <motion.div
      style={{
        width: width,
        height: width / 2,
        borderTopLeftRadius: width * 2,
        borderTopRightRadius: width * 2,
        background: "red",
        originY: 1,
        position: "absolute",
        bottom: 0,
        left: "50%",
        x: "-50%",
        color: "yellow",
      }}
      initial={{
        scale: 0,
        zIndex: redIndex,
      }}
      animate={{
        scale: [0, 1, 3.64],
      }}
      transition={{
        delay: redIndex === 1 ? 2 : 0,
        duration: 4,
      }}
      exit={{
        scale: 3.64 * 1.414,
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

  circles.push(
    <motion.div
      style={{
        width: width,
        height: width / 2,
        borderTopLeftRadius: width * 2,
        borderTopRightRadius: width * 2,
        background: "blue",
        originY: 1,
        position: "absolute",
        bottom: 0,
        left: "50%",
        x: "-50%",
        color: "yellow",
      }}
      initial={{
        scale: 0,
        zIndex: index,
      }}
      animate={{
        scale: [0, 1, 3.64],
      }}
      transition={{
        duration: 4,
      }}
      exit={{
        scale: 3.64 * 1.414,
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
        height: (size.width / 12) * 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <AnimatePresence>{circles}</AnimatePresence>
      <AnimatePresence>{redCircle}</AnimatePresence>
    </div>
  )
}
