import React from "react"
import { motion } from "framer-motion"
import LeftNavButton from "./leftNavButton"

export default function LeftNav() {
  return (
    // wrap
    <div
      style={{
        color: "white",
        width: "calc(100vw/12)",
        height: "100vh",
        borderRight: "1px solid rgba(157,157,157,0.5)",
      }}
    >
      {/* top logo */}
      <div
        style={{
          width: "inherit",
          height: "22vh",
          borderBottom: "1px solid rgba(157,157,157,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={require("../images/innovationStudio-logo-white.svg")}
          style={{ height: 40, transform: "rotate(90deg)" }}
        />
      </div>
      {/* bot wrap */}
      <div
        style={{
          width: "inherit",
          height: "78vh",
          color: "white",
          writingMode: "vertical-rl",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* visa ready slogan */}
        <div
          style={{
            height: "45vh",
            width: "inherit",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontFamily: "gt-washeim",
              fontSize: "1.5vw",
            }}
          >
            Visa Ready
          </h1>
          <p
            style={{
              height: "24vh",
              fontFamily: "gt-washeim-light",
              fontSize: "0.7vw",
            }}
          >
            Discover how you can take your digital payment solution to market.
          </p>
        </div>
        <LeftNavButton />
        {/* back button */}
      </div>
    </div>
  )
}
