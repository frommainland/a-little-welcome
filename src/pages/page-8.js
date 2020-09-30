import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, AnimatePresence } from "framer-motion"
import LeftNav from "../components/leftNav"
import "../components/myfont.css"
import NumberAnimate from "../components/page8/numberAnimate"

export default function Page8() {
  return (
    <Layout>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: "black",
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
        }}
      >
        <LeftNav />

        {/* animate number wrap*/}
        <div
          style={{
            gridColumn: "2 / 6",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NumberAnimate />
        </div>

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
