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
  from {left: 0};
  to {left: 100px};
`

  const zindex = keyframes`
0%, 49.9% {z-index: 1}
50%,100% {z-index: 0}
}
`

  const Circle1 = styled.div`
    background-color: ${red};
    border-radius: 100px;
    position: absolute;
    width: 200px;
    height: 200px;
    animation: ${rotate} 1.5s ease-in-out infinite alternate,
      ${zindex} 3s infinite reverse;
  `

  const Circle2 = styled.div`
    background-color: ${yellow};
    border-radius: 100px;
    position: absolute;
    width: 200px;
    height: 200px;
    animation: ${rotate} 1.5s linear infinite alternate-reverse;
  `
  return (
    <div
      style={{
        width: 300,
        height: 200,
      }}
    >
      <Circle1 />
      <Circle2 />
    </div>
  )
}

function Marquee() {
  let divs = []
  for (let index = 0; index < 2; index++) {
    divs.push(
      <motion.img
        key={index}
        src={require("../images/page-5-marquee.svg")}
        animate={{
          x: "-100%",
        }}
        transition={{
          duration: 3,
          ease: "linear",
          loop: Infinity,
        }}
      />
    )
  }
  return (
    <div
      style={{
        width: 200,
        height: 200,
        display: "flex",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      {divs}
    </div>
  )
}

function Spring() {
  return (
    <div
      style={{
        width: 500,
        height: 100,
        position: "relative",
      }}
    >
      <motion.div
        style={{
          width: 200,
          height: 100,
          background: black,
          originX: 0,
        }}
        animate={{
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          ease: ["easeOut", "easeIn"],
          flip: Infinity,
        }}
      />
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: yellow,
          borderRadius: 50,
          position: "absolute",
          top: 0,
          left: 200,
        }}
        animate={{
          x: [0, 200, 0],
        }}
        transition={{
          duration: 2,
          ease: ["easeOut", "linear"],
          flip: Infinity,
        }}
      />
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: red,
          borderRadius: 50,
          position: "absolute",
          top: 0,
          left: 200,
        }}
        animate={{
          x: [0, 200, 0],
        }}
        transition={{
          duration: 2,
          ease: ["easeOut", "easeIn"],
          flip: Infinity,
        }}
      />

      <motion.div
        style={{
          width: 100,
          height: 100,
          background: blue,
          borderRadius: 50,
          position: "absolute",
          top: 0,
          left: 200,
        }}
        animate={{
          x: [0, 200, 0],
        }}
        transition={{
          duration: 2,
          ease: ["easeOut", "circIn"],
          flip: Infinity,
        }}
      />
    </div>
  )
}

function Spring2() {
  return (
    <div
      style={{
        width: 500,
        height: 100,
        position: "relative",
      }}
    >
      <motion.div
        style={{
          width: 200,
          height: 100,
          background: yellow,
          position: "absolute",
          top: 0,
          left: 0,
          originX: 0,
        }}
        animate={{
          scaleX: [1, 2],
        }}
        transition={{
          duration: 1,
          ease: ["easeOut"],
          flip: Infinity,
        }}
      />
      <motion.div
        style={{
          width: 200,
          height: 100,
          background: blue,
          originX: 0,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        animate={{
          scaleX: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          ease: ["easeIn", "easeOut"],
          flip: Infinity,
        }}
      />
      <motion.div
        style={{
          width: 100,
          height: 100,
          background: red,
          borderRadius: 50,
          position: "absolute",
          top: 0,
          left: 200,
        }}
        animate={{
          x: [0, 200, 200, 200, 0],
        }}
        transition={{
          duration: 4,
          ease: ["easeOut", "linear", "linear", "easeOut"],
          flip: Infinity,
        }}
      />
    </div>
  )
}

function Filterball() {
  return (
    <motion.div
      style={{
        width: 100,
        height: 100,
        background: yellow,
        mixBlendMode: "difference",
        position: "absolute",
        borderRadius: 50,
      }}
      animate={{
        x: [100, 300, 300, 100, 100],
        y: [100, 100, 400, 400, 100],
      }}
      transition={{
        duration: 4,
        ease: "anticipate",
        loop: Infinity,
      }}
    />
  )
}
export default function page5() {
  return (
    <Layout>
      <div
        style={{
          width: 500,
          height: 600,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          position: "relative",
        }}
      >
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
        <Marquee />
        <Spring />
        <Spring2 />
        <Filterball />
      </div>
    </Layout>
  )
}
