import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import useWindowSize from "../components/useWindowResize"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"

export default function Page6() {
  let yellow = "#FFA61F"
  let black = "#000000"
  let red = "#EB1B0F"
  let blue = "#0053D0"

  const size = useWindowSize()

  return (
    <Layout>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: black,
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
        }}
      >
        <LeftNav />

        {/* animate number wrap*/}
        <div
          style={{
            gridColumn: "2 / 6",
            background: "red",
            display: "grid",
            gridAutoFlow: "row dense",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "calc(100vw / 12 *2) auto",
          }}
        />

        {/* 右侧文字区 */}
        <div
          style={{
            gridColumn: "6 / 13",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </Layout>
  )
}
