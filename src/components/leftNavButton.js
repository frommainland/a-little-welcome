import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"

export default function LeftNavButton() {
  const [hover, sethover] = useState(false)
  let num = !hover ? 1 : 0
  return (
    <motion.div
      style={{
        width: 50,
        height: 50,
        borderRadius: 50,
        border: "1px solid #979797",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      animate={{
        scale: !hover ? 1 : 1.2,
        background: !hover ? "" : "white",
      }}
      onHoverStart={() => sethover(true)}
      onHoverEnd={() => sethover(false)}
    >
      <Link to="/">
        <motion.img
          src={require("../images/arrow-left.svg")}
          style={{
            padding: 15,
            filter: "invert(1)",
          }}
          whileHover={{
            filter: "invert(0)",
          }}
        />
      </Link>
    </motion.div>
  )
}
