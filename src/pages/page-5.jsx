import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, useAnimation } from "framer-motion"

function Card(props) {
  const variants = {
    //      A D
    //      B C
    //left2bot
    a: {
      x: [100, 0, 0],
      y: [0, 0, 100],
    },
    //bot2right
    b: {
      x: [0, 0, 100],
      y: [-100, 0, 0],
    },
    //right2top
    c: {
      x: [-100, 0, 0],
      y: [0, 0, -100],
    },
    //bot2left
    d: {
      x: [0, 0, -100],
      y: [100, 0, 0],
    },
  }
  return (
    <div
      style={{
        width: 100,
        height: 100,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "black",
          position: "absolute",
        }}
        initial={{
          y: 100,
        }}
        variants={variants}
        animate={props.direction}
        transition={{
          duration: 3,
          loop: Infinity,
          repeatDelay: 3,
        }}
      ></motion.div>
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: "yellow",
          position: "absolute",
        }}
        initial={{
          y: 100,
        }}
        variants={variants}
        animate={props.direction}
        transition={{
          duration: 3,
          loop: Infinity,
          delay: 3,
          repeatDelay: 3,
        }}
      ></motion.div>
    </div>
  )
}

export default function page5() {
  return (
    <Layout>
      <div
        style={{
          width: 200,
          height: 200,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Card direction="a" />
        <Card direction="d" />
        <Card direction="b" />
        <Card direction="c" />
      </div>
    </Layout>
  )
}
