import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import useWindowSize from "../useWindowResize"

export default function Number2Mid() {
  const size = useWindowSize()

  const [index, setIndex] = useState(0)
  const [i, setI] = useState(0)
  const [c, setC] = useState(0)
  const [d, setD] = useState(0)

  function renew() {
    setIndex(index + 1)
  }
  function renew2() {
    setI(i + 1)
  }
  function renewC() {
    setC(c + 1)
  }
  function renewD() {
    setD(d + 1)
  }

  let slash = []

  slash.push(
    <motion.div
      style={{
        width: "17vw",
        height: "45%",
        background: "red",
        position: "absolute",
        skewX: -46,
      }}
      initial={{
        x: "235%",
      }}
      animate={{
        x: ["235%", "135%", "35%", "-65%", "-165%"],
      }}
      transition={{
        duration: 8,
      }}
      key={index}
      exit={{
        x: "-265%",
        transition: {
          duration: 2,
        },
      }}
      onAnimationComplete={renew}
    ></motion.div>
  )

  let slash2 = []
  slash2.push(
    <motion.div
      style={{
        width: "17vw",
        height: "45%",
        background: "blue",
        position: "absolute",
        skewX: -46,
      }}
      initial={{
        x: "235%",
      }}
      animate={{
        x: ["235%", "135%", "35%", "-65%", "-165%"],
      }}
      transition={{
        delay: i === 0 ? 2 : 0,
        duration: 8,
      }}
      key={i}
      exit={{
        x: "-265%",
        transition: {
          duration: 2,
        },
      }}
      onAnimationComplete={renew2}
    ></motion.div>
  )

  let slash3 = []
  slash3.push(
    <motion.div
      style={{
        width: "17vw",
        height: "45%",
        background: "red",
        position: "absolute",
        skewX: -46,
      }}
      initial={{
        x: "235%",
      }}
      animate={{
        x: ["235%", "135%", "35%", "-65%", "-165%"],
      }}
      transition={{
        delay: c === 0 ? 4 : 0,
        duration: 8,
      }}
      key={c}
      exit={{
        x: "-265%",
        transition: {
          duration: 2,
        },
      }}
      onAnimationComplete={renewC}
    ></motion.div>
  )

  let slash4 = []
  slash4.push(
    <motion.div
      style={{
        width: "17vw",
        height: "45%",
        background: "blue",
        position: "absolute",
        skewX: -46,
      }}
      initial={{
        x: "235%",
      }}
      animate={{
        x: ["235%", "135%", "35%", "-65%", "-165%"],
      }}
      transition={{
        delay: c === 0 ? 6 : 0,
        duration: 8,
      }}
      key={d}
      exit={{
        x: "-265%",
        transition: {
          duration: 2,
        },
      }}
      onAnimationComplete={renewD}
    ></motion.div>
  )

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {slash}
      {slash2}
      {slash3}
      {slash4}
    </div>
  )
}
