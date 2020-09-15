import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import useWindowSize from "../useWindowResize"

export default function Number2Mid() {
  const size = useWindowSize()
  let slashWidth = (18 * size.width) / 100
  let slash = []

  slash.push(
    <motion.div
      style={{
        width: "auto",
        height: "45%",
        whiteSpace: "nowrap",
        display: "inline-block",
      }}
      animate={{
        x: ["0%", "-50%", "-100%"],
      }}
      transition={{
        duration: 4,
        loop: Infinity,
      }}
    >
      <div
        style={{
          width: "17vw",
          height: "100%",
          background: "black",
          display: "inline-block",
          transform: "skewX(-46deg)",
        }}
      />
      <div
        style={{
          width: "17vw",
          height: "100%",
          background: "blue",
          display: "inline-block",
          transform: "skewX(-46deg)",
        }}
      />
    </motion.div>
  )

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        whiteSpace: "nowrap",
        // overflow: "hidden",
      }}
    >
      {slash}
      {slash}
    </div>
  )
}
