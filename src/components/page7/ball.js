import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import useWindowSize from "../useWindowResize"

export default function Balls() {
  function getRandomInt(max) {
    return Math.random() * Math.floor(max)
  }
  let startDelay = getRandomInt(20)
  let ballDuration = 1
  let ballRepeatDelay = 1

  console.log(startDelay)
  return (
    <div
      style={{
        width: "2.8vw",
        height: "2.8vw",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          background: "#0053D0",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "2.8vw",
        }}
        animate={{
          x: "0.3vw",
          y: "0.3vw",
        }}
        transition={{
          duration: ballDuration,
          yoyo: Infinity,
          repeatDelay: ballRepeatDelay,
          delay: startDelay,
        }}
      />
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          border: "2px #0053D0 solid",
          background: "black",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "2.8vw",
        }}
        animate={{
          x: "-0.3vw",
          y: "-0.3vw",
        }}
        transition={{
          duration: ballDuration,
          yoyo: Infinity,
          repeatDelay: ballRepeatDelay,
          delay: startDelay,
        }}
      />
    </div>
  )
}
