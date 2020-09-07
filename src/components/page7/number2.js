import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useWindowSize from "../components/useWindowResize"

export default function Number2() {
  const size = useWindowSize()
  const [current, setcurrent] = useState(0)

  useEffect(() => {
    const time = setTimeout(() => {
      if (current === 0) {
        setcurrent(1)
      } else {
        setcurrent(0)
      }
    }, 2000)
    return () => clearTimeout(time)
  })

  // 三角形
  const trianges = []
  for (let index = 0; index < 2; index++) {
    let borderW =
      index > 0
        ? "calc(100vw/12*2) calc(100vw/12*2) 0 0"
        : "0 0 calc(100vw/12*2) calc(100vw/12*2)"
    let borderC =
      index > 0
        ? "black transparent transparent transparent"
        : "transparent transparent black transparent"
    trianges.push(
      <motion.div
        style={{
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: borderW,
          borderColor: borderC,
          position: "absolute",
        }}
        initial={{
          x: (size.width / 12) * 2,
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: -(size.width / 12) * 2,
        }}
        transition={{
          ease: [0.86, 0, 0.07, 1],
          duration: 1.5,
        }}
        key={index}
      />
    )
  }
}
