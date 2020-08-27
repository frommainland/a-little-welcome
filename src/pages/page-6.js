import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, useAnimation } from "framer-motion"
import styled, { keyframes } from "styled-components"
import useWindowSize from "../components/useWindowResize"

let yellow = "#FFA61F"
let black = "#000000"
let red = "#EB1B0F"
let blue = "#0053D0"

export default function Page6() {
  const size = useWindowSize()
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
              display: "flex",
              flexDirection: "row",
              overflow: "hidden",
            }}
          >
            <motion.img
              style={{
                width: "inherit",
                height: "inherit",
              }}
              src={require("../images/page6-triangle.svg")}
              animate={{
                x: ["0%", "-50%", "-100%"],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                loop: Infinity,
              }}
            />
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
                y: -size.height,
              }}
              animate={{
                y: [-size.height, 0, 0, size.height],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                loop: Infinity,
              }}
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
