import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, useAnimation } from "framer-motion"
import "../../components/myfont.css"

function Ball(index) {
  function getRandomInt(max) {
    return Math.random() * Math.floor(max)
  }
  let startDelay = getRandomInt(20)
  let ballDuration = 1
  let ballRepeatDelay = 1

  return (
    <div
      style={{
        width: "2.8vw",
        height: "2.8vw",
        position: "relative",
        display:
          (12 < index && index < 17) || (18 < index && index < 23)
            ? "none"
            : "block",
        placeSelf: "center",
      }}
      key={index}
    >
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          background: "#0053D0",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "2.8vw",
        }}
        animate={{
          x: "0.3vw",
          y: "0.3vw",
        }}
        transition={{
          duration: ballDuration,
          yoyo: Infinity,
          repeatDelay: ballRepeatDelay,
          delay: startDelay,
        }}
      />
      <motion.div
        style={{
          width: "100%",
          height: "100%",
          border: "2px #0053D0 solid",
          background: "black",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "2.8vw",
          color: "white",
        }}
        animate={{
          x: "-0.3vw",
          y: "-0.3vw",
        }}
        transition={{
          duration: ballDuration,
          yoyo: Infinity,
          repeatDelay: ballRepeatDelay,
          delay: startDelay,
        }}
      ></motion.div>
    </div>
  )
}

let balls = []

for (let i = 0; i < 42; i++) {
  balls.push(Ball(i))
}

export default function BallGrid() {
  return (
    <div
      style={{
        width: "37.5vw",
        height: "44vw",
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridTemplateRows: "repeat(7, 1fr)",
      }}
    >
      <div
        style={{
          gridColumn: "2 / 6",
          gridRow: "3 / 5",
          textAlign: "center",
          color: "#FEFEFE",
          display: "grid",
        }}
      >
        <div
          style={{
            height: "max-content",
            margin: "auto",
          }}
        >
          <h1
            style={{
              fontSize: "3vw",
              fontFamily: "harbour-bold",
              marginBottom: "1vw",
            }}
          >
            Biometrics
          </h1>
          <p
            style={{
              fontSize: "1.1vw",
              lineHeight: "1.7vw",
            }}
          >
            While convenient for consumers, biometrics help safeguard
            transactions by verifying the user's fingerprints, irises, voice, or
            face.
          </p>
        </div>
      </div>
      {balls}
    </div>
  )
}
