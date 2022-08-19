import React from 'react'
import Typewriter from 'typewriter-effect'

export default function Jobrole() {
  return (
    <Typewriter
    options={{
        strings: [
          "Front-end Developer",
          "Web Developer",
          "React JS Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}
