import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { motion, useAnimation } from "framer-motion"
import styled, { keyframes } from "styled-components"

let yellow = "#FFA61F"
let black = "#000000"
let red = "#EB1B0F"
let blue = "#0053D0"

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
          ease: "anticipate",
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
          ease: "anticipate",
        }}
      ></motion.div>
    </div>
  )
}

function HalfCircle() {
  return (
    <motion.div
      style={{
        height: 100,
        width: 200,
        background: yellow,
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        display: "inline-block",
        originY: 1,
      }}
      animate={{
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 3,
        ease: "anticipate",
        loop: Infinity,
      }}
    ></motion.div>
  )
}

function ScaleRight2Left() {
  return (
    <div
      style={{
        width: 100,
        height: 100,
        overflow: "hidden",
      }}
    >
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: black,
        }}
        // initial={{
        //   scale: 0,
        //   originY: 0,
        //   originX: 1,
        // }}
        animate={{
          scale: [0, 1, 0],
          originX: [1, 1, 0],
          originY: [0, 0, 1],
        }}
        transition={{
          duration: 3,
          ease: [
            [0.5, 0, 0.75, 0],
            [0.25, 1, 0.5, 1],
          ],
          loop: Infinity,
        }}
      ></motion.div>
    </div>
  )
}

function TwoCircle() {
  const rotate = keyframes`
  from {left: 0}
  to {left: 200px}
`

  const Circle = styled.div`
    background-color: rebeccapurple;
    position: absolute;
    width: 200px;
    height: 200px;
    animation: ${rotate} 2s linear infinite;
  `
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Circle />
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
          display: "inline-flex",
          flexWrap: "wrap",
        }}
      >
        <Card direction="a" div1Color={red} div2Color={blue} delay={1.5} />
        <Card direction="d" div1Color={black} div2Color={yellow} delay={0} />
        <Card direction="b" div1Color={yellow} div2Color={black} delay={0} />
        <Card direction="c" div1Color={blue} div2Color={red} delay={1.5} />
      </div>
      <HalfCircle />
      <ScaleRight2Left />
      <TwoCircle />
    </Layout>
  )
}
