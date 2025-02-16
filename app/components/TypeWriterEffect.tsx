"use client"
import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWriterEffect = () => {
  return (
    <span className="text-sky-500 font-bold underline">
      <Typewriter
        words={["Front-end Developer", "MERN Stack Developer", "Full Stack Developer"]}
        loop={0}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  );
};

export default TypeWriterEffect;
