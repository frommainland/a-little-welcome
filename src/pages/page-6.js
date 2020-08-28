import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import useWindowSize from "../components/useWindowResize"

let yellow = "#FFA61F"
let black = "#000000"
let red = "#EB1B0F"
let blue = "#0053D0"

export default function Page6() {
  const size = useWindowSize()

  const trianges = []
  trianges.push(
    <div
      style={{
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "0 0 calc(100vw/12*2) calc(100vw/12*2)",
        borderColor: "transparent transparent black transparent",
      }}
    />
  )

  trianges.push(
    <div
      style={{
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "calc(100vw/12*2) calc(100vw/12*2) 0 0",
        borderColor: "black transparent transparent transparent",
      }}
    />
  )
  const [current, setcurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      if (current === 0) {
        setcurrent(current + 1)
      } else {
        setcurrent(0)
      }
    }, 3000)
    return () => clearInterval(interval)
  })

  console.log(current)
  return (
    <Layout>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: yellow,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
        }}
      >
        <div>menu</div>

        {/* animate number wrap*/}
        <div
          style={{
            gridColumn: "2 / 6",
            background: "white",
            display: "grid",
            gridAutoFlow: "row dense",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "calc(100vw / 12 *2) auto",
          }}
        >
          <div
            style={{
              gridColumn: "1 / 2",
              height: "calc(100vw / 12 *2 )",
              background: yellow,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <AnimatePresence>
              <motion.div
                style={{
                  width: "inherit",
                  height: "inherit",
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
                  duration: 3,
                }}
                key={current}
              >
                {trianges[current]}
              </motion.div>
            </AnimatePresence>
          </div>
          <div
            style={{
              gridColumn: "1 / 2",
              height: "calc(100vh - 100vw / 12 *2)",
              background: "green",
            }}
          >
            2
          </div>

          <div
            style={{
              gridColumn: "2 / 3",
              height: "100vh",
              background: yellow,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                background: black,
              }}
              initial={{
                y: "-100%",
              }}
              animate={{
                y: ["0%", "100%"],
              }}
              transition={{
                duration: 6,
                ease: [0.86, 0, 0.07, 1],
                loop: Infinity,
              }}
            />
            />
          </div>
        </div>
        <div
          style={{
            gridColumn: "6 / 13",
            background: "green",
          }}
        >
          {size.width}
        </div>
      </div>
    </Layout>
  )
}
