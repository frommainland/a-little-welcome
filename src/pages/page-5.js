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
    haha: {
      background: '"#FFA61F"',
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
          background: props.div1Color,
          position: "absolute",
        }}
        variants={variants}
        animate={props.direction}
        transition={{
          duration: 1.5,
          loop: Infinity,
          repeatDelay: 1.5,
          delay: props.delay / 2,
        }}
      ></motion.div>
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: props.div2Color,
          position: "absolute",
        }}
        variants={variants}
        animate={props.direction}
        transition={{
          duration: 1.5,
          loop: Infinity,
          repeatDelay: 1.5,
          delay: props.delay / 2 + 1.5,
        }}
      ></motion.div>
    </div>
  )
}

export default function page5() {
  let yellow = "#FFA61F"
  let black = "#000000"
  let red = "#EB1B0F"
  let blue = "#0053D0"

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
        <Card direction="a" div1Color={red} div2Color={blue} delay={1.5} />
        <Card direction="d" div1Color={black} div2Color={yellow} delay={0} />
        <Card direction="b" div1Color={yellow} div2Color={black} delay={0} />
        <Card direction="c" div1Color={blue} div2Color={red} delay={1.5} />
      </div>
    </Layout>
  )
}
